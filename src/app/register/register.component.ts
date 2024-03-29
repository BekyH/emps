import { Component, OnInit,ViewChild} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {user} from '../user';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  userForm:FormGroup;
  User:user;
  
  @ViewChild('userform') userFormDirective;

  constructor(private fb:FormBuilder,private  rs:RegisterService) 
  {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.userForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      phoneno:['',Validators.required],
      password:['',Validators.required],
      gender:['',Validators.required],
    });
  }
  onSubmit(){
    this.User = this.userForm.value;
    console.log(this.User);
    this.rs.registerUser(this.User.firstname,this.User.lastname,this.User.email,this.User.phoneno,this.User.city,this.User.password,this.User.gender);
    this.userForm.reset({
      firstname:'',
      lastname:'',
      email:'',
      city:'',
      phoneno:'',
      password:'',
      gender:'',

    });
    this.userFormDirective.resetForm();
  }

}
