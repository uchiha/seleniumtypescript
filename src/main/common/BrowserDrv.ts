import * as webdriver from 'selenium-webdriver';

export class BrowserDrv{
    private static driver : any;

    public static setDriver(){
        BrowserDrv.driver = new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
    };

    public static getDriver(){
        return BrowserDrv.driver;
    };
}