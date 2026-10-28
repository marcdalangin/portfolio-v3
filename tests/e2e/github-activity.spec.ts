import { test, expect } from "@playwright/test";

test.describe("GitHub Live Activity Integration", () => {
  test("should verify /api/github endpoint returns live authenticated data", async ({ request }) => {
    const response = await request.get("/api/github?username=marcdalangin");
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data.username).toBe("marcdalangin");
    expect(data.total).toBeGreaterThanOrEqual(100);
    expect(data.weeks).toBeInstanceOf(Array);
    expect(data.weeks.length).toBeGreaterThan(50);

    // Flatten weeks into days to inspect October 25 & 26
    const allDays = data.weeks.flat();
    const oct25 = allDays.find((d: { date: string }) => d.date === "2026-10-25");
    const oct26 = allDays.find((d: { date: string }) => d.date === "2026-10-26");

    expect(oct25).toBeDefined();
    expect(oct25.count).toBe(7);
    expect(oct25.level).toBeGreaterThanOrEqual(1);

    expect(oct26).toBeDefined();
    expect(oct26.count).toBe(7);
    expect(oct26.level).toBeGreaterThanOrEqual(1);
  });

  test("should render the GitHub heatmap UI with total contributions badge", async ({ page }) => {
    await page.goto("/");

    const githubSection = page.locator("#github");
    await expect(githubSection).toBeVisible();

    // Verify badge text
    const badge = githubSection.getByText(/\d+ contributions in the last year/i);
    await expect(badge).toBeVisible();

    // Verify heatmap grid renders with cells
    const cells = githubSection.locator("div[title*='contributions on']");
    const cellCount = await cells.count();
    expect(cellCount).toBeGreaterThan(300);

    // Check that October 26 cell has 7 contributions title
    const oct26Cell = githubSection.locator("div[title*='7 contributions on 2026-10-26']");
    await expect(oct26Cell).toBeVisible();
  });
});
