import { Injectable } from '@angular/core';
import { Todo, User} from '././todo';

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

 
  
  getAllTodos(a,b) :Observable<Todo[]> {
    console.log("comig to service")
    return <any>this.http.get( `${this.apiUrl}`+"/api/getTodos/").pipe(map((Response: any) => Response.slice(a, b)))
}
getAllUsers() :Observable<User[]> {
  console.log("comig to service")
  return <any>this.http.get( `${this.apiUrl}`+"/api/getUsers/").pipe(map((Response: any) => Response))
}
  addTodos(Todos: any) {
    this.http.post(`${this.apiUrl}`+"/api/addTodos/", Todos).subscribe();
  }
  addUser(Todos: any) {
    this.http.post(`${this.apiUrl}`+"/api/addUsers/", Todos).subscribe();
  }
  callDisplay(){
    console.log("dispaly calling from service file")
    return <any>this.http.get("http://localhost:8080/api/display/").pipe(map((Response: any) => Response))
  }
 

removeProduct(items){
  // this.http.delete("http://localhost:3000/myItems/"+id).subscribe();
  this.http.post(`${this.apiUrl}`+"api/removeData/", items).subscribe();
  }
  sendMail(){
   
    let users=[
      {
        "id": "1",
        "name": "Rishu",
        "email": "rkvirus13@gmail.com",
        "password": "123456",
        "userType": "customer",
        "mobile": "9804050418",
        "address": "4 no Railway Gate, Belgharia Kolkata-700056"
      }];
  
    this.http.post<any>('https://rkplaza.herokuapp.com/api/sendmail/', users).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  
  

}
