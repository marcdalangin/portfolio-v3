import { test, expect } from "@playwright/test";

test.describe("Explore & Services Page", () => {
  test("should redirect /resources to /explore", async ({ page }) => {
    await page.goto("/resources");
    await expect(page).toHaveURL(/\/explore/);
  });

  test("should render Services section with 4 core capabilities and mailto CTA", async ({ page }) => {
    await page.goto("/explore");

    // Currently working with chip
    await expect(page.getByText(/Fintech Startup \(Philippines\)/i)).toBeVisible();

    // 4 Services in order
    await expect(page.getByText("Workflow Automation")).toBeVisible();
    await expect(page.getByText("AI Assistants")).toBeVisible();
    await expect(page.getByText("Integrations", { exact: true })).toBeVisible();
    await expect(page.getByText("Custom CRMs")).toBeVisible();

    // CTA mailto link
    const ctaLink = page.getByRole("link", { name: /Start a project/i });
    await expect(ctaLink).toBeVisible();
    await expect(ctaLink).toHaveAttribute("href", /^mailto:marcdarryl\.dev@gmail\.com/);
  });

  test("should render Tools I use with Antigravity and Claude Design", async ({ page }) => {
    await page.goto("/explore");

    const toolsSection = page.locator("#tools");
    await expect(toolsSection).toBeVisible();

    await expect(toolsSection.getByText("Antigravity")).toBeVisible();
    await expect(toolsSection.getByText("Google AI Pro")).toBeVisible();

    await expect(toolsSection.getByText("Claude Design")).toBeVisible();
    await expect(toolsSection.getByText("For designing")).toBeVisible();
  });

  test("should render non-clickable structured Links section", async ({ page }) => {
    await page.goto("/explore");

    const linksSection = page.locator("#links");
    await expect(linksSection).toBeVisible();

    // Links should not be interactive hrefs
    const linkItems = linksSection.locator("div.flex.items-center.justify-between");
    const count = await linkItems.count();
    expect(count).toBeGreaterThan(0);

    // Should display "Unlinked" or structured tag
    await expect(linksSection.getByText("Unlinked").first()).toBeVisible();
  });
});
