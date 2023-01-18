import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Category from 'src/app/enums/Category';

@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.scss'],
})
export class CatalogSidebarComponent implements OnInit {
  categoriesArray: (Category | 'All products')[] = [
    Category.CANDLES,
    Category.JEWELRY,
    Category.MAKEUP,
    Category.SCULPTURE,
    'All products',
  ];
  @Input() currentCategory: Category | 'All products' = 'All products';
  categories = Category;
  @Output() selectCategory = new EventEmitter<Category | 'All products'>();
  @Output() onSearch = new EventEmitter();
  @Output() onCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  changeCategory(category: Category | 'All products') {
    this.currentCategory = category;
    this.selectCategory.emit(category);
  }
  onSearchActivated() {
    this.onSearch.emit();
  }
  onCartActivated() {
    this.onCart.emit();
  }
}
