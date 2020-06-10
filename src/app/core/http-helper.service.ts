import { IDataResponse } from './../shared/models/IDataResponse';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) {  

  }

  get<T>(actionName: string): Observable<T> {
    return this.http.get<T>(environment.apiUrl + actionName);
  }
}
