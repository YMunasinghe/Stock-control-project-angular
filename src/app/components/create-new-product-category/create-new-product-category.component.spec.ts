import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewProductCategoryComponent } from './create-new-product-category.component';

describe('CreateNewProductCategoryComponent', () => {
  let component: CreateNewProductCategoryComponent;
  let fixture: ComponentFixture<CreateNewProductCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewProductCategoryComponent]
    });
    fixture = TestBed.createComponent(CreateNewProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
