import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  birdsData
  constructor(private commonService:CommonService) { 
    // this.birdsData=[{id:1,name:"abc",image:"xyz"},{id:1,name:"abc",image:"xyz"},
    // {id:1,name:"abc",image:"xyz"},{id:1,name:"abc",image:"xyz"}]
  }

  ngOnInit(): void {
    this.commonService.getBirdsData().subscribe(data=>this.birdsData=data)
  }

}
