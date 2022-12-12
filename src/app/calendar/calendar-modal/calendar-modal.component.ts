import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css'],
})
export class CalendarModalComponent {
  @Input() data: any;
  @Output() closeEvent = new EventEmitter<void>();

  onClose() {
    this.closeEvent.emit();
  }
}
