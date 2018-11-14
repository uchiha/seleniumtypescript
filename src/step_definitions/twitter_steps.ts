import {Given, When, Then, Before, After, AfterAll} from 'cucumber';
import {BrowserDrv} from '../main/common/BrowserDrv';
import {HomePage} from '../main/page_objects/homepage';
import { LoginPage } from '../main/page_objects/loginpage';
import { DashboardPage } from '../main/page_objects/dashboard';
import {expect} from 'chai';
import {SharedData} from '../main/utils/SharedData';

let homepage = null;
let loginpage = null;
let dashboardPage = null;

Before( async () => {
  console.warn(">> Trigger before");
  await BrowserDrv.setDriver();
  await BrowserDrv.getDriver().manage().window().maximize();
});

After(async () => {
  console.warn(">> Trigger after");
  SharedData.reset();
  await BrowserDrv.getDriver().quit();
});

When(/^"([^"]*)" is opened$/, {timeout: 4 * 5000} ,async (url) => {
    console.warn(">> Trigger URL opening..");
    await BrowserDrv.getDriver().get(url);
});
      
Then(/^some random stuff was generated here$/, () => {
    SharedData.generateFirstLastNames();
});
  
Then(/^that user is in the twitter login page$/, {timeout: 4 * 5000}, async () => {
  console.warn("FirstName: " + SharedData.firstname);
  console.warn("LastName: " + SharedData.lastname);
  console.warn(">> checking if we're in the homepage...");
  homepage = await new HomePage(BrowserDrv.getDriver());
  await homepage.ClickLogin();
});
  
Then(/^the registered user provided "([^"]*)" and password "([^"]*)"$/, {timeout: 4 * 5000}, async (userName, passWord) => {
    console.warn(">> Entering username and password");
    loginpage = await new LoginPage(BrowserDrv.getDriver());
    await loginpage.InputUsernamePassword(userName, passWord);
});

Then(/^the profile dashboard should display "([^"]*)"$/, {timeout: 4 * 5000}, async (profileName) => {
    console.warn(">> Entering username and password");
    dashboardPage = await new DashboardPage(BrowserDrv.getDriver());
    expect( await dashboardPage.getProfileName()).to.equal(profileName);
});
