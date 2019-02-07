import { $, ElementFinder } from 'protractor';

export class AddressStep {
  private proceedToCheckout: ElementFinder;

  constructor () {
    this.proceedToCheckout = $('#center_column > form > p > button > span');
  }

  public async goShippingPage(): Promise<void> {
    await this.proceedToCheckout.click();
  }
}
