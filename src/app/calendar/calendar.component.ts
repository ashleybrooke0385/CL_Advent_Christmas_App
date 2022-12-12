import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  showBack = false;
  isOpened = false;
  selectedData!: any;

  constructor(private cardService: CardService) {}

  get cardData() {
    return this.cardService.cardData;
  }

  onModalOpen(data: any) {
    this.selectedData = data;
    this.isOpened = !this.isOpened;
  }

  onHover() {
    this.showBack = !this.showBack;
  }

  onHoverBack() {
    this.showBack = !this.showBack;
  }
}
