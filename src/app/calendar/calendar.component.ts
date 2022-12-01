import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  showBack=false;

  constructor() { }

  ngOnInit(): void {
  }

  onHover() {
    this.showBack = !this.showBack;
  }

  onHoverBack() {
    this.showBack = !this.showBack;
  }

  // festiveRotation() {
  //   // document.getElementById("grid-item-1").style.backgroundColor = "blue";
  //   document.getElementById("grid-item-1").style.opacity = "100%"
  // }

}




