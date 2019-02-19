import { AerobaseService, AerobaseEvent } from 'aerobase-angular';

import { environment } from '../environments/environment';
import { EventStackService } from './core/services/event-stack.service';

export function initializer(
  aerobase: AerobaseService
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await aerobase.init({
          config: environment.aerobase,
          initOptions: environment.aerobaseOptions 
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
