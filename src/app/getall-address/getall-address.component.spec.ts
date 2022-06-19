import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallAddressComponent } from './getall-address.component';

describe('GetallAddressComponent', () => {
  let component: GetallAddressComponent;
  let fixture: ComponentFixture<GetallAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
