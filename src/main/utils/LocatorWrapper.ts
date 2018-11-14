import {LocTypes} from './enum';

export class LocatorWrapper {
    public elementName : string;
    public elementValue : string;
    public elementType : LocTypes;
    public fromPageObject : string;

    constructor(elementName : string, elementValue : string, locatorType : LocTypes, whichPageObj : string){
        this.elementName = elementName;
        this.elementValue = elementValue;
        this.elementType = locatorType;
        this.fromPageObject = whichPageObj;
    }
}