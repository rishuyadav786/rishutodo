import { CompileShallowModuleMetadata } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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


constructor(private commonService: CommonService){

    
  }

  ngOnInit(): void {
    // this.userData=toArray(this.userData);
    console.log("all user dAta="+JSON.stringify(this.userData))
    this.commonService.getAllUsers().subscribe((data: User[]) => {
      this.userData = data;
    //  console.log(data.map(r=>r.title).toString())
      console.log("all todos= "+JSON.stringify(this.userData))
      
  
    });
  }
  signIn(){

  }
  signUp(data){
  console.log("from function"+JSON.stringify(this.user))
    // this.userData.push(this.userSigninProfile.value);
    this.commonService.addUser(this.user);
  
    console.log(this.userData)
  }
  changeLoginOption(){
    this.display=!this.display;
  }
}
