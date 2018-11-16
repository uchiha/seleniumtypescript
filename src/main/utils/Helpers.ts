import { BrowserDrv } from "../common/BrowserDrv";
import {expect} from 'chai';

export class Helpers{
    public static Sleep(timeout: number){
        BrowserDrv.getDriver().manage().timeouts().implicitlyWait(timeout);
    }

    public static async Expect(toCheck : string, expectedString : string){
        try {
           expect(toCheck).to.equal(expectedString);
        } catch (error) {
            await BrowserDrv.getDriver().takeScreenshot().then((image: any) => {
              return BrowserDrv.getWorld().attach(image, "image/png");
            });
            throw new Error(error);
        }
    }

    public static async takeScreenshotWhenAssertFail(error : any){
        await BrowserDrv.getDriver().takeScreenshot().then((image: any) => {
            return BrowserDrv.getWorld().attach(image, "image/png");
        });
        throw new Error(error);
    }
}