import {test,expect} from '@playwright/test';
import {LoginPage} from './LoginPage';
import {SiteUserInputDetails} from './SiteDetails';
import { Homepage } from './HomePage';

test.describe('LoginPageTestCases',()=>{
    

test('Login With Valid Username & Password',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    await LoginPageInstance.login(SiteUserInputDetails.BaseURL,SiteUserInputDetails.Username, SiteUserInputDetails.Password);

    await expect (LoginPageInstance.headerPage).toHaveText('Swag Labs');
});

test('Login with Invalid Username & Valid Password',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    await LoginPageInstance.login(SiteUserInputDetails.BaseURL,'Test',SiteUserInputDetails.Password);

    await expect(LoginPageInstance.loginErrorPage).toBeVisible();
});

test('Login with Valid Username & Invalid password',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    await LoginPageInstance.login(SiteUserInputDetails.BaseURL,SiteUserInputDetails.Username,'Test');

    await expect(LoginPageInstance.loginErrorPage).toBeVisible();
});

test('Login with Locked-Out User',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    await LoginPageInstance.login(SiteUserInputDetails.BaseURL,'locked_out_user',SiteUserInputDetails.Password);

    await expect(LoginPageInstance.loginErrorPage).toBeVisible();
});

test('Verify "Username" and "Password" fields are required',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    await page.goto(SiteUserInputDetails.BaseURL);

    await (LoginPageInstance.loginButton).waitFor();

    await (LoginPageInstance.loginButton).click();

    await expect(LoginPageInstance.loginErrorPage).toBeVisible();

});

test('Verify logout functionality (via menu → logout)',async({page})=>{

    const LoginPageInstance = new LoginPage(page);

    const HomepageInstance = new Homepage(page);

    await LoginPageInstance.login(SiteUserInputDetails.BaseURL,SiteUserInputDetails.Username,SiteUserInputDetails.Password);

    await HomepageInstance.ClickBurgerMenu();

    await HomepageInstance.logout();

    await expect(page).toHaveURL(SiteUserInputDetails.BaseURL);
});



test.afterEach(async({page})=>{

    await page.close();
    
    });
});