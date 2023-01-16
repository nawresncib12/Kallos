import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit, AfterViewInit, OnDestroy {
  selectedImage: number = 0;
  images!: string[]
  private destroyed$ = new Subject<void>()
  @ViewChild("productImages") imagesList!: ElementRef
  @ViewChild("productImagesPreviewer") imagePreviewer!: ElementRef

  constructor(private productDetailsService: ProductDetailsService) {}

  onImageSelected(selectedImageIndex: number) {
    this.productDetailsService.setSelectedImage(selectedImageIndex);
  }

  ngOnInit(): void {
    this.productDetailsService.product$.pipe(takeUntil(this.destroyed$)).subscribe(
      product => this.images = product.images
    )
    this.productDetailsService.selectedImageIndex$.pipe(takeUntil(this.destroyed$)).subscribe(
      selectedImage => this.selectedImage = selectedImage
    )
  }

  ngAfterViewInit(): void {
    const listItems = this.imagesList.nativeElement.querySelectorAll('li');
    window.onscroll = () => {
      listItems.forEach((listItem: any, index: number) => {
        const sectionTop = listItem.offsetTop + this.imagesList.nativeElement.offsetTop;
        if (pageYOffset >= sectionTop - 450) {
          this.productDetailsService.setSelectedImage(+listItem.getAttribute("id"));
        }
      });
      if (pageYOffset < listItems.length * 600 + this.imagesList.nativeElement.offsetTop)
        this.imagePreviewer.nativeElement.style.transform = "translateY(" + pageYOffset + "px" + ")";
    };
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
