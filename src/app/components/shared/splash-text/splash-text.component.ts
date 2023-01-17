import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-text',
  templateUrl: './splash-text.component.html',
  styleUrls: ['./splash-text.component.scss'],
})
export class SplashTextComponent implements OnInit {
  @Input() color: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
