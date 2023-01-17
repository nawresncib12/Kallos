import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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
  @Output() buttonClicked = new EventEmitter();

  style: object = {}
  constructor() { }

  ngOnInit(): void {
    if (!this.className) {
      this.style = { borderColor: this.color, color: this.color }
    }
  }
  click() {
    this.buttonClicked.emit()
  }
}
