import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@nx-nrwl-starter/shared/root/environments';

import { CheckInMobileAppModule } from './app/check-in-mobile-app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(CheckInMobileAppModule)
  .catch((err) => console.error(err));
