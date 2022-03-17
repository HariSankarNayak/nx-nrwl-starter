// confirm-button.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-nrwl-starter-confirm-button',
  styleUrls: ['./confirm-button.component.scss'],
  templateUrl: './confirm-button.component.html',
})
export class ConfirmButtonComponent {
  @Input()
  message = 'Do you confirm this action?';

  @Output()
  confirmed = new EventEmitter<boolean>();

  onClick() {
    this.confirmed.emit(confirm(this.message));
  }
}
