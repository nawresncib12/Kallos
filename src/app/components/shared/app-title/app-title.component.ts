import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss'],
})
export class AppTitleComponent implements OnInit {
  @Input() size: string = '';
  @Input() iconSize: string = '';
  @Input() color: string = '';
  constructor() {}

  ngOnInit(): void {}
}
