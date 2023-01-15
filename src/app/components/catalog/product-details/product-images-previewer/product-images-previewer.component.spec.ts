import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesPreviewerComponent } from './product-images-previewer.component';

describe('ProductImagesPreviewerComponent', () => {
  let component: ProductImagesPreviewerComponent;
  let fixture: ComponentFixture<ProductImagesPreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImagesPreviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
