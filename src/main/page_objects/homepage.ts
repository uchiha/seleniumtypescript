import {WebDriver, By} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';

export class HomePage extends BasePage{

    private driver : WebDriver;
    private LoginLoc : string = "(//a[contains(.,'Log in')])[2]";
    constructor(driver : WebDriver) {
        super(driver);
        this.driver = driver;
        
    }

    public async ClickLogin(){
        await this.click(this.LoginLoc, LocTypes.xpath, HomePage.name);
    }
}