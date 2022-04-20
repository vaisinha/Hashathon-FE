import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ITrack} from '../Interfaces/ITracks';


@Injectable({
  providedIn: 'root'
})
export class FetchTracksService {
  private _url:string = "http://localhost:9080/api/tracks";
  // private _url:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }
  
  // Function To return The data from Json File
  getTracks(): Observable<ITrack[]>{
    return this.http.get<ITrack[]>(this._url);
    
  }

  getTrackById(id): Observable<ITrack>{
    return this.http.get<ITrack>(this._url+`/${id}`);
  }




}
