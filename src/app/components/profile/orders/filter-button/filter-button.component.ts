import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent implements OnInit {
  @Input() status: string = 'ALL';
  @Input() active: boolean = false;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.clickEvent.emit(this.status);
  }
  ngOnInit(): void {}
}
