import { Component } from '@angular/core';
import { environment } from '@nx-nrwl-starter/shared/root/environments';

@Component({
  selector: 'booking-train-search',
  styleUrls: ['./train-search.component.scss'],
  templateUrl:
    environment.platform === 'mobile'
      ? './train-search.mobile.component.html'
      : './train-search.component.html',
})
export class TrainSearchComponent {}
