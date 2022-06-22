import { InjectionToken } from '@angular/core';
export interface ServiceConfig {
  whichService: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>(
  'service.config',
  {
    providedIn: 'root',
    factory: () => ({
      whichService: '',
    }),
  }
);
