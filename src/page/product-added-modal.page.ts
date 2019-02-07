import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private proceedCheckout: ElementFinder;

  constructor () {
    this.proceedCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedCheckoutButton(): Promise<void> {
    await this.proceedCheckout.click();
  }
}
