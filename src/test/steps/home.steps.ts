import { Given, Then, When } from "@cucumber/cucumber";
import { Homepage } from "../../pages/homePage";
import { fixture } from "../../hooks/pageFixture";


Given(`user navigates to google home page`, async function(){
    const homePage = new Homepage(fixture.page);
    await homePage.navigateToHomePage();

});
When(`user search for Playwright`, async function(){
    const homePage = new Homepage(fixture.page);
    await homePage.search();
    });
Then(`user should see the search`, async function(){
    const homePage = new Homepage(fixture.page);
    await homePage.verifySearchResult();
});
