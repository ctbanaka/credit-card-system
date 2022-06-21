import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  creditcard: CreditCard = new CreditCard();
  submitted = false;

  constructor(private creditcardservice: CreditcardService,
    private router: Router) { }

  ngOnInit() {
  }

  newCreditCard(): void {
    this.submitted = false;
    this.creditcard = new CreditCard();
  }

  save() {
    this.creditcardservice
    .createCreditCard(this.creditcard).subscribe(data => {
      console.log(data)
      this.creditcard = new CreditCard();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  gotoList() {
    this.router.navigate(['/CreditCard']);
  }
}

