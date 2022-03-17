import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@nx-nrwl-starter/shared/root/environments';

import { BookingDesktopAppModule } from './app/booking-desktop-app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(BookingDesktopAppModule)
  .catch((err) => console.error(err));
