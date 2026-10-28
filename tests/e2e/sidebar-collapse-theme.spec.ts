import { test, expect } from "@playwright/test";

test.describe("Sidebar Collapse & Theme Switching", () => {
  test("should collapse sidebar and center main body on desktop", async ({ page }) => {
    // Desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const desktopSidebar = page.locator("#desktop-sidebar");
    await expect(desktopSidebar).toBeVisible();

    // 1. Click collapse button in sidebar header
    const collapseBtn = desktopSidebar.getByRole("button", { name: /Collapse sidebar/i });
    await collapseBtn.click();

    // Sidebar should be collapsed
    await expect(desktopSidebar).toHaveClass(/opacity-0/);

    // Minimal square button appears
    const expandBtn = page.getByRole("button", { name: /Expand sidebar/i });
    await expect(expandBtn).toBeVisible();

    // Verify main body column is centered
    const mainContainer = page.locator("main");
    await expect(mainContainer).toHaveClass(/justify-center/);

    // 2. Click expand button to restore sidebar
    await expandBtn.click();
    await expect(desktopSidebar).not.toHaveClass(/opacity-0/);
    await expect(expandBtn).not.toBeVisible();
  });

  test("should toggle between Dark and Light mode and persist in localStorage", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    await expect(html).toHaveAttribute("data-theme", /^(dark|light)$/);
    const initialTheme = await html.getAttribute("data-theme");
    const expectedTheme = initialTheme === "dark" ? "light" : "dark";

    // Click theme toggle button (check mobile bar or desktop sidebar depending on viewport)
    const isMobile = await page.locator(".mobile-bar").isVisible();
    const themeBtn = isMobile
      ? page.locator(".mobile-bar").getByRole("button", { name: "Toggle theme" })
      : page.locator("#desktop-sidebar").getByRole("button", { name: /Switch to (Dark|Light) Mode/i });

    await themeBtn.click();

    // Auto-retry until React updates data-theme attribute
    await expect(html).toHaveAttribute("data-theme", expectedTheme);

    // Reload page to verify persistence without flash of unstyled theme
    await page.reload();
    await expect(html).toHaveAttribute("data-theme", expectedTheme);
  });
});
