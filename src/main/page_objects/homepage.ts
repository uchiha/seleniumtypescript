import {WebDriver, By, until} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';
import { Helpers } from '../utils/Helpers';

export class HomePage extends BasePage{

    private driver : WebDriver;
    private LoginLoc : string = "(//a[contains(.,'Log in')])[2]";
    private CommsContLoc : string = "div[class='StaticLoggedOutHomePage-communicationContent']";
    constructor(driver : WebDriver) {
        super(driver);
        this.driver = driver;
        // this.getElementByCss(this.CommsContLoc)
        driver.wait(until.elementIsVisible(this.driver.findElement(By.css(this.CommsContLoc))), 10000);
    }

    public async ClickLogin(){
        await this.click(this.LoginLoc, LocTypes.xpath, HomePage.name);
    }
}