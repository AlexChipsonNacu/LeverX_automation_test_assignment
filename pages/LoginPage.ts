import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get usernameInput() {
    return this.page.locator('#user-name');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }

  get errorMessage() {
    return this.page.locator('.error-message-container');
  }

  get errorMessageByXpath() {
    return this.page.locator('//div[contains(@class,"error-message-container")]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithEnv() {
    await this.goto();
    const username = process.env.LOGIN_USERNAME ?? '';
    const password = process.env.LOGIN_PASSWORD ?? '';
    await this.login(username, password);
  }
}
