import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableItemsComponent } from './show-available-items.component';

describe('ShowAvailableItemsComponent', () => {
  let component: ShowAvailableItemsComponent;
  let fixture: ComponentFixture<ShowAvailableItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAvailableItemsComponent]
    });
    fixture = TestBed.createComponent(ShowAvailableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
