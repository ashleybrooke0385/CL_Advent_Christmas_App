import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.css'],
})
export class CalendarModalComponent implements OnInit, OnDestroy {
  @Input() data: any;
  @Output() closeEvent = new EventEmitter<void>();
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'on-modal');
  }

  onClose() {
    this.closeEvent.emit();
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'on-modal');
  }
}
