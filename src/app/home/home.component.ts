import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Company} from '../company';
import {HomeService} from '../service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phoneno', 'email', 'city','category'];
  @ViewChild('companyform') companyFormDirective;
  companyForm:FormGroup;
  company:Company;
  companies:Company[];
  constructor(private fb:FormBuilder,private hs:HomeService) {
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
  onSubmit(){
    this.company = this.companyForm.value;
    console.log(this.company);
    this.hs.registerCompany(this.company.name,this.company.phoneno,this.company.email,this.company.city,this.company.category);
  this.companyForm.reset({
    name:'',
    phoneno:'',
    email:'',
    city:'',
    category:''
  });
  this.companyFormDirective.resetForm();
  }
  getCompanys(){
    this.hs.getAllCompanys().subscribe((comp)=>{
      this.companies = comp;
      console.log(this.companies);
    })
  }

}
