import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BookingDataAccessModule } from '@nx-nrwl-starter/booking/data-access';
import { SharedRootDataAccessModule } from '@nx-nrwl-starter/shared/root/data-access';

import { ShellComponent } from './shell/shell.component';
import { ShellModule } from './shell/shell.module';

const bookingFeatureShellRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'train-search',
      },
      {
        path: 'train-search',
        loadChildren: () =>
          import('@nx-nrwl-starter/booking/feature-train-search').then(
            (module) => module.BookingFeatureTrainSearchModule
          ),
      },
      {
        path: 'passenger-info',
        loadChildren: () =>
          import('@nx-nrwl-starter/booking/feature-passenger-info').then(
            (module) => module.BookingFeaturePassengerInfoModule
          ),
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
    RouterModule.forRoot(bookingFeatureShellRoutes),
    SharedRootDataAccessModule,
    BookingDataAccessModule,
    ShellModule,
  ],
})
export class BookingRootFeatureShellModule {}
