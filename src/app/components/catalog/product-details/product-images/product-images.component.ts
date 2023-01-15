import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  @Input() images: string[] = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',]
  selectedImage: number = 0;
  constructor() { }

  onImageSelected(selectedImageIndex: number) {
    console.log(selectedImageIndex)
    this.selectedImage = selectedImageIndex;
  }

  ngOnInit(): void {
  }

}
