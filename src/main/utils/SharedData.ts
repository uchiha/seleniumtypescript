export class SharedData {
    static fullname : any;
    static legalName : any;
    static lastCC4N0 : any;
    static firstname : any;
    static lastname : any;

    static reset() {
        this.fullname = null;
        this.lastCC4N0 = null;
        this.legalName = null;
        this.firstname = null;
        this.lastname = null;
    }

    static generateFirstLastNames(){
        SharedData.firstname = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
        SharedData.lastname = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    }

}