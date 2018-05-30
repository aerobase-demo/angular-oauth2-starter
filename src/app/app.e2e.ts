import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {
  beforeEach(async () => {
    browser.waitForAngularEnabled(true);
    await browser.get('/');
    browser.waitForAngular();
  });

  it('should have a title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Angular Starter by @YanivMN from @Aerobase';
    expect(subject).toEqual(result);
  });

  it('should have header', async () => {
    // this nap is necessary to let angular load.
    const subject = await element(by.css('h1')).isPresent();
    const result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <home>', async () => {
    const subject = await element(by.css('app home')).isPresent();
    const result  = true;
    expect(subject).toEqual(result);
  });

  it('should have buttons', async () => {
    const subject = await element(by.css('button')).getText();
    const result  = 'Submit Value';
    expect(subject).toEqual(result);
  });

});
