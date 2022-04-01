import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title:string
desc:string
@Output() todoAdd:EventEmitter<Todo>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
console.log("todo added...")
const todo={
  slo:8,
  title:this.title,
  desc:this.desc,
  active:true

}
this.todoAdd.emit(todo);
  }
}
