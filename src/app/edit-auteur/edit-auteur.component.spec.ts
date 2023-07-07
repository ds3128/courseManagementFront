import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuteurComponent } from './edit-auteur.component';

describe('EditAuteurComponent', () => {
  let component: EditAuteurComponent;
  let fixture: ComponentFixture<EditAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAuteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
