import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/');
    await element(by.linkText('Home')).click();
  });

  it('should have a title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Angular Starter by @YanivMN from @Aerobase';
    expect(subject).toEqual(result);
  });

  it('should have `Welcome to Aerobase secured application` x-large', async () => {
    const subject = await element(by.css('[x-large]')).getText();
    const result  = ' Here';
    expect(subject).toEqual(result);
  });

});
