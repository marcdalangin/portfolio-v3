import { test, expect } from "@playwright/test";

test.describe("Home Page, CV Actions & Modals", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the page title, identity, and bio", async ({ page }) => {
    await expect(page).toHaveTitle(/Marc Dalangin \| Software Developer/i);

    const aboutSection = page.locator("#about");
    await expect(aboutSection.getByRole("heading", { level: 1, name: /Marc Dalangin/i })).toBeVisible();
    await expect(aboutSection.getByText("Software Developer")).toBeVisible();
    await expect(aboutSection.getByText(/Remote web developer with 2\+ years/i)).toBeVisible();
  });

  test("should have functional dual CV buttons (View & Download)", async ({ page, request }) => {
    const aboutSection = page.locator("#about");

    // 1. Primary "View CV" button
    const viewCvBtn = aboutSection.getByRole("link", { name: /View CV/i });
    await expect(viewCvBtn).toBeVisible();
    await expect(viewCvBtn).toHaveAttribute("href", "/assets/cv/Marc-Dalangin-CV.pdf");
    await expect(viewCvBtn).toHaveAttribute("target", "_blank");
    await expect(viewCvBtn).toHaveAttribute("rel", "noopener noreferrer");

    // 2. Secondary "Download CV" button
    const downloadCvBtn = aboutSection.locator("a[download='Marc-Dalangin-CV.pdf']");
    await expect(downloadCvBtn).toBeVisible();
    await expect(downloadCvBtn).toHaveAttribute("href", "/assets/cv/Marc-Dalangin-CV.pdf");

    // 3. Verify that the PDF is physically served by the Next.js server
    const pdfResponse = await request.get("/assets/cv/Marc-Dalangin-CV.pdf");
    expect(pdfResponse.status()).toBe(200);
    expect(pdfResponse.headers()["content-type"]).toContain("application/pdf");
  });

  test("should open and close the About Modal ('More about me')", async ({ page }) => {
    const moreAboutBtn = page.locator("#about").getByRole("button", { name: /More about me/i });
    await expect(moreAboutBtn).toBeVisible();
    await moreAboutBtn.click();

    // Verify modal content
    const modalHeading = page.getByRole("heading", { name: /Marc Dalangin \| Software Developer/i });
    await expect(modalHeading).toBeVisible();

    const educationSection = page.getByText(/Bachelor of Science in Computer Science/i);
    await expect(educationSection).toBeVisible();

    // Close modal
    const closeBtn = page.getByRole("button", { name: "Close modal" });
    await closeBtn.click();
    await expect(modalHeading).not.toBeVisible();
  });

  test("should open Contact Modal with dual emails", async ({ page }) => {
    // Check if on mobile or desktop viewport
    const isMobile = await page.locator(".mobile-bar").isVisible();
    const contactBtn = isMobile
      ? page.locator(".mobile-bar").getByRole("button", { name: /Contact/i })
      : page.locator("#desktop-sidebar").getByRole("button", { name: /Get in touch/i });

    await contactBtn.click();

    // Check modal heading
    const modalHeading = page.getByRole("heading", { name: /Get in Touch/i });
    await expect(modalHeading).toBeVisible();

    // Verify Project Inquiry email
    await expect(page.getByText("marcdarryl.dev@gmail.com")).toBeVisible();

    // Verify Professional / Work email
    await expect(page.getByText("marcdarryl.work@gmail.com")).toBeVisible();

    // Close modal
    const closeBtn = page.getByRole("button", { name: "Close modal" });
    await closeBtn.click();
    await expect(modalHeading).not.toBeVisible();
  });
});
