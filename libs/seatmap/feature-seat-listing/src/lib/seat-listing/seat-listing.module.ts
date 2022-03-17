import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmButtonModule } from '@nx-nrwl-starter/shared/ui-buttons';

import { SeatListingComponent } from './seat-listing.component';

@NgModule({
  declarations: [SeatListingComponent],
  imports: [CommonModule, ConfirmButtonModule],
})
export class SeatListingModule {}
