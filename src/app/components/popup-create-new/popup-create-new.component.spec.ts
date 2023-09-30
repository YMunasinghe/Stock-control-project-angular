import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateNewComponent } from './popup-create-new.component';

describe('PopupCreateNewComponent', () => {
  let component: PopupCreateNewComponent;
  let fixture: ComponentFixture<PopupCreateNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupCreateNewComponent]
    });
    fixture = TestBed.createComponent(PopupCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
