import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageBodyComponent } from './first-page-body.component';

describe('FirstPageBodyComponent', () => {
  let component: FirstPageBodyComponent;
  let fixture: ComponentFixture<FirstPageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageBodyComponent]
    });
    fixture = TestBed.createComponent(FirstPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
