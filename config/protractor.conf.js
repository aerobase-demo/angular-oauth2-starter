/**
 * @author: aerobase.io
 */

require('ts-node/register');
var helpers = require('./helpers');

exports.config = {
  baseUrl: 'http://localhost:3000/',

  /**
   * Use `npm run e2e`
   */
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 11000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 40000
  },

  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800x600", "--no-sandbox" ]
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;

    browser.driver.get('http://localhost:3000/');

    browser.driver.findElement(by.id('username')).sendKeys('admin');
    browser.driver.findElement(by.id('password')).sendKeys('password');
    browser.driver.findElement(by.id('kc-login')).click();

    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // example.aerobase.io.
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /example.aerobase.io/.test(url);
      });
    }, 10000);
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true,

   SELENIUM_PROMISE_MANAGER: false,
};
