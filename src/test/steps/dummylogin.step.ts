import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LoginPage } from "../../pages/dummylogin";

const logInPage = new LoginPage(fixture.page);

Given(`user navigates to Preply home page`,async function(){
    
    await logInPage.navigateToSignUpPage();

});
When(`user clicks on login button`, async function(){
    await logInPage.clickLogin();
});

When(`user enters {string}, {string}, and {string}`, async function(username: string, password: string, email: string){
    await logInPage.filldeit(username,password,email)
});

When(`user clicks on the sign-up button`, async function(){
    await logInPage.login();
});
Then(`user should see the home page`,async function(){
    await logInPage.verifyLogin();

});

