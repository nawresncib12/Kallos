import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Category from 'src/app/model/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categories = [
      new Category(
        1,
        'Luxurious scents and elegant designs to create a warm ambiance.',
        '#413c6a',
        '#c0bce4',
        'candles',
        ['Scented', 'Candles']
      ),
      new Category(
        2,
        'Unique and beautiful works of art to enhance any space.',
        '#3aa1ff',
        '#b4dbff',
        'sculpts',
        ['Mini', 'Sculpts']
      ),
      new Category(
        3,
        'Timeless and elegant pieces to complement any outfit.',
        '#3c3d3f',
        '#d3dae0',
        'jewelry',
        ['Pretty', 'Jewerly']
      ),
      new Category(
        4,
        'Professional-grade cosmetics to enhance your natural beauty.',
        '#cc898b',
        '#fee0d9',
        'makeup',
        ['Gorgeous', 'Makeup']
      ),
    ];
  }
  onCategoryClick(category: string) {
    this.router.navigate(['products/category/' + category])
}}
