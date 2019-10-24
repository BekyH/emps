import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Company} from '../company';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companyForm:FormGroup;
  company:Company;
  constructor(private fb:FormBuilder) {
    this.createForm();
   }
   
  ngOnInit() {
  }
  createForm(){
    this.companyForm = this.fb.group({
      name:['',Validators.required],
      phoneno:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      category:['',Validators.required]
    })
  }

}
