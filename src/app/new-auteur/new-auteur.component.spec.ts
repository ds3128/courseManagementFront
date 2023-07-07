import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuteurComponent } from './new-auteur.component';

describe('NewAuteurComponent', () => {
  let component: NewAuteurComponent;
  let fixture: ComponentFixture<NewAuteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAuteurComponent]
    });
    fixture = TestBed.createComponent(NewAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
