import { Injectable } from '@angular/core';
import { MotionInterface } from '../models/motion.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotionService {

  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) { }
  obtenerDatos(id:number): Observable<MotionInterface[]> {
    return this.http.get<MotionInterface[]>(`${this.baseUrl}/motion/${id}`);
  }
}
