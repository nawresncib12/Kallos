import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string=""
  @Input() loading: boolean = false;
  @Input() submit: boolean = false;
  @Input() color: string="#fff"
  @Input() disabled: boolean = false;
  @Input() className: string = "";
  @Input() hoverClasses: string = "";
  style: object = {}
  constructor() {}

  ngOnInit(): void {
    if (!this.className) {
      this.style = { borderColor: this.color, color: this.color }
    }
  }
}
