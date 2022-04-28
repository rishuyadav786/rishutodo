import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  constructor(private router:Router){
    setTimeout(()=>{
this.title="My Todos"
    },3000)
  }
  login_user_name=localStorage.getItem("user_name");
  logout() {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    window.location.reload();
    window.location.reload();
    this.router.navigate(['']);
   

  }
}
