import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  data1:any=[]
  data2:any=[]
  data3:any=[]
  constructor(private _du:CommonService) { }

  ngOnInit(): void {
    const sourse=from(['Tech','Comedy','News']);
console.log(sourse);
    // # Ex-01 | Map
    sourse.pipe(map(res=>this.getData(res))).subscribe(res=>{
      console.log(res);
      // this.data1=this.data1.push(res);
      this._du.print(res,'elContainerId1');
    });

     // # Ex-02 | MergeAll
     sourse.pipe(map(res=>this.getData(res)),mergeAll()).subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainerId2');
    });
    // # Ex-02 | MergeMap
    sourse.pipe(mergeMap(res=>this.getData(res))).subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainerId3');
    });
  }
  getData(data){
    return of(data+' Video Uploaded');
  }

}
