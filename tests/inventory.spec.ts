import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithEnv();
});

test.describe('Inventory', () => {
  test('sort dropdown changes product order', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const firstBefore = await inventoryPage.getFirstProductName();
    const lastBefore = await inventoryPage.getLastProductName();
    await inventoryPage.selectSortOption('za');
    const firstAfter = await inventoryPage.getFirstProductName();
    const lastAfter = await inventoryPage.getLastProductName();
    expect(firstAfter).toBe(lastBefore);
    expect(lastAfter).toBe(firstBefore);
  });

  test('add to cart button updates cart badge', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.cartBadge).not.toBeVisible();
    await inventoryPage.addToCartSauceLabsBackpack.click();
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.addToCartSauceLabsBikeLight.click();
    await expect(inventoryPage.cartBadge).toHaveText('2');
  });
});
