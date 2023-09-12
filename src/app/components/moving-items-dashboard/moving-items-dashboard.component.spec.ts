import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingItemsDashboardComponent } from './moving-items-dashboard.component';

describe('MovingItemsDashboardComponent', () => {
  let component: MovingItemsDashboardComponent;
  let fixture: ComponentFixture<MovingItemsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingItemsDashboardComponent]
    });
    fixture = TestBed.createComponent(MovingItemsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
