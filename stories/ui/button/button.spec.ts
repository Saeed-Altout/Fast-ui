import { test, expect } from "@playwright/test";

test.describe("Button component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/test/button");
  });

  test("renders default button", async ({ page }) => {
    const button = page.getByRole("button", { name: "Default" });

    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute("data-variant", "default");
    await expect(button).toHaveAttribute("data-size", "default");
  });

  test("applies variant styles correctly", async ({ page }) => {
    const destructive = page.getByRole("button", { name: "Destructive" });

    await expect(destructive).toHaveAttribute("data-variant", "destructive");
    await expect(destructive).toHaveClass(/bg-destructive/);
  });

  test("applies size variants", async ({ page }) => {
    const small = page.getByRole("button", { name: "Small" });
    const large = page.getByRole("button", { name: "Large" });

    await expect(small).toHaveAttribute("data-size", "sm");
    await expect(large).toHaveAttribute("data-size", "lg");
  });

  test("icon button renders correctly", async ({ page }) => {
    const iconButton = page.getByLabel("icon-button");

    await expect(iconButton).toBeVisible();
    await expect(iconButton).toHaveAttribute("data-size", "icon");
  });

  test("disabled button is not clickable", async ({ page }) => {
    const disabled = page.getByRole("button", { name: "Disabled" });

    await expect(disabled).toBeDisabled();
    await expect(disabled).toHaveClass(/disabled:opacity-50/);
  });

  test("asChild renders correct element", async ({ page }) => {
    const asChild = page.getByTestId("as-child-button");

    await expect(asChild).toBeVisible();
    await expect(asChild).toHaveAttribute("data-slot", "button");
    await expect(asChild).toHaveAttribute("data-variant", "default");
  });

  test("focus-visible styles work", async ({ page }) => {
    const button = page.getByRole("button", { name: "Default" });

    await button.focus();
    await expect(button).toBeFocused();
  });
});
