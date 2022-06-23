import { Component, OnInit } from '@angular/core';
import { Registration } from '../model/registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-delete-registration',
  templateUrl: './delete-registration.component.html',
  styleUrls: ['./delete-registration.component.css']
})
export class DeleteRegistrationComponent implements OnInit {
   userId!:number;
   registration!:Registration;
  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
  }

 deleteRegistration(){
  this.service.deleteRegistration(this.userId)
  .subscribe(data=>{
    this.registration=data;
    console.log(data);
  })
 }

 onSubmit(){
  this.deleteRegistration();
 }

}
