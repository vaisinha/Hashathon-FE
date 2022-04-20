import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ILead} from '../Interfaces/ILead';

@Injectable({
  providedIn: 'root'
})
export class FetchLeadService {
   private _url:string = "http://localhost:9080/evaluator";

  constructor(private http: HttpClient) { }

  getLead(id): Observable<ILead>{
    return this.http.get<ILead>(this._url+`/${id}`);
  }
}
