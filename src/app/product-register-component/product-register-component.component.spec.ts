import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterComponentComponent } from './product-register-component.component';

describe('ProductRegisterComponentComponent', () => {
  let component: ProductRegisterComponentComponent;
  let fixture: ComponentFixture<ProductRegisterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRegisterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
