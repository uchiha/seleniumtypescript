import {WebDriver, By, until} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';
import { Helpers } from '../utils/Helpers';
import {LocatorWrapper} from '../utils/LocatorWrapper';

export class HomePage extends BasePage{

    private driver : WebDriver;
    // private LoginLoc : string = "(//a[contains(.,'Log in')])[2]";
    // private CommsContLoc : string = "div[class='StaticLoggedOutHomePage-communicationContent']";
    private LOGIN_ELEM = new LocatorWrapper("2nd Login Button", "(//a[contains(.,'Log in')])[2]", LocTypes.xpath, HomePage.name);
    private LEFT_PANE_ELEM = new LocatorWrapper("Twitter purpose left pane backdrop", "div[class='StaticLoggedOutHomePage-communicationContent']", LocTypes.css, HomePage.name);
    constructor(driver : WebDriver) {
        super(driver);
        this.driver = driver;
        // this.getElementByCss(this.CommsContLoc)
        driver.wait(until.elementIsVisible(this.driver.findElement(By.css(this.LEFT_PANE_ELEM.elementValue))), 10000);
    }

    public async ClickLogin(){
        // await this.click(this.LOGIN_ELEM.elementValue, LocTypes.xpath, HomePage.name);
        await this._click(this.LOGIN_ELEM);
    }
}