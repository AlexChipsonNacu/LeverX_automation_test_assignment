import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('complete checkout with shipping info', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginWithEnv();

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCartSauceLabsBackpack.click();
  await inventoryPage.cartLink.click();

  const cartPage = new CartPage(page);
  await cartPage.proceedToCheckout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillShippingInfo('John', 'Doe', '12345');
  await checkoutPage.continue();
  await checkoutPage.finish();

  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});
