import { Component, Input, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
