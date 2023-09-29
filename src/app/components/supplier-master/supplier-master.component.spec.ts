import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMasterComponent } from './supplier-master.component';

describe('SupplierMasterComponent', () => {
  let component: SupplierMasterComponent;
  let fixture: ComponentFixture<SupplierMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierMasterComponent]
    });
    fixture = TestBed.createComponent(SupplierMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
