import { App } from './app';

describe('Inital Test', () => {
  const testApp = new App();

  it('should pass if it can find App Class', () => {
    // tslint:disable-next-line:no-unused-expression
    expect(App).toBeDefined();
  });

  it('should find App.appExists', () => {
    // tslint:disable-next-line:no-unused-expression
    expect(testApp.appExists).toEqual(true);
  });
});
