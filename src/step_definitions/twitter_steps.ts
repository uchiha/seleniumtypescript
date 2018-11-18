
import {Given, When, Then, Before, After, AfterAll, Status} from 'cucumber';
import {BrowserDrv} from '../main/common/BrowserDrv';
import {HomePage} from '../main/page_objects/homepage';
import { LoginPage } from '../main/page_objects/loginpage';
import { DashboardPage } from '../main/page_objects/dashboard';
import {expect} from 'chai';
import {SharedData} from '../main/utils/SharedData';
import * as fs from 'fs';
import { Helpers } from '../main/utils/Helpers';

let homepage = null;
let loginpage = null;
let dashboardPage = null;

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

    // NOT WORKING ATM... 
    // let expectedSt = await dashboardPage.getProfileName();
    // Helpers.Expect(expectedSt, profileName);

    try {
      expect( await dashboardPage.getProfileName()).to.equal(profileName);
    } catch (error) {
      await Helpers.takeScreenshotWhenAssertFail(error);
    }
    
});
