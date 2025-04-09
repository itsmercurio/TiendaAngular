import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Articulo, ArticulosResponse } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private apiUrl:string = 'http://localhost:3000/articulos';


  constructor(private http:HttpClient) { }

  getAll(): Observable<Articulo[]>{
    return this.http.get<ArticulosResponse>(this.apiUrl).pipe(map(response => response.articulos));
  }

  getArticuloPorId(id: string): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.apiUrl}/${id}`);
  }
}
