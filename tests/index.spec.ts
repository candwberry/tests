import { test, expect } from '@playwright/test';
import { testOverview } from './helpers';

const url = '/';
const title = 'Builders Merchants - Timber Merchant | C&W Berry';

testOverview({url, title});

test('search plywood, add to basket, go to checkout', async ({ page }) => {
  await page.goto(url);

  const search = page.locator('#search');
  await expect(search).toBeVisible();
  await expect(search).toHaveAttribute('placeholder', 'What are you looking for?');
  await expect(search).toHaveValue('');

  // type "plywood"
  await search.fill('plywood');
  await expect(search).toHaveValue('plywood');
  await expect(search).toBeFocused();

  // press enter and confirm URL
  await search.press('Enter');
  await expect(page).toHaveURL('/search?q=plywood');
  
  // find and click aria-label="Add to Basket"
  const addToBasketButton = page.locator('button[aria-label="Add to Basket"]').first();
  await expect(addToBasketButton).toBeVisible();
  await expect(addToBasketButton).toHaveText('Add to Basket');
  await addToBasketButton.click();
  
  // expect postcode popup to show
  const postcode = page.locator('#postcode');
  await expect(postcode).toBeVisible();
  await postcode.fill('PR25 2YH');
  await expect(postcode).toHaveValue('PR25 2YH');

  // click the sister button to postcode (Continue)
  const confirmPostcodeButton = postcode.locator('..').locator('button');
  await expect(confirmPostcodeButton).toBeVisible();
  await confirmPostcodeButton.click();

  // make sure we get told to choose options for your item
  const messages = page.locator('[x-html="message.text"]');
  const optionMessage = messages.filter({ hasText: 'You need to choose options for your item' }).first();
  await expect(optionMessage).toBeVisible(); // this also tests existence
  
  // select an option
  const select = page.locator('#product_addtocart_form select').first();
  await expect(select).toBeVisible();
  // scroll to it (required for options to appear on mobile..?)
  await select.scrollIntoViewIfNeeded();
  await select.selectOption({ index: 1 });
  // ^ it would be better if for all the above we had a set product
  
  // now add to basket again
  const addToBasketButton2 = page.locator('button[form="product_addtocart_form"]');
  await expect(addToBasketButton2).toBeVisible();
  await expect(addToBasketButton2).toHaveText('Add to Basket');
  await addToBasketButton2.click();

  // expect recommended items popup (expect close button and click it)
  const closeRecommended = page.locator('[x-ref="recommend-modal"] button').first();
  await expect(closeRecommended).toBeVisible();
  await closeRecommended.click();

  // confirm item is in basket (x-text="cart.summary_count")
  const cartSummaryCount = page.locator('[x-text="cart.summary_count"]');
  await expect(cartSummaryCount).toBeVisible();
  await expect(cartSummaryCount).toHaveText('1');

  // find and click basket
  const basket = page.locator('a#menu-cart-icon');
  await expect(basket).toBeVisible();
  await basket.click();

  // find and click checkout
  const checkout = page.locator('a', { hasText: "Checkout" });
  await expect(checkout).toBeVisible();
  await expect(checkout).toHaveText('Checkout');
  await checkout.click();

  await expect(page).toHaveURL(/\/checkout(?:[\/#?]|$)/);
});


