import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingButtonComponent } from './changing-button.component';

describe('ChangingButtonComponent', () => {
  let component: ChangingButtonComponent;
  let fixture: ComponentFixture<ChangingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangingButtonComponent]
    });
    fixture = TestBed.createComponent(ChangingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
