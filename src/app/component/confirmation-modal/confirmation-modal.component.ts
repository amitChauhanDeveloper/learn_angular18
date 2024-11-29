import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Input() message: string = '';
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();

  constructor() {}

  confirm() {
    this.onConfirm.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}
