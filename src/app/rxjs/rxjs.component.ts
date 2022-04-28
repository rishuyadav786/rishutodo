import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  MergeMapGo(){
    console.log("merge map...")
    this.router.navigate(['/mergeMap']);

  }
  SwtchMapGo(){
    console.log("Switch map...")
    this.router.navigate(['/switchMap']);
  }
}
