import {BrowserDrv} from '../main/common/BrowserDrv';
import {HomePage} from '../main/page_objects/homepage';

describe("These are simple tests in Typescript Mocha", ()=> {
    
    before((done)=>{
         console.warn(">> [Mocha]Trigger before");
         BrowserDrv.setDriver();
         BrowserDrv.getDriver().manage().window().maximize();
         BrowserDrv.getDriver().get("https://twitter.com");
        done();
    })

    after( (done)=>{
         console.warn(">> [Mocha]Trigger after");
         BrowserDrv.getDriver().quit();
         done();
    })

    it(" in twitter, I can login",  (done)=>{
        console.warn(">> Entering username and password");
        // let homepage = new HomePage(BrowserDrv.getDriver());
        //  homepage.ClickLogin();
         done();
    })
})