/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
import { INSTANCE } from '@aerobase/core';
import { Auth } from '@aerobase/auth';

/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  const mobileServiceConfig = require('assets/mobile-services.json');
  INSTANCE.init(mobileServiceConfig);
  const authService = new Auth();

  const initOptions = JSON.parse('{"onLoad": "login-required"}');
  return authService.init(initOptions)
    .then(() => {
      if (authService.isAuthenticated()) {
        return platformBrowserDynamic()
          .bootstrapModule(AppModule)
          .then(environment.decorateModuleRef)
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => {
      console.error('Error While initializing Aerobase Auth: ' + err);
    });
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
 document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
 main();
}
