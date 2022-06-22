import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCreditcardbyidComponent } from './get-creditcardbyid.component';

describe('GetCreditcardbyidComponent', () => {
  let component: GetCreditcardbyidComponent;
  let fixture: ComponentFixture<GetCreditcardbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCreditcardbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCreditcardbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
