import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 email:String;
 password:String;
  constructor(private fb:FormBuilder) { 
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
}
