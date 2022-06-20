import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCreditcardComponent } from './get-creditcard.component';

describe('GetCreditcardComponent', () => {
  let component: GetCreditcardComponent;
  let fixture: ComponentFixture<GetCreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCreditcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
