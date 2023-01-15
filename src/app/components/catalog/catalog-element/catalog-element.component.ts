import { Component, OnInit, Input } from '@angular/core';
//to be moved to shared
export enum Categories {
  candle = "candle",
  makeup = "makeup",
  sculpt = "sculpt",
  jewlery = "jewlery"
}
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

  categories = Categories;
  onHover: boolean = false;
  @Input() isSmall: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
