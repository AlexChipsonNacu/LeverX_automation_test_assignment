import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get checkoutButton() {
    return this.page.locator('#checkout');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
