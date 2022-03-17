import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CheckInDataAccessModule } from '@nx-nrwl-starter/check-in/data-access';
import { SharedRootDataAccessModule } from '@nx-nrwl-starter/shared/root/data-access';

import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';

const checkInFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'seat-listing',
      },
      {
        path: 'seat-listing',
        loadChildren: () =>
          import('@nx-nrwl-starter/seatmap/feature-seat-listing').then(
            (module) => module.SeatmapFeatureSeatListingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(checkInFeatureShellRoutes),
    SharedRootDataAccessModule,
    CheckInDataAccessModule,
    ShellModule,
  ],
})
export class CheckInRootFeatureShellModule {}
