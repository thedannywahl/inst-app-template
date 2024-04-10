import { type Page, test } from "@playwright/test";

test("App Modal keyboard nav", async ({
  page,
}: { page: Page }): Promise<void> => {
  await page.goto("/");
  await page.getByRole("button", { name: "Show Modal" }).press("Enter");
  await page.getByRole("button", { name: "Close" }).press("Escape");
});
