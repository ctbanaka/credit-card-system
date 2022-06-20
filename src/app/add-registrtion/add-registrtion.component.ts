
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-registrtion',
  templateUrl: './add-registrtion.component.html',
  styleUrls: ['./add-registrtion.component.css']
})
export class AddRegistrtionComponent implements OnInit {
  addregistrationForm=new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    dateofbirth:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),

  })
  get firstname(){
    return this.addregistrationForm.get('firstname');
  }
  get lastname(){
    return this.addregistrationForm.get('lastname');
  }
  get dateofbirth(){
    return this.addregistrationForm.get('dateofbirth')
  }
  get phonenumber(){
    return this.addregistrationForm.get('phonenumber')
  }
  get email(){
    return this.addregistrationForm.get('email');
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
