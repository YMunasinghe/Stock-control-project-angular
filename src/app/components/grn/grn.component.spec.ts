import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnComponent } from './grn.component';

describe('GrnComponent', () => {
  let component: GrnComponent;
  let fixture: ComponentFixture<GrnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrnComponent]
    });
    fixture = TestBed.createComponent(GrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
