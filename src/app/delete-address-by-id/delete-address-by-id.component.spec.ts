import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddressByIdComponent } from './delete-address-by-id.component';

describe('DeleteAddressByIdComponent', () => {
  let component: DeleteAddressByIdComponent;
  let fixture: ComponentFixture<DeleteAddressByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddressByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAddressByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
