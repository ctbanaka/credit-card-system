import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';

@Component({
  selector: 'app-creditcard-list',
  templateUrl: './creditcard-list.component.html',
  styleUrls: ['./creditcard-list.component.css']
})
export class CreditcardListComponent implements OnInit {

  creditcard!: Observable<CreditCard[]>;

  constructor(private creditcardService: CreditcardService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.creditcard = this.creditcardService.getCreditCardList();
  }

  deleteCreditCard(id: number) {
    this.creditcardService.deleteCreditCard(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  creditCardDetails(id: number){
    this.router.navigate(['details', id]);
  }

 
}