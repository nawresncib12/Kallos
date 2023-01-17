import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent implements OnInit {
  @Input() dark: string = '';
  @Input() light: string = '';
  @Input() title: string[] = ['', ''];
  @Input() tag: string = '';
  @Input() next: string = '';
  @Input() description: string = '';
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  onClick() {
    this.buttonClicked.emit()
  }
}
