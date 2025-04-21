import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProductDetailsComponent } from './see-product-details.component';

describe('SeeProductDetailsComponent', () => {
  let component: SeeProductDetailsComponent;
  let fixture: ComponentFixture<SeeProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
