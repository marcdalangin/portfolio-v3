import { test, expect } from "@playwright/test";

test.describe("Experience, Projects & Tech Stack", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display CV-aligned Experience roles with 'Confidential' for XIETECH", async ({ page }) => {
    const expSection = page.locator("#experience");
    await expect(expSection).toBeVisible();

    // 1. XIETECH must be displayed as "Confidential"
    await expect(expSection.getByText("Confidential", { exact: false })).toBeVisible();
    await expect(expSection.getByText(/Junior Software Engineer/i)).toBeVisible();

    // 2. DataCentric Corporation
    await expect(expSection.getByText("DataCentric Corporation")).toBeVisible();
    await expect(expSection.getByText("Data Analyst")).toBeVisible();

    // 3. Knowles Training Institute
    await expect(expSection.getByText("Knowles Training Institute")).toBeVisible();
    await expect(expSection.getByText(/Software Developer Intern/i)).toBeVisible();

    // 4. Freelance
    await expect(expSection.getByText("Freelance")).toBeVisible();
  });

  test("should display ONLY Fixture Checker in Personal Projects", async ({ page }) => {
    const projectsSection = page.locator("#projects");
    await expect(projectsSection).toBeVisible();

    // Fixture Checker must be present
    const fixtureChecker = projectsSection.getByText("Fixture Checker");
    await expect(fixtureChecker).toBeVisible();

    const featuredBadge = projectsSection.getByText("Featured");
    await expect(featuredBadge).toBeVisible();

    // Link must point to Fixture Checker GitHub repo
    const fixtureLink = projectsSection.locator("a[href*='live-monitoring-fixture-checker']");
    await expect(fixtureLink).toBeVisible();
    await expect(fixtureLink).toHaveAttribute("target", "_blank");

    // Removed projects must NOT be present
    await expect(projectsSection.getByText("Voogle Video AI Studio")).not.toBeVisible();
    await expect(projectsSection.getByText("TaskFlow Collaborative Engine")).not.toBeVisible();
  });

  test("should verify gated sections remain hidden", async ({ page }) => {
    // Hidden sections per sectionFlags
    await expect(page.getByText(/Private dev hub/i)).not.toBeVisible();
    await expect(page.getByText(/Community Reach/i)).not.toBeVisible();
    await expect(page.getByText(/Shipping in prod/i)).not.toBeVisible();
    await expect(page.getByText(/Client Projects/i)).not.toBeVisible();
    await expect(page.getByText(/Setup & Gear/i)).not.toBeVisible();
    await expect(page.getByText(/Pokes this month/i)).not.toBeVisible();
  });

  test("should render the single source of truth Tech Stack", async ({ page }) => {
    const stackSection = page.locator("#stack");
    await expect(stackSection).toBeVisible();

    // All categories from CV
    await expect(stackSection.getByText("Languages")).toBeVisible();
    await expect(stackSection.getByText("Frontend")).toBeVisible();
    await expect(stackSection.getByText("Backend and Cloud")).toBeVisible();
    await expect(stackSection.getByText("Tools", { exact: true })).toBeVisible();

    // Key technologies
    await expect(stackSection.getByText("Python", { exact: true })).toBeVisible();
    await expect(stackSection.getByText("TypeScript", { exact: true })).toBeVisible();
    await expect(stackSection.getByText("Next.js", { exact: true })).toBeVisible();
    await expect(stackSection.getByText("Docker", { exact: true })).toBeVisible();
  });
});
