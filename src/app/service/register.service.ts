import { Injectable } from '@angular/core';
//import {user} from '../user';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
      uri = 'http://localhost:3000/users'
  constructor(private http:HttpClient) {

   }
   registerUser(firstname,lastname,email,phoneno,city,gender){
     const user={
       firstname:firstname,
       lastname:lastname,
       email:email,
       phoneno:phoneno,
       city:city,
       gender:gender
     }
     
      console.log(user);
      this.http.post(this.uri,user)
      .subscribe(res=>console.log('done'));
   }
}
//module.exports = this.registerUser;
