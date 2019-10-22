import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    this.dialog.open(LoginComponent,{width:"500px",height:"320px"})
  }
}
