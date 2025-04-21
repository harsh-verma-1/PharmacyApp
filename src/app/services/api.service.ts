import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../utility/IProduct';
import { Drug } from '../utility/Drug';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // connected with backend(backend api)
  url="http://localhost:8080/drug/"

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Drug[]> {
    return this.http.get<Drug[]>(this.url+"findAll");
  }

  addDrug(drug:Drug):Observable<Drug>{
    return this.http.post<Drug>((this.url+'add'),drug);
  }


  deleteDrug(id:number):Observable<Drug>{
    return this.http.delete<Drug>(this.url+"deleteById/"+id);
  }

}
