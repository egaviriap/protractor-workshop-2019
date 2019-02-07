import { $, ElementFinder } from 'protractor';

export class OrderSummary {
  private loginPage: ElementFinder;

  constructor () {
    this.loginPage = $('.cart_navigation span');
  }
  public async goToLogin(): Promise<void> {
    await this.loginPage.click();
  }
}
