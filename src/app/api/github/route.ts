import { NextResponse } from "next/server";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface GitHubActivityResponse {
  total: number;
  weeks: ContributionDay[][];
  username: string;
  updatedAt: string;
}

interface GraphQLDay {
  date: string;
  contributionCount: number;
  contributionLevel: string;
}

interface GraphQLWeek {
  contributionDays: GraphQLDay[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "marcdalangin";

  if (!username) {
    return NextResponse.json({ error: "Username parameter is required" }, { status: 400 });
  }

  // 1. If GITHUB_TOKEN environment variable is present, use official GitHub GraphQL API
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    try {
      const query = `
        query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

      const ghRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "Portfolio-v3-Agent",
        },
        body: JSON.stringify({ query, variables: { login: username } }),
        next: { revalidate: 300 }, // Cache server-side for 5 minutes
      });

      if (ghRes.ok) {
        const json = await ghRes.json();
        const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
        if (cal) {
          const total = cal.totalContributions;
          const weeks: ContributionDay[][] = cal.weeks.map((w: GraphQLWeek) =>
            w.contributionDays.map((d: GraphQLDay) => {
              const count = d.contributionCount || 0;
              let level = 0;
              if (d.contributionLevel === "FOURTH_QUARTILE") level = 4;
              else if (d.contributionLevel === "THIRD_QUARTILE") level = 3;
              else if (d.contributionLevel === "SECOND_QUARTILE") level = 2;
              else if (d.contributionLevel === "FIRST_QUARTILE" || count > 0) level = 1;

              return {
                date: d.date,
                count,
                level,
              };
            })
          );

          return NextResponse.json({
            total,
            weeks,
            username,
            updatedAt: new Date().toISOString(),
          });
        }
      }
    } catch (graphError) {
      console.warn("GitHub GraphQL query failed, falling back to public contributions provider:", graphError);
    }
  }

  // 2. Fallback to public contributions service with 5-minute server revalidation
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`, {
      next: { revalidate: 300 }, // 5 minutes cache
    });

    if (!res.ok) {
      throw new Error(`Public provider responded with status ${res.status}`);
    }

    const data = await res.json();
    const contributions: ContributionDay[] = data.contributions || [];
    const total = data.total?.lastYear ?? contributions.reduce((acc, c) => acc + c.count, 0);

    // Group into 7-day columns (weeks)
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    contributions.forEach((day: ContributionDay) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return NextResponse.json({
      total,
      weeks,
      username,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("GitHub contributions fetch failed:", error);
    return NextResponse.json(
      {
        error: "Failed to load live GitHub activity",
        fallback: true,
        username,
      },
      { status: 502 }
    );
  }
}
