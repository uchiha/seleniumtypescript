import {WebDriver, By, until} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';
import { Helpers } from '../utils/Helpers';

export class LoginPage extends BasePage{

    private driver: WebDriver;
    private UserNameLoc : string = "(//input[@name='session[username_or_email]'])[2]";
    private PasswordLoc : string = "(//input[@name='session[password]'])[2]";
    private SignupHelpLoc : string = "//p[@class='signup-helper']";
    private LoginBtnLoc : string = "button[type='submit']";
    constructor(driver: WebDriver){
        super(driver);
        this.driver = driver;
        // create a method here to wait for a default element
        // this.waitUntilXpathElementIsStale(this.SignupHelpLoc);
    }

    public async InputUsernamePassword(user: string, pass: string){
        
        console.warn(">>>>>>>" + await this.waitUntilXpathElementIsStale(this.UserNameLoc));
        await this.type(this.UserNameLoc, LocTypes.xpath, LoginPage.name, user);
        await this.type(this.PasswordLoc, LocTypes.xpath, LoginPage.name, pass);
        await this.click(this.LoginBtnLoc, LocTypes.css, LoginPage.name);
    }
}