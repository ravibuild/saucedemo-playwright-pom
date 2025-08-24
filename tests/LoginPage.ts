import { Page } from '@playwright/test';

export class LoginPage {
  readonly usernameField;
  readonly passwordField;
  readonly loginButton;
  readonly headerPage;
  readonly loginErrorPage;

  constructor(private page: Page) {
    this.usernameField = this.page.locator('#user-name');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.locator('#login-button');
    this.headerPage = this.page.locator("//*[@id='header_container']/div[1]/div[2]/div");
    this.loginErrorPage = this.page.locator("//*[@id='login_button_container']/div/form/div[3]");
  }

  async login(baseUrl: string, username: string, password: string) {

    await this.page.goto(`${baseUrl}`);

    await this.usernameField.waitFor();
    await this.usernameField.fill(`${username}`);

    await this.passwordField.waitFor();
    await this.passwordField.fill(`${password}`);

    await this.loginButton.waitFor();
    await this.loginButton.click();
  }
}
