export class App {
    private _appExists: boolean = true;

    set appExists(appExists: boolean) {
        this._appExists = appExists;
    }

    get appExists() {
        return this._appExists;
    }
}
