import {WebDriver, By, until} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';
import { Helpers } from '../utils/Helpers';
import { LocatorWrapper } from '../utils/LocatorWrapper';

export class LoginPage extends BasePage{

    private driver: WebDriver;

    private USER_NAME = new LocatorWrapper("User name input", "(//input[@name='session[username_or_email]'])[2]", LocTypes.xpath, LoginPage.name);
    private PASSWORD = new LocatorWrapper("Password input", "(//input[@name='session[password]'])[2]", LocTypes.xpath, LoginPage.name);
    private SIGNUP_HELP = new LocatorWrapper("Signup help link", "//p[@class='signup-helper']", LocTypes.xpath, LoginPage.name);
    private LOGIN_BTN = new LocatorWrapper("The Login Button", "button[type='submit]", LocTypes.css, LoginPage.name);
    // private UserNameLoc : string = "(//input[@name='session[username_or_email]'])[2]";
    // private PasswordLoc : string = "(//input[@name='session[password]'])[2]";
    // private SignupHelpLoc : string = "//p[@class='signup-helper']";
    // private LoginBtnLoc : string = "button[type='submit']";
    constructor(driver: WebDriver){
        super(driver);
        this.driver = driver;
        // create a method here to wait for a default element
        // this.waitUntilXpathElementIsStale(this.SignupHelpLoc);
    }

    public async InputUsernamePassword(user: string, pass: string){
        
        console.warn(">>>>>>>" + await this.waitUntilXpathElementIsStale(this.USER_NAME.elementValue));
        // await this.type(this.UserNameLoc, LocTypes.xpath, LoginPage.name, user);
        // await this.type(this.PasswordLoc, LocTypes.xpath, LoginPage.name, pass);
        // await this.click(this.LoginBtnLoc, LocTypes.css, LoginPage.name);

        await this._type(this.USER_NAME, user);
        await this._type(this.PASSWORD, pass);
        await this._click(this.LOGIN_BTN);
    }
}