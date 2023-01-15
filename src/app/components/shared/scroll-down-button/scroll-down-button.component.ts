import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down-button',
  templateUrl: './scroll-down-button.component.html',
  styleUrls: ['./scroll-down-button.component.scss'],
})
export class ScrollDownButtonComponent implements OnInit {
  @Input() color: string = '#fff';
  @Input() width: string = '25px';
  @Input() height: string = '25px';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
