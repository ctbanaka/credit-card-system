import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  creditcardForm!:FormGroup;
  creditcard!: CreditCard;
  sub!: Subscription;

  constructor(
    private router: Router,
    private creditcardservice: CreditcardService,
    ) { }

  
  
  ngOnInit(): void {

    this.creditcardForm = new FormGroup({
      userId: new FormControl(),
      cardNo: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(16)]),
      cvv: new FormControl('', [Validators.required,Validators.maxLength(3)]),
      expiryDate:new FormControl('',Validators.required),
      cardType:new FormControl('',[Validators.required]),
     
  });
}

createCreditCard(){
  console.log(this.creditcardForm.value);
  this.creditcardservice.createCreditCard(this.creditcardForm.value)

  .subscribe(data =>{console.log(data);
    this.router.navigate(['welcome']);
  })
}




onSubmit(){
   this.createCreditCard();
}
get userId(){
  return this.creditcardForm.get('userId');
}
get cardNo(){
  return this.creditcardForm.get('cardNo')
}
get cvv(){
  return this.creditcardForm.get('cvv')
}
get expiryDate(){
  return this.creditcardForm.get('expiryDate')
}
get cardType(){
  return this.creditcardForm.get('cardType')
}
}