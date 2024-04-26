import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProductsComponent } from './scroll-products.component';

describe('ScrollProductsComponent', () => {
  let component: ScrollProductsComponent;
  let fixture: ComponentFixture<ScrollProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
