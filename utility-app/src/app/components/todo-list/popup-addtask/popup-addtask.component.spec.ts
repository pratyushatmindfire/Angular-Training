import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddtaskComponent } from './popup-addtask.component';

describe('PopupAddtaskComponent', () => {
  let component: PopupAddtaskComponent;
  let fixture: ComponentFixture<PopupAddtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
