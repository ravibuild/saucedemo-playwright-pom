import {test,expect,Page,Locator} from '@playwright/test';

export class RequiredPages{

   constructor(private page: Page) {}

    async LoginPage(Baseurl:string,Username:string,Password:string){

    await this.page.goto(`${Baseurl}`);

    await this.page.locator('#user-name').waitFor();

    await this.page.locator('#user-name').click();

    await this.page.locator('#user-name').fill(`${Username}`);

    await this.page.locator('#password').waitFor();

    await this.page.locator('#password').click();

    await this.page.locator('#password').fill(`${Password}`);
    
    await this.page.locator('#login-button').waitFor();

    await this.page.locator('#login-button').click();

  }

  async Logout(){

    await this.page.locator('#react-burger-menu-btn').waitFor();

    await this.page.locator('#react-burger-menu-btn').click();

    await this.page.locator('#logout_sidebar_link').waitFor();

    await this.page.locator('#logout_sidebar_link').click();

  }

}