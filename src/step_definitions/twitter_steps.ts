import {Given, When, Then, Before, After, AfterAll} from 'cucumber';
import {BrowserDrv} from '../main/common/BrowserDrv';
import {HomePage} from '../main/page_objects/homepage';
import { LoginPage } from '../main/page_objects/loginpage';

let homepage = null;
let loginpage = null;

Before( async () => {
  console.warn(">> Trigger before");
  await BrowserDrv.setDriver();
  await BrowserDrv.getDriver().manage().window().maximize();
});

After(async () => {
  console.warn(">> Trigger after");
  await BrowserDrv.getDriver().quit();
});

When(/^"([^"]*)" is opened$/,async (url) => {
    console.warn(">> Trigger URL opening..");
    await BrowserDrv.getDriver().get(url);
});
          
  
Then(/^that user is in the twitter login page$/,async () => {
  console.warn(">> checking if we're in the homepage...");
  homepage = await new HomePage(BrowserDrv.getDriver());
  await homepage.ClickLogin();
});
  
Then(/^that the registered user provided "([^"]*)" and password "([^"]*)"$/, async (userName, passWord) => {
    console.warn(">> Entering username and password");
    loginpage = await new LoginPage(BrowserDrv.getDriver());
    await loginpage.InputUsernamePassword(userName, passWord);
    
});
