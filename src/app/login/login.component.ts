import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {user} from '../user';
import {loginuser} from '../loginuser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 email:String;
 password:String;
 User:user
 Login:loginuser
  constructor(private fb:FormBuilder,private ls:LoginService) { 
    this.createForm();
  }
  
  ngOnInit() {
  }
    createForm(){
      this.loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
      })
    }
    onSubmit(){
      this.Login = this.loginForm.value;
    this.ls.login().subscribe(user=>this.User = user)
    console.log(this.Login.email);
   if(this.Login.email==this.User.email){
      console.log('true');
   }
   else{
     console.log('false');
   }
    }
}
