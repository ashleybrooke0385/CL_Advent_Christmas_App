import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.css']
})
export class CalendarCardComponent implements OnInit {
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
