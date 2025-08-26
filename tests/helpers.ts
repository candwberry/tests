import { test, expect } from '@playwright/test';

interface TestOverviewOptions {
  url: string;
  title: string;
}

export const testOverview = ({ url, title }: TestOverviewOptions): void => {
  test.describe(`Page: ${url}`, () => {
    test('has correct title', async ({ page }) => {
      await page.goto(url);
      await expect(page).toHaveTitle(title);
    });
  });
};
