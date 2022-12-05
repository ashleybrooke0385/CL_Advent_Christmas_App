import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  showBack=false;
  isOpened=false;
  mockData = [
    {
      cardNumber: 1,
      body: 'Christmas content for card 1'
    },
    {
      cardNumber: 2,
      body: 'Christmas content for card 2'
    },
    {
      cardNumber: 3,
      body: 'Christmas content for card 3'
    },
    {
      cardNumber: 4,
      body: 'Christmas content for card 4'
    },
    {
      cardNumber: 5,
      body: 'Christmas content for card 5'
    },
    {
      cardNumber: 6,
      body: 'Christmas content for card 6'
    },
    {
      cardNumber: 7,
      body: 'Christmas content for card 7'
    },
    {
      cardNumber: 8,
      body: 'Christmas content for card 8'
    },
    {
      cardNumber: 9,
      body: 'Christmas content for card 9'
    },
    {
      cardNumber: 10,
      body: 'Christmas content for card 10'
    },
    {
      cardNumber: 11,
      body: 'Christmas content for card 11'
    },
    {
      cardNumber: 12,
      body: 'Christmas content for card 12'
    },
    {
      cardNumber: 13,
      body: 'Christmas content for card 13'
    },
    {
      cardNumber: 14,
      body: 'Christmas content for card 14'
    },
    {
      cardNumber: 15,
      body: 'Christmas content for card 15'
    },
    {
      cardNumber: 16,
      body: 'Christmas content for card 16'
    },
    {
      cardNumber: 17,
      body: 'Christmas content for card 17'
    },
    {
      cardNumber: 18,
      body: 'Christmas content for card 18'
    },
    {
      cardNumber: 19,
      body: 'Christmas content for card 19'
    },
    {
      cardNumber: 20,
      body: 'Christmas content for card 20'
    },
    {
      cardNumber: 21,
      body: 'Christmas content for card 21'
    },
    {
      cardNumber: 22,
      body: 'Christmas content for card 22'
    },
    {
      cardNumber: 23,
      body: 'Christmas content for card 23'
    },
    {
      cardNumber: 24,
      body: 'Christmas content for card 24'
    },
    {
      cardNumber: 25,
      body: 'Christmas content for card 25'
    },
  ];
  selectedData!: any;

  onModalOpen(data: any) {
    this.selectedData = data;
    this.isOpened = !this.isOpened;
  }

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




