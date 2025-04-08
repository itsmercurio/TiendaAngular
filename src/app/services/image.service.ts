import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl:string = 'http://localhost:3000/images';
  private bannerUrl:string = 'http://localhost:3000/images/banners'
  private categoryUrl:string = 'http://localhost:3000/images/categorias'

  constructor(private http: HttpClient) {
   }

   getImages():Observable<any>{
    return this.http.get<any>(this.apiUrl);
   }

  getBannerImages(): Observable<any> {
    return this.http.get<any>(this.bannerUrl);
  }
  getCategoryImages(): Observable<any> {
    return this.http.get<any>(this.categoryUrl);
  }

   getImageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
