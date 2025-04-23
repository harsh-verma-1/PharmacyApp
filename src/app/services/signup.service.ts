import { Injectable } from '@angular/core';
import { signUp } from '../utility/signUp';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  url="http://localhost:8090/user/register"

  constructor(private http:HttpClient) { }


  postUser(userInfo:signUp):Observable<signUp>{
    return this.http.post<signUp>(this.url,userInfo);
  }


}
