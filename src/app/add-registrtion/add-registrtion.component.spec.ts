import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrtionComponent } from './add-registrtion.component';

describe('AddRegistrtionComponent', () => {
  let component: AddRegistrtionComponent;
  let fixture: ComponentFixture<AddRegistrtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegistrtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegistrtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
