import {Given, When, Then, Before, After, AfterAll} from 'cucumber';
import {BrowserDrv} from '../main/common/BrowserDrv';
import {HomePage} from '../main/page_objects/homepage';

Before(() => {
  console.warn(">> Trigger before");
  BrowserDrv.setDriver();
  BrowserDrv.getDriver().manage().window().maximize();
});

After(async () => {
  console.warn(">> Trigger after");
  await BrowserDrv.getDriver().quit();
});

When(/^"([^"]*)" is opened$/, (url) => {
    console.warn(">> Trigger URL opening..");
    BrowserDrv.getDriver().get(url);
  });
          
  
  Then(/^that user is in the twitter login page$/, () => {
    
  });
  
  Then(/^that the registered user provided "([^"]*)" and password "([^"]*)"$/, function(userName, passWord) {
    console.warn(">> Entering username and password");
    let homepage = new HomePage(BrowserDrv.getDriver());
    homepage.ClickLogin();
  });
