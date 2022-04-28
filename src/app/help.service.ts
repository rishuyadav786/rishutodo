import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map(response=>response))
  }
}
