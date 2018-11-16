import * as webdriver from 'selenium-webdriver';

export class BrowserDrv{
    private static driver : any;
    private static world : any;

    public static setDriver(){
        BrowserDrv.driver = new webdriver.Builder()
                // .usingServer('http://localhost:4444/wd/hub')
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
    };

    public static setWorld(world: any){
        BrowserDrv.world = world;
    }

    public static getDriver(){
        return BrowserDrv.driver;
    };

    public static getWorld(){
        return BrowserDrv.world;
    }
}