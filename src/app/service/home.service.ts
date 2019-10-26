import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
uri = 'http://localhost:3000/companies';
  constructor(private http:HttpClient) { }
  registerCompany(name,phoneno,email,city,category){
      const company = {
        name:name,
        phoneno:phoneno,
        email:email,
        city:city,
        category:category

      }
      console.log(company);
      this.http.post(this.uri,company)
      .subscribe(res=>console.log('done'))
  }
  getAllCompanys():Observable<any>{
    return this.http.get(this.uri);
  }
}
