import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSpecificationsComponent } from './product-details-specifications.component';

describe('ProductDetailsSpecificationsComponent', () => {
  let component: ProductDetailsSpecificationsComponent;
  let fixture: ComponentFixture<ProductDetailsSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsSpecificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
