import {WebDriver} from 'selenium-webdriver';
import {BasePage} from '../common/BasePage';
import { LocatorWrapper } from '../utils/LocatorWrapper';
import { LocTypes } from '../utils/enum';
export class DashboardPage extends BasePage{

    private driver: WebDriver;

    // private DashboardProfileNameLoc : string = "div[class='DashboardProfileCard-name u-textTruncate'] a";
    private DASHBOARD_PROFILENAME= new LocatorWrapper("User name input", "div[class='DashboardProfileCard-name u-textTruncate'] a", LocTypes.css, DashboardPage.name);

    constructor(driver: WebDriver){
        super(driver);
        this.driver = driver;
    }

    public async getProfileName(){
       var elem = this.findTheElementUntilVisible(this.DASHBOARD_PROFILENAME).getText().then((profName) => {
           return profName;
       });

        // var elem = this.getElementByCss(this.DashboardProfileNameLoc).getText().then((profName) =>{
        //     return profName;
        // });
        return elem;
    }

}