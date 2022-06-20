
import { HttpClient } from '@angular/common/http';
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth:new FormControl('',Validators.required),
      phoneNo:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      password: new FormControl ('', Validators.required)
  });
}

userRegistration(){
  this.registrationService.userRegistration(this.registrationForm.value)
  .subscribe(data =>{console.log(data);
    this.router.navigate(['welcome']);
  })
}




onSubmit(){
   this.userRegistration();
}



}


