import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  test('successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithEnv();
    await expect(page).toHaveURL(/.*inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('shows error message on invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');
    await expect(loginPage.errorMessageByXpath).toBeVisible();
    await expect(loginPage.errorMessageByXpath).toContainText(
      'Username and password do not match'
    );
  });
});
