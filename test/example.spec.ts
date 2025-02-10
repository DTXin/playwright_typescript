import test, { expect } from '../base_fwk/fixtures/initPage';
import { LoginPage } from '../pageObjects/LoginPage/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage/DashboardPage';
import { CartPage } from '../pageObjects/CartPage/CartPage';
import { OrderPage } from '../pageObjects/OrderPage/OrderPage';
import { OrderHistoryPage } from '../pageObjects/OrderHistoryPage/OrderHistoryPage';
import { testdata } from './testData';

// test('Verify product name IPHONE 13 is dislayed on list product', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const dashboard = new DashboardPage(page);

//   // Go to website
//   await loginPage.goTo();

//   // Verify login successfully
//   await loginPage.validLogin();

//   // Verify product has name 'LG Refrigerator' is displayed
//   await dashboard.verifyProductDisplayed('IPHONE 13 PRO');
// });


test('Order a product from website', async ({ page, loginPage, dashboardPage, cartPage, orderPage, orderHistoryPage }, testinfo) => {
  /*
    1. Go to website
    2. Login
    3. Verify login successfully and direct to main page
  */
  await loginPage.goTo();
  await loginPage.login(testdata.username, testdata.password);
  await expect(page.getByRole('heading', { name: testdata.header })).toBeVisible();

  /*
    1. Click on "Add To Cart" button of product has name 'Iphone 13'
    2. Verify add to cart successfully  and "Product Added To Cart" popup is displayed
    3. Navigate to my shopping cart
  */
  await dashboardPage.clickAddToCart('Banarsi Saree');
  await dashboardPage.verifyProducAddedToCartSuccesfull('Product Added To Cart');
  await dashboardPage.navigateToCart();

  // /*
  //   1. Verify item has text "Iphone 13" is displayed on my cart
  //   2. Click on Checkout button
  // */
  await cartPage.verifyProductIsDisplayed('Banarsi Saree');
  await cartPage.clickOnCheckoutButton();

  // /*
  //   1. Verify order successfully
  //   2. Get order ID
  // */
  await orderPage.searchCountryAndSelect("india", "India");
  await orderPage.placeOrder();
  await orderPage.verifyOrderSuccessfully();
  await orderPage.getOrderID();

  /*
    1. Navigate to Order history page
    2. Veiry order ID is exists
  */
  await dashboardPage.navigateToOrder();
  await orderHistoryPage.verifyOrderIdDisplayed();
});