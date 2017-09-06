export class App {
    private appExists: boolean = true;

    public setAppExists(appExists: boolean) {
        this.appExists = appExists;
    }

    public getAppExists() {
        return this.appExists;
    }
}