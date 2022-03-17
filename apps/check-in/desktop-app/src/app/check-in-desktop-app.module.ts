import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CheckInRootFeatureShellModule } from '@nx-nrwl-starter/check-in/root/feature-shell';

import { CheckInDesktopAppComponent } from './check-in-desktop-app.component';

@NgModule({
  bootstrap: [CheckInDesktopAppComponent],
  declarations: [CheckInDesktopAppComponent],
  imports: [BrowserModule, CheckInRootFeatureShellModule, RouterModule],
})
export class CheckInDesktopAppModule {}
