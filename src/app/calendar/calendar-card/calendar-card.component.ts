import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css'],
})
export class CalendarCardComponent {
  @Input() data!: any;
  @Output() cycleData = new EventEmitter();

  onClick() {
    this.cycleData.emit(this.data);
    console.log(this.data);
  }
}
