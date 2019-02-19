import { NgModuleRef } from '@angular/core';
import { AerobaseConfig, AerobaseInitOptions } from 'aerobase-angular';

export interface Environment {
  production: boolean;
  ENV_PROVIDERS: any;
  showDevModule: boolean;
  aerobase: AerobaseConfig;
  aerobaseOptions: AerobaseInitOptions;
  decorateModuleRef(modRef: NgModuleRef<any>): NgModuleRef<any>;
}
