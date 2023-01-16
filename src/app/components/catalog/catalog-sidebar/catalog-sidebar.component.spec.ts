import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSidebarComponent } from './catalog-sidebar.component';

describe('CatalogSidebarComponent', () => {
  let component: CatalogSidebarComponent;
  let fixture: ComponentFixture<CatalogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
