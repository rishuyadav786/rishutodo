import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { LoginComponent } from './login/login.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [

 
  {path:"rxjs",component:RxjsComponent},
  {path:"demo",component:DemoComponent},
  {path:"demo2",component:Demo2Component},
  {path:'mergeMap',component:MergeMapComponent},
  {path:'switchMap',component:SwitchMapComponent},
  {path:'todos',component:TodosComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:TodosComponent},
  {path:'',component:TodosComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
