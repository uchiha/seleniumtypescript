import {WebDriver, By, until, WebElement, ISize} from 'selenium-webdriver';
import {LocTypes} from '../utils/enum';
import { LocatorWrapper } from '../utils/LocatorWrapper';
import {BrowserDrv} from './BrowserDrv';

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

    protected getElementByCss(locator : string) : WebElement{
        var elem = this._driver.wait(until.elementLocated(By.css(locator)), this.timeOut);
        return elem;
    }

    protected waitUntilXpathElementIsStale(locator : string) : any{
        var elem = this._driver.wait(until.stalenessOf(this._driver.findElement(By.xpath(locator))), this.timeOut).then((el) => {
            return el;
        });
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
            case LocTypes.css:
               try{
                await this.getElementByCss(locator).click();
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of css type: \"" + locator + "\" is not visible.")
               }
        }
    }

    protected async type(locator: string, loctype: LocTypes, className: string, inputS: string){
        switch(loctype){
            case LocTypes.xpath:
               try{
                await this.getElementByXPath(locator).sendKeys(inputS);
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of xpath type: \"" + locator + "\" is not visible.")
               }
               break;
            case LocTypes.id:
               try{
                await this.getElementById(locator).sendKeys(inputS);
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of id type: \"" + locator + "\" is not visible.")
               }
            case LocTypes.css:
               try{
                await this.getElementByCss(locator).sendKeys(inputS);
               }catch(error){
                   console.error("[Error from PageObj ->\"" + className + "\"]Element of CSS type: \"" + locator + "\" is not visible.")
               }
        }
    }

    //############################# the modifications for LocatorWrapper #############################
    protected getByObjectFromLocWrap(locWrp : LocatorWrapper) : By{
        let theByObject : By;

        switch(locWrp.elementType){
            case LocTypes.xpath : {
                theByObject = By.xpath(locWrp.elementValue);
                break;
            }
            case LocTypes.id : {
                theByObject = By.id(locWrp.elementValue);
                break;
            }
            default : {
                theByObject = By.css(locWrp.elementValue);
                break;
            }
        }
        return theByObject;
    }

    protected findTheElementUntilVisible(wrpObj : LocatorWrapper){
        return this._driver.wait(until.elementLocated(this.getByObjectFromLocWrap(wrpObj)), this.timeOut);
    }

    protected async _click(elemWrap : LocatorWrapper){
        try {
            await this.findTheElementUntilVisible(elemWrap).click();
        } catch (error) {
            await this._driver.takeScreenshot().then((image: any) => {
                    return BrowserDrv.getWorld().attach(image, "image/png");
            });
            console.error(`==> I can't find the "${elemWrap.elementName}"`)
            throw new Error(`${error} \n ===# The element named "${elemWrap.elementName}" from "${elemWrap.fromPageObject}" page object was not found! #===`);
        }
        
    }

    protected async _type(elemWrap : LocatorWrapper, inputOn : string){
        try {
            await this.findTheElementUntilVisible(elemWrap).sendKeys(inputOn);
        } catch (error) {
            await this._driver.takeScreenshot().then((image: any) => {
                return BrowserDrv.getWorld().attach(image, "image/png");
            });
            console.error(`==> I can't find the "${elemWrap.elementName}"`)
            throw new Error(`${error} \n ===# The element named "${elemWrap.elementName}" from "${elemWrap.fromPageObject}" page object was not found! #===`);
        }
        
    }

    //############################# [END] the modifications for LocatorWrapper #############################
}