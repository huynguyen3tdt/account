import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getListPost(): Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
  }

  getImgpost(): Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos")
  }
}
