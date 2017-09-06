import { App } from './app';

describe('Inital Test', () => {
  const testApp = new App();

  it('should pass if it can find App Class', () => {
    expect(App).toBeDefined();
  });

  it('should find App.appExists', () => {
    expect(testApp.getAppExists).toEqual(true);
  });
});