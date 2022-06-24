import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.css']
})
export class EditRegistrationComponent implements OnInit {
  editForm!:FormGroup;
  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth:new FormControl('',Validators.required),
      phoneNo:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      password: new FormControl ('', Validators.required)
  });

  }
  get userId(){
    return this.editForm.get('userId');
   }
  get firstName(){
    return this.editForm.get('firstName');
   }
  
   get lastName(){
    return this.editForm.get('lastName');
   }
   
   get phoneNo(){
    return this.editForm.get('phoneNo');
   }
  
   get email(){
    return this.editForm.get('email');
   }
   get dateOfBirth(){
    return this.editForm.get('dateOfBirth');
   }
  
   get password(){
    return this.editForm.get('password');
   }
 
  editRegistration():void{
    this.service.editRegistration(this.editForm.value)
    .subscribe(data =>{console.log(data);
      this.router.navigate(['welcome']);
    })

    
  }

  onSubmit(){
    this.editRegistration();
  }

}
