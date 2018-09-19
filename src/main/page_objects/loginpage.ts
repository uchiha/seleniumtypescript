import {WebDriver, By} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import {LocTypes} from '../utils/enum';

export class LoginPage extends BasePage{

    private driver: WebDriver;
    private UserNameLoc : string = "input[name='session[username_or_email]']";
    private PasswordLoc : string = "input[name='session[password]']";
    constructor(driver: WebDriver){
        super(driver);
        this.driver = driver;
    }

    public async InputUsernamePassword(user: string, pass: string){
        await this.type(this.UserNameLoc, LocTypes.css, LoginPage.name, user);
        await this.type(this.PasswordLoc, LocTypes.css, LoginPage.name, pass);
    }
}