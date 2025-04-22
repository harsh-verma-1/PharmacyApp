import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../utility/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8090/user";

  constructor(private http:HttpClient) { }

  login(user:login):Observable<login[]>{
    return this.http.post<login[]>(this.url+"login",user);
  }

}
