import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnInit {
 days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
 @Input() data!: any;
 @Output() cycleData = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.cycleData.emit(this.data)
    console.log(this.data);
  }
}
