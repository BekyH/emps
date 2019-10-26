import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Employee} from '../employee';
import {HomeService} from '../service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phoneno', 'email', 'city','address','update','delete'];
  @ViewChild('employeeform') employeeFormDirective;
  employeeForm:FormGroup;
  employee:Employee;
  employees:Employee[];
  constructor(private fb:FormBuilder,private hs:HomeService) {
    this.createForm();
   }
   
  ngOnInit() {
  }
  createForm(){
    this.employeeForm = this.fb.group({
      name:['',Validators.required],
      phoneno:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required]
    })
  }
  onSubmit(){
    this.employee= this.employeeForm.value;
    console.log(this.employee);
    this.hs.registerCompany(this.employee.name,this.employee.phoneno,this.employee.email,this.employee.city,this.employee.address);
  this.employeeForm.reset({
    name:'',
    phoneno:'',
    email:'',
    city:'',
    address:''
  });
  this.employeeFormDirective.resetForm();
  }
  getEmployees(){
    this.hs.getAllEmployees().subscribe((emp)=>{
      this.employees = emp;
      console.log(this.employees);
    })
  }

}
