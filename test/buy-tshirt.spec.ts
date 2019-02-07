import { $, browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModal, OrderSummary,
   SignInStep, AddressStep, ShippingStep, BankPayment,
   PaymentStep } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const orderSummaryPage: OrderSummary = new OrderSummary();
  const signInStep: SignInStep = new SignInStep();
  const addressStep: AddressStep = new AddressStep();
  const shippingStep: ShippingStep = new ShippingStep();
  const bankPayment: BankPayment = new BankPayment();
  const paymentStep: PaymentStep = new PaymentStep();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();

    await(browser.sleep(3000));
    await productListPage.goAddToCartButton();

    await(browser.sleep(3000));
    await productAddedModal.proceedCheckoutButton();

    await(browser.sleep(3000));
    await orderSummaryPage.goToLogin();

    await(browser.sleep(3000));
    await signInStep.goToAddressPage();

    await(browser.sleep(3000));
    await addressStep.goShippingPage();

    await(browser.sleep(3000));
    await shippingStep.goConfirmOrder();

    await(browser.sleep(3000));
    await bankPayment.goCheckOutPage();

    await(browser.sleep(3000));
    await paymentStep.goToConfirmOrderPage();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
