import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemDashboardComponent } from './search-item-dashboard.component';

describe('SearchItemDashboardComponent', () => {
  let component: SearchItemDashboardComponent;
  let fixture: ComponentFixture<SearchItemDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchItemDashboardComponent]
    });
    fixture = TestBed.createComponent(SearchItemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
