import {RequiredPages} from '../tests/Pages';
import {SiteUserInputDetails} from '../tests/Config';
import {test,expect,Page} from '@playwright/test';


test('LoginFunction',async({page})=>{

    const RequiredPagesInstance = new RequiredPages(page);

    await RequiredPagesInstance.LoginPage(SiteUserInputDetails.BaseURL,SiteUserInputDetails.Username, SiteUserInputDetails.Password);

    await expect (page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs');

    }
)

test('LogoutFunction',async({page})=>{

    const RequiredPagesInstance = new RequiredPages(page);

    await RequiredPagesInstance.LoginPage(SiteUserInputDetails.BaseURL,SiteUserInputDetails.Username, SiteUserInputDetails.Password);

    await RequiredPagesInstance.Logout();

    await expect (page).toHaveURL(SiteUserInputDetails.BaseURL);

    }
)