import {WebDriver} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
export class DashboardPage extends BasePage{

    private driver: WebDriver;
    private DashboardProfileNameLoc : string = "div[class='DashboardProfileCard-name u-textTruncate'] a";

    constructor(driver: WebDriver){
        super(driver);
        this.driver = driver;
    }

    public async getProfileName(){
        var elem = this.getElementByCss(this.DashboardProfileNameLoc).getText().then((profName) =>{
            return profName;
        });
        return elem;
    }

}