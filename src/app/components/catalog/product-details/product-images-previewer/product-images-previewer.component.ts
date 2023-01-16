import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";


@Component({
  selector: 'app-product-images-previewer',
  templateUrl: './product-images-previewer.component.html',
  styleUrls: ['./product-images-previewer.component.scss'],
})
export class ProductImagesPreviewerComponent implements OnInit {
  selectedImage: number = 0;
  images: string[] = [];

  onImageSelected(imageIndex: number) {
    this.productDetailsService.setSelectedImage(imageIndex);
    window.scrollTo({top: imageIndex * 650})
  }

  constructor(private productDetailsService: ProductDetailsService) {
  }

  ngOnInit(): void {
    this.productDetailsService.product$.subscribe(
      product => this.images = product.images
    )
    this.productDetailsService.selectedImageIndex$.subscribe(
      selectedImage => this.selectedImage = selectedImage
    )
  }
}
