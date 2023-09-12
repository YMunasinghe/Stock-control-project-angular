import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableItemsDashboardComponent } from './available-items-dashboard.component';

describe('AvailableItemsDashboardComponent', () => {
  let component: AvailableItemsDashboardComponent;
  let fixture: ComponentFixture<AvailableItemsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableItemsDashboardComponent]
    });
    fixture = TestBed.createComponent(AvailableItemsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
