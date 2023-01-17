import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashTextComponent } from './splash-text.component';

describe('SplashTextComponent', () => {
  let component: SplashTextComponent;
  let fixture: ComponentFixture<SplashTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
