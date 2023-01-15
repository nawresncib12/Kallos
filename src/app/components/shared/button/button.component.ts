import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string=""
  @Input() primary: boolean=false
  @Input() color: string="#fff"
  constructor() { }

  ngOnInit(): void {
  }

}
