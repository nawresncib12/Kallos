import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Category from 'src/app/enums/Category';
//to be moved to shared
@Component({
  selector: 'app-catalog-element',
  templateUrl: './catalog-element.component.html',
  styleUrls: ['./catalog-element.component.scss']
})


export class CatalogElementComponent implements OnInit {
  @Input() title: string = "Blue top tak Jacket";
  @Input() category: string = "makeup";
  @Input() imagePath: string = "sample.png";
  @Input() price: string = "500";
  @Output() addedToCart = new EventEmitter()

  categories = Category;
  onHover: boolean = false;
  @Input() isSmall: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addedToCart.emit();
  }

}
