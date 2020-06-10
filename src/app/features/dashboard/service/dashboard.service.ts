import { IDataResponse } from './../../../shared/models/IDataResponse';
import { Injectable } from '@angular/core';
import { HttpHelperService } from 'src/app/core/http-helper.service';
import { Observable } from 'rxjs';
import { ITotal } from '../models/ITotal';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpHelper: HttpHelperService) { }

  getTotal(): Observable<IDataResponse<ITotal>> {
    return this.httpHelper.get<IDataResponse<ITotal>>('total');
  }
}
