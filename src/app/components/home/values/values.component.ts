import { Component, OnInit } from '@angular/core';
import Category from 'src/app/enums/Category';
import { Product } from 'src/app/model/Product';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent implements OnInit {
  products: Product[] = [
    {
      category: Category.CANDLES,
      images: ['sample2.png'],
      price: 300,
      name: 'test',
      id: 0,
      description: 'test',
    },
    {
      category: Category.JEWELRY,
      images: ['sample3.png'],
      price: 100,
      name: 'test',
      id: 0,
      description: 'test',
    },
    {
      category: Category.MAKEUP,
      images: ['sample.png'],
      price: 200,
      name: 'test',
      id: 0,
      description: 'test',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
