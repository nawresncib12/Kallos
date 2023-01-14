import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogElementComponent } from './catalog-element.component';

describe('CatalogElementComponent', () => {
  let component: CatalogElementComponent;
  let fixture: ComponentFixture<CatalogElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
