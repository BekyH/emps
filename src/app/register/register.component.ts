import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {user,genderType} from '../../../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;
  User:user;
  gendertype=genderType;

  constructor(private fb:FormBuilder) 
  {
    this.createForm;
   }

  ngOnInit() {
  }
  createForm(){
    this.userForm = this.fb.group({
      firstname:'',
      lastname:'',
      email:'',
      city:'',
      phoneno:'',
      gendertype:'male'
    });
  }
  onSubmit(){
    this.User = this.userForm.value;
    console.log(user);
    this.userForm.reset();
  }

}
