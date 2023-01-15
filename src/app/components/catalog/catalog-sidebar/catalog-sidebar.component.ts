import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Category from 'src/app/enums/Category';

@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.scss']
})
export class CatalogSidebarComponent implements OnInit {
  categoriesArray = [{ id: 1, name: Category.CANDLES }, { id: 2, name: Category.JEWELRY }, { id: 3, name: Category.MAKEUP }, { id: 4, name: Category.SCULPTURE },]
  currentCategory: any
  categories = Category
  @Output() selectCategory = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  changeCategory(category: any) {
    this.currentCategory = category
    this.selectCategory.emit(category.name)
  }
}
