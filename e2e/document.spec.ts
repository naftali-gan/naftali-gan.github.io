import { expect, test } from '@playwright/test';

test.describe('Document Structure Tests', () => {
  test('Hebrew version loads without errors', async ({ page }) => {
    await page.goto('/he');
    
    // Check basic document elements
    await expect(page).toHaveURL(/\/he/);
    
    // Check if the page has rendered content (doesn't throw error)
    await expect(page.locator('body')).toBeVisible();
    
    // Make sure there's no console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        test.fail(true, `Console error: ${msg.text()}`);
      }
    });
  });
  
  test('English version loads without errors', async ({ page }) => {
    await page.goto('/en');
    
    // Check basic document elements
    await expect(page).toHaveURL(/\/en/);
    
    // Check if the page has rendered content (doesn't throw error)
    await expect(page.locator('body')).toBeVisible();
    
    // Make sure there's no console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        test.fail(true, `Console error: ${msg.text()}`);
      }
    });
  });
}); 