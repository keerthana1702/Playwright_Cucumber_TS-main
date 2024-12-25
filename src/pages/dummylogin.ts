import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { expect } from "@playwright/test";
export class LoginPage{
    private base: PlaywrightWrapper;
    constructor(private page: Page){
        this.base =new PlaywrightWrapper(page);
    }
    public Elements ={
        searchbox: `//textarea[@id="APjFqb"]`,
        searchbutton: `//input[@aria-label="Google Search"]`,
        searchresult: `//span[text() ="Preply - Speak Confidently with Preply - Online Language Tutors"]`,
        loginbutton: `//a[@data-qa-id="header-login-btn"]`,
        studentSU:`//a[text()="Sign up as a student"]`,
        name:`//input[@id= "TEXT"]`,
        submit1:`//span[text()="Sign up"]`,
        home:`//h1[text() ="Online English tutors & teachers for private lessons"]`,
        email: `//input[@id="email"]`,
        password: `//input[@id="password"]`,
        
    }
    async navigateToSignUpPage(){
        await this.base.goto('https://preply.com');
    }
    async clickLogin(){
        const loginbutton = this.page.locator(this.Elements.loginbutton);
        await loginbutton.click();
    }
    async filldeit(username: string, userPassword: string, email: string){
        const studentSU = this.page.locator(this.Elements.studentSU);
        await studentSU.click();
        const name = this.page.locator(this.Elements.name);
        await name.fill(username);
        const emailField = this.page.locator(this.Elements.email);
        await emailField.fill(email);
        const passwordField = this.page.locator(this.Elements.password);
        await passwordField.fill(userPassword);
        const submit1 = this.page.locator(this.Elements.submit1);
        await submit1.click();
    }
    async login(){
        await this.base.goto('https://preply.com');
    }
    async verifyLogin(){
        const loginbutton = this.page.locator(this.Elements.loginbutton);
        await loginbutton.click();
        const email = this.page.locator(this.Elements.email);
        await email.fill("")
}}