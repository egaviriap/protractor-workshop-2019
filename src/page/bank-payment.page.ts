import { $, ElementFinder } from 'protractor';

export class BankPayment {
  private bankPaymentButton: ElementFinder;
  constructor () {
    this.bankPaymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goCheckOutPage(): Promise<void> {
    await this.bankPaymentButton.click();
  }
}
