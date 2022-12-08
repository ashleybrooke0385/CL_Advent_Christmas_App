import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css']
})
export class CalendarModalComponent implements OnInit {
  @Input() data: any;
  @Output() closeEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeEvent.emit();
  }
}
