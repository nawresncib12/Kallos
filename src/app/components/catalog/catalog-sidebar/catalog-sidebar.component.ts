import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categories } from '../catalog-element/catalog-element.component';

@Component({
  selector: 'app-catalog-sidebar',
  templateUrl: './catalog-sidebar.component.html',
  styleUrls: ['./catalog-sidebar.component.scss']
})
export class CatalogSidebarComponent implements OnInit {
  categoriesArray = [{ id: 1, name: Categories.candle }, { id: 2, name: Categories.jewlery }, { id: 3, name: Categories.makeup }, { id: 4, name: Categories.sculpt },]
  currentCategory: any
  categories = Categories
  @Output() selectCategory = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  changeCategory(category: any) {
    this.currentCategory = category
    this.selectCategory.emit(category.name)
  }
}
