import { $, ElementFinder } from 'protractor';

export class ShippingStep {
  private confirmOrderButton: ElementFinder;
  private acceptTermsAndConditionCheck: ElementFinder;

  constructor () {
    this.acceptTermsAndConditionCheck = $('#cgv');
    this.confirmOrderButton = $('#form > p > button > span');
  }
  public async goConfirmOrder(): Promise<void> {
    await this.acceptTermsAndConditionCheck.click();
    await this.confirmOrderButton.click();
  }
}
