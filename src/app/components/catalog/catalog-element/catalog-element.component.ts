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
  @Input() price: string = "unknown";
  @Output() addedToCart = new EventEmitter()
  @Output() productClicked = new EventEmitter()
  @Input() isSmall: boolean = true

  categories = Category;
  onHover: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart($event: any) {
    this.addedToCart.emit();
    $event.stopPropagation()()
  }
  goToProduct() {
    this.productClicked.emit()

  }
}
