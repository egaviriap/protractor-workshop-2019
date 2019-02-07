import { $, ElementFinder } from 'protractor';

export class SignInStep {
  private email: ElementFinder;
  private password: ElementFinder;
  private loginButton: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.loginButton = $('#SubmitLogin > span');
  }
  public async goToAddressPage(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
    await this.loginButton.click();
  }
}
