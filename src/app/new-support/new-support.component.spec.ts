import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupportComponent } from './new-support.component';

describe('NewSupportComponent', () => {
  let component: NewSupportComponent;
  let fixture: ComponentFixture<NewSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSupportComponent]
    });
    fixture = TestBed.createComponent(NewSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
