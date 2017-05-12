import { expect } from 'chai';

import { App } from './app';

describe('Inital Test', () => {
  const testApp = new App();

  it('should pass if it can find App Class', () => {
    // tslint:disable-next-line:no-unused-expression
    expect(App).to.exist;
  });

  it('should find App.appExists', () => {
    // tslint:disable-next-line:no-unused-expression
    expect(testApp.appExists).to.be.true;
  });
});
