
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Registration } from '../model/registration';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-add-registrtion',
  templateUrl: './add-registrtion.component.html',
  styleUrls: ['./add-registrtion.component.css']
})
export class AddRegistrtionComponent implements OnInit {
  registrationForm!:FormGroup;
  register!: Registration;
  sub!: Subscription;

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    ) { }

  
  
  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      userId: new FormControl(),
      firstName: new FormControl('', [Validators.required,Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required]),
      dateOfBirth:new FormControl('',Validators.required),
      phoneNo:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
      email:new FormControl('',Validators.email),
      password: new FormControl ('', [Validators.required,Validators.minLength(8)])
  });
}

userRegistration(){
  console.log(this.registrationForm.value);
  this.registrationService.userRegistration(this.registrationForm.value)

  .subscribe(data =>{console.log(data);
    this.router.navigate(['welcome']);
  })
}
get firstName(){
  return this.registrationForm.get('firstName');
 }

 get lastName(){
  return this.registrationForm.get('lastName');
 }
 
 get phoneNo(){
  return this.registrationForm.get('phoneNo');
 }

 get email(){
  return this.registrationForm.get('email');
 }


onSubmit(){
   this.userRegistration();
}



}
