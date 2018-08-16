import {WebDriver, By} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';

export class HomePage extends BasePage{

    private driver : WebDriver;
    private LoginLoc : string = "(//a[contains(.,'Log in')])[20]";
    constructor(driver : WebDriver) {
        super(driver);
        this.driver = driver;
        
    }

    public ClickLogin(){
        
        // try{
        //     await this.getElementByXPath(this.LoginLoc).click();
        // }catch(error){
        //     console.error("something is up>>>>>>>>>>>>>>>>>..");
        // }
        // await this.getElementByXPath(this.LoginLoc).click();
        this.click(this.LoginLoc, LocTypes.xpath, HomePage.name);
    }
}