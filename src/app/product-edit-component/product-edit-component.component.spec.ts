import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditComponentComponent } from './product-edit-component.component';

describe('ProductEditComponentComponent', () => {
  let component: ProductEditComponentComponent;
  let fixture: ComponentFixture<ProductEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
