import { Injectable } from '@angular/core';
import { Todo} from '././todo';

import { Observable, throwError } from 'rxjs';

import { map } from "rxjs/operators"
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  todos: Todo[] = [];
  todo: Todo = new Todo()
  apiUrl1="http://localhost:8080"
 apiUrl="https://rkplaza.herokuapp.com"
  constructor(private http: HttpClient) { }

 
  
  getAllTodos() :Observable<Todo[]> {
    console.log("comig to service")
    return <any>this.http.get( `${this.apiUrl}`+"/api/getTodos/").pipe(map((Response: any) => Response))
}
 
  addTodos(Todos: any) {
    this.http.post(`${this.apiUrl}`+"/api/addTodos/", Todos).subscribe();
  }
  callDisplay(){
    console.log("dispaly calling from service file")
    return <any>this.http.get("http://localhost:8080/api/display/").pipe(map((Response: any) => Response))
  }
}
