import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrainSearchComponent } from './train-search/train-search.component';
import { TrainSearchModule } from './train-search/train-search.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: TrainSearchComponent },
    ]),
    TrainSearchModule,
  ],
})
export class BookingFeatureTrainSearchModule {}
