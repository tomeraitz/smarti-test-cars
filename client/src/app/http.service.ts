import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from './cars';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/cars');
  }

  deleteData(id:number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8000/cars/${id}`);
  }

  addData(data): Observable<any> {
    return this.http.post<any>('http://localhost:8000/cars',data);
  }

  editData(data): Observable<any> {
    return this.http.put<any>(`http://localhost:8000/cars/${data.id}`,data);
  }
}