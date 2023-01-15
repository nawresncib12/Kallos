import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-images-previewer',
  templateUrl: './product-images-previewer.component.html',
  styleUrls: ['./product-images-previewer.component.scss'],
})
export class ProductImagesPreviewerComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() selectedImage: number = 0;
  @Output() onImageSelected = new EventEmitter<number>();

  emitImageSelected(imageIndex: number) {
    this.onImageSelected.emit(imageIndex);
  }

  constructor() {}

  ngOnInit(): void {}
}
