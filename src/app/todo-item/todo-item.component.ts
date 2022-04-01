import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo
@Input() i:number
@Output() todoDelete:EventEmitter<Todo>=new EventEmitter()
@Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick event is triggered..")
  }
  onCheckBoxClick(todo:Todo){
    console.log("OnClick event is triggered..")
    this.todoCheckbox.emit(todo);
  
  }
}
