import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsOurAppComponent } from './facts-our-app.component';

describe('FactsOurAppComponent', () => {
  let component: FactsOurAppComponent;
  let fixture: ComponentFixture<FactsOurAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsOurAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsOurAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
