import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  creditcardForm = new FormGroup({
    cardnumber: new FormControl('',Validators.required),
    expirydate: new FormControl('',[Validators.required,Validators.minLength(4)]),
     cvv: new FormControl('',[Validators.required,Validators.email]),
     cardtype: new FormControl(),
   
    country: new FormControl()
  })
  get  cardnumber(){
    return this. creditcardForm.get('cardnumber');
  }
  get expirydate(){
    return this. creditcardForm.get('expirydate');
  }
  get cvv(){
    return this. creditcardForm.get('cvv');
  }
  get cardtype(){
    return this.creditcardForm.get('cardtype')
  }

  constructor() { }

  ngOnInit() {
  }
}