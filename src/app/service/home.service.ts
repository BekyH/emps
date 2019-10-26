import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
uri = 'http://localhost:3000/employees';
  constructor(private http:HttpClient) { }
  registerCompany(name,phoneno,email,city,address){
      const employee = {
        name:name,
        phoneno:phoneno,
        email:email,
        city:city,
        address:address

      }
      console.log(employee);
      this.http.post(this.uri,employee)
      .subscribe(res=>console.log('done'))
  }
  getAllEmployees():Observable<any>{
    return this.http.get(this.uri);
  }
}
