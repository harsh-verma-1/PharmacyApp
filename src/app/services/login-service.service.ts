import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../utility/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8090/user/";

  constructor(private http:HttpClient) { }

  login(user:login):Observable<login[]>{

    const params=new HttpParams()
    // .set('name',user.userName)
    .set('email',user.email)
    .set('pass',user.pass)
    return this.http.get<login[]>(this.url+"login",{params});
  }

}
