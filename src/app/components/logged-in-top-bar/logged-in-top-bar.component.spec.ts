import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInTopBarComponent } from './logged-in-top-bar.component';

describe('LoggedInTopBarComponent', () => {
  let component: LoggedInTopBarComponent;
  let fixture: ComponentFixture<LoggedInTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedInTopBarComponent]
    });
    fixture = TestBed.createComponent(LoggedInTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
