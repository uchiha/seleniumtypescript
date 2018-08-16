import {WebDriver, By, until, WebElement} from 'selenium-webdriver';
import {LocTypes} from '../utils/enum';

export class BasePage{

    private _driver : WebDriver;
    private timeOut : number = 10000;
    constructor(driver : WebDriver) {
        this._driver = driver;
    }

    protected getElementByXPath(locator : string) : WebElement{
        var elem = this._driver.wait(until.elementLocated(By.xpath(locator)), this.timeOut);
        return elem;
    }

    protected getElementById(locator : string) : WebElement{
        var elem = this._driver.wait(until.elementLocated(By.id(locator)), this.timeOut);
        return elem;
    }

    protected async click(locator: string, loctype : LocTypes, className : string){
        switch(loctype){
            case LocTypes.xpath:
               try{
                await this.getElementByXPath(locator).click();
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of xpath type: \"" + locator + "\" is not visible.")
               }
               break;
            case LocTypes.id:
               try{
                await this.getElementById(locator).click();
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of id type: \"" + locator + "\" is not visible.")
               }
        }
    }
}