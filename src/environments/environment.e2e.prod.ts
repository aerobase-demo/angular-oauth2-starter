/* tslint:disable */
import { enableProdMode, NgModuleRef } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Environment } from './model';
import { AerobaseConfig, AerobaseInitOptions } from 'aerobase-angular';

enableProdMode();

// export const ENV_FIREBASE_CONFIG: any = FIREBASE_CONFIG;
// Add here your aerobase setup infos
let aerobaseConfig: AerobaseConfig = {
  url: 'https://example.aerobase.io/auth/',
  realm: 'example',
  clientId: 'example-client'
};

let aerobaseInitOptions:  AerobaseInitOptions = {
  onLoad: "login-required"
}

export const environment: Environment = {
  production: true,
  showDevModule: true,
  aerobase: aerobaseConfig, 
  aerobaseOptions: aerobaseInitOptions,
  /** Angular debug tools in the dev console
   * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
   * @param modRef
   * @return {any}
   */
  decorateModuleRef(modRef: NgModuleRef<any>) {
    disableDebugTools();
    return modRef;
  },
  ENV_PROVIDERS: [

  ]
};
