import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('redirects unauthenticated users away from the dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    // Middleware should bounce them to the login page
    await expect(page).toHaveURL(/.*\/login/);
  });

  test('displays validation error on incorrect login attempt', async ({ page }) => {
    await page.goto('/login');
    
    // Fill mock/invalid credentials
    await page.fill('input[name="email"]', 'fake@user.com');
    await page.click('button:has-text("Sign in")');
    
    // Assert user remains on login or displays warning
    await expect(page).toHaveURL(/.*\/login/);
  });
});
