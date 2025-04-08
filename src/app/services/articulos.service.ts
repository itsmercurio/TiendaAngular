import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private apiUrl:string = 'http://localhost:3000/articulos';


  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getArticuloPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
