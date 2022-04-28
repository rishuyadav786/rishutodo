import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
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
      this._du.print(res,'elContainerId4');
    });

     // # Ex-02 | SwitchAll
     sourse.pipe(map(res=>this.getData(res)),switchAll()).subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainerId5');
    });
    
    // # Ex-02 | SwitchMap
    sourse.pipe(switchMap(res=>this.getData(res))).subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainerId6');
    });
  }
  getData(data){
    return of(data+' Video Uploaded').pipe(delay(1000));
  }

}
