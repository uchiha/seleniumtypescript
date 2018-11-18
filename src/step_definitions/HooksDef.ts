import { Before, After, Status } from "cucumber";
import { BrowserDrv } from "../main/common/BrowserDrv";
import { SharedData } from "../main/utils/SharedData";

Before( async function(){
    console.warn(">> Trigger before");
    await BrowserDrv.setDriver();
    await BrowserDrv.setWorld(this);
    await BrowserDrv.getDriver().manage().window().maximize();
  });
  
  
After( async (testCase) =>{
    console.warn(">> Trigger after");
    SharedData.reset();
    
    if(testCase.result.status === Status.FAILED){
      
      // take screenshot when test fails...
        // BrowserDrv.getDriver().takeScreenshot().then((image : any, error : any)=>{
        //   fs.writeFile('out.png', image, 'base64', (error) => {
        //       console.log(error);
        //   });
        // });
  
      // works, but the screenshot is in the After step...
      // BrowserDrv.getDriver().takeScreenshot().then((image: any) => {
      //     return world.attach(image, "image/png");
      // });
     
  
    }
    
    await BrowserDrv.getDriver().quit();
});