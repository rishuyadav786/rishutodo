import { CompileShallowModuleMetadata } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs/operators';
import { CommonService } from '../common.service';
import { User } from '../todo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logSign:true;
  userData:any=[];
  orderForm
  display: boolean = true;
  user:User=new User();
  users:any=[]
  userLoginProfile = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    // userPassword: new FormControl('')
    // address: new FormGroup({
    //       street: new FormControl(''),
    //       city: new FormControl(''),
    //       state: new FormControl(''),
    //       zip: new FormControl('')
    //     })
  });
// email=new FormControl('');
// password=new FormControl('');
firstName=new FormControl('');
userEmail=new FormControl('');
userPassword=new FormControl('');

userSigninProfile = new FormGroup({
  firstName: new FormControl(''),
  userEmail: new FormControl(''),
  userPassword: new FormControl('')
 
});


constructor(private commonService: CommonService,private router:Router){

    
  }

  ngOnInit(): void {
    // this.userData=toArray(this.userData);
    console.log("all user dAta="+JSON.stringify(this.userData))
    this.commonService.getAllUsers().subscribe((data: User[]) => {
      this.userData = data;
    //  console.log(data.map(r=>r.title).toString())
      console.log("all Users= "+JSON.stringify(this.userData))
      
  
    });
  }

  login2(){
    this.commonService.getById(this.user.email).subscribe((data: User) => {
      // this.currentUser = data;
      console.log("one user data= "+JSON.stringify(data))
      // this.sellers = data.filter(e => e.userType == 'seller');

    })
  }
  signIn(data) {
    this.login2();
    let email1: any = this.userData.find(res => res.email === data.email)

    console.log("users details 1 =" + JSON.stringify(this.userData))
    console.log("users details 2 =" + JSON.stringify(email1))
    if (!email1) {
      alert("User not found..")
      console.log("User not found ")
    }
    else {
      if (email1.password === data.password) {
       
         
         
            localStorage.setItem("user_email", email1.email);
          
            localStorage.setItem("user_name", email1.name);
            this.router.navigate(['todos']);
            // window.location.reload();
            //  this.router.navigate(['']);
            
            // this.display = true;
            
        

     
      }
      else {
        
        console.log("password does not match")
      }
    }
    
    console.log("users =" + JSON.stringify(data))
  }
  signUp(data){
  console.log("from function"+JSON.stringify(this.user))
    // this.userData.push(this.userSigninProfile.value);
    this.commonService.addUser(this.user);
  this.display=true;
    console.log(this.userData)
  }
  changeLoginOption(){
    this.display=!this.display;
  }
}
