import { Page } from "@playwright/test";

export class Homepage{

    readonly page;
    readonly Burger_MenuButton;
    readonly All_Itens;
    readonly About;
    readonly LogOutButton;
    readonly ResetAppState;

  constructor(page:Page) {

        this.page= page;

        this.Burger_MenuButton = this.page.locator('#react-burger-menu-btn');

        this.All_Itens= this.page.locator('#inventory_sidebar_link');
        
        this.About=this.page.locator('#about_sidebar_link');

        this.LogOutButton=this.page.locator('#logout_sidebar_link');

        this.ResetAppState=this.page.locator('#reset-sidebar-link');

    }

    async ClickBurgerMenu(){

        await this.Burger_MenuButton.waitFor();

        await this.Burger_MenuButton.click();
    }

    async logout(){

        await this.LogOutButton.waitFor();

        await this.LogOutButton.click();
    }



}