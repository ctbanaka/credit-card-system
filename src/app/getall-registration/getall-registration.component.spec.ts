import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallRegistrationComponent } from './getall-registration.component';

describe('GetallRegistrationComponent', () => {
  let component: GetallRegistrationComponent;
  let fixture: ComponentFixture<GetallRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
