import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get sortDropdown() {
    return this.page.locator('.product_sort_container');
  }

  get productNames() {
    return this.page.locator('.inventory_item_name');
  }

  get addToCartSauceLabsBackpack() {
    return this.page.locator('#add-to-cart-sauce-labs-backpack');
  }

  get addToCartSauceLabsBikeLight() {
    return this.page.locator('button[id="add-to-cart-sauce-labs-bike-light"]');
  }

  get cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  get cartLink() {
    return this.page.locator('a.shopping_cart_link');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async selectSortOption(value: string) {
    await this.sortDropdown.selectOption(value);
  }

  async getFirstProductName() {
    return this.productNames.first().textContent();
  }

  async getLastProductName() {
    return this.productNames.last().textContent();
  }

  async addFirstProductToCart() {
    await this.page.locator('.inventory_item').first().locator('button').click();
  }
}
