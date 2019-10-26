import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from '../user';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  User:user
  uri = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  login():Observable<any>{
    return this.http.get(this.uri);
  }
}
