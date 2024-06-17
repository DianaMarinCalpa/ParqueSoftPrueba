import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AccountInterface } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<AccountInterface[]> {
    return this.http.get<AccountInterface[]>(`${this.baseUrl}/account`);
  }

}
