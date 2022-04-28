import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  AllData
  pageData
  startPos=0
  endPos=5
  constructor(private helpService:HelpService) { }

  ngOnInit(): void {
    this.helpService.getAllData().subscribe(data=>{
      console.log("data  ="+JSON.stringify(data))
    this.AllData=data
    this.pageData=this.AllData;
    return this.pageData.slice(this.startPos,this.endPos);
    })
  }
  prvoius(){

  }
  next(){
this.startPos=this.startPos+Number(5);
this.endPos=this.endPos+Number(5);
this.ngOnInit();
// this.pageData=this.AllData.slice(5,10)
  }
}
