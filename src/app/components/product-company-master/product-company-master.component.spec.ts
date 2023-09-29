import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompanyMasterComponent } from './product-company-master.component';

describe('ProductCompanyMasterComponent', () => {
  let component: ProductCompanyMasterComponent;
  let fixture: ComponentFixture<ProductCompanyMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCompanyMasterComponent]
    });
    fixture = TestBed.createComponent(ProductCompanyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
