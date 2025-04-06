import { expect, test } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('Root redirects to Hebrew version', async ({ page }) => {
    // Navigate to the root page
    await page.goto('/');
    
    // The redirect should happen, resulting in the /he URL
    await expect(page).toHaveURL(/\/he/);
  });
  
  test('Hebrew version loads correctly', async ({ page }) => {
    // Go directly to Hebrew version
    await page.goto('/he');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Check if the page is accessible (no errors)
    const accessibilitySnapshot = await page.accessibility.snapshot();
    expect(accessibilitySnapshot).toBeTruthy();
  });
  
  test('English version loads correctly', async ({ page }) => {
    // Go directly to English version
    await page.goto('/en');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Check if the page is accessible (no errors)
    const accessibilitySnapshot = await page.accessibility.snapshot();
    expect(accessibilitySnapshot).toBeTruthy();
  });
}); 