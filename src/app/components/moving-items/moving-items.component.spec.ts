import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingItemsComponent } from './moving-items.component';

describe('MovingItemsComponent', () => {
  let component: MovingItemsComponent;
  let fixture: ComponentFixture<MovingItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingItemsComponent]
    });
    fixture = TestBed.createComponent(MovingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
