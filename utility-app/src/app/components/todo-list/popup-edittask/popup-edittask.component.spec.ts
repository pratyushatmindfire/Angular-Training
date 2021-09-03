import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEdittaskComponent } from './popup-edittask.component';

describe('PopupEdittaskComponent', () => {
  let component: PopupEdittaskComponent;
  let fixture: ComponentFixture<PopupEdittaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEdittaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
