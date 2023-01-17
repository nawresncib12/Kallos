import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";


@Component({
  selector: 'app-product-images-previewer',
  templateUrl: './product-images-previewer.component.html',
  styleUrls: ['./product-images-previewer.component.scss'],
})
export class ProductImagesPreviewerComponent {
  onImageSelected(imageIndex: number) {
    this.productDetailsService.setSelectedImage(imageIndex);
    window.scrollTo({top: imageIndex * 750})
  }

  constructor(public productDetailsService: ProductDetailsService) {}

}
