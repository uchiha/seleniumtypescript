import { BrowserDrv } from "../common/BrowserDrv";

export class Helpers{
    public static Sleep(timeout: number){
        BrowserDrv.getDriver().manage().timeouts().implicitlyWait(timeout);
    }
}