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
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "marwie0904";

  if (!username) {
    return NextResponse.json({ error: "Username parameter is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`, {
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from GitHub contributions provider: ${res.status}`);
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
    });
  } catch (error) {
    console.error("GitHub contributions error:", error);
    return NextResponse.json(
      {
        error: "Failed to load GitHub activity",
        fallback: true,
      },
      { status: 500 }
    );
  }
}
