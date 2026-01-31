import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get firstNameInput() {
    return this.page.locator('#first-name');
  }

  get lastNameInput() {
    return this.page.locator('#last-name');
  }

  get postalCodeInput() {
    return this.page.locator('#postal-code');
  }

  get continueButton() {
    return this.page.locator('#continue');
  }

  get finishButton() {
    return this.page.locator('#finish');
  }

  get completeHeader() {
    return this.page.locator('.complete-header');
  }

  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
