import { $, ElementFinder } from 'protractor';

export class PaymentStep {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }
  public async goToConfirmOrderPage(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
