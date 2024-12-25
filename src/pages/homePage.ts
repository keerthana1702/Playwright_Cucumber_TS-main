import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect } from "@playwright/test";

export class Homepage{
    private base: PlaywrightWrapper;
    constructor(private page: Page){
        this.base =new PlaywrightWrapper(page);
    }
    public Elements ={
        searchbox: `//textarea[@id="APjFqb"]`,
        searchbutton: `//input[@aria-label="Google Search"]`,
        message:`//h3[text()="Playwright: Fast and reliable end-to-end testing for modern web apps"]`
    }

    async navigateToHomePage(){
        await this.base.goto('https://www.google.com');

    }
    async search(){
    const searchbox =this.page.locator(this.Elements.searchbox);
    await searchbox.fill("Playwright");
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press("Escape");
    await this.page.waitForTimeout(5000);
    const searchbutton = this.page.locator(this.Elements.searchbutton).nth(1);
    await searchbutton.click();
    }
    async verifySearchResult(){
        const message = this.page.locator(this.Elements.message);
        await expect(message).toBeVisible();
    }
    
}