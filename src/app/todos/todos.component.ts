import { Component, OnInit } from '@angular/core';
import{Todo} from'../todo';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'Todo List';
  todos:Todo[];
  localItem:string
  startPos:Number=0;
  endPos:number=3;
  constructor(private commonService: CommonService){


//     setTimeout(()=>{
// this.title="Changed Title"
//     },3000);
    // this.localItem=localStorage.getItem("todos")
    // console.log("all todo coming= "+this.localItem)
// if(this.localItem==null){
// this.todos=[];
// this.todos=JSON.parse(this.todos);
// }
// else{
  // this.todos=JSON.parse(this.localItem);
// }

// this.todos=JSON.parse(this.localItem)
    // this.todos=[{slo:1,title:"This is title 1",desc:"description 1",active:true},
    // {slo:2,title:"This is title 2",desc:"description 2",active:true},
    // {slo:3,title:"This is title 3",desc:"description 3",active:true},
    // {slo:4,title:"This is title 4",desc:"description 4",active:true}]


}

  ngOnInit(): void {
   
    this.commonService.getAllTodos(this.startPos,this.endPos).subscribe((data: Todo[]) => {
      this.todos = data;
    //  console.log(data.map(r=>r.title).toString())
      console.log("all todos= "+JSON.stringify(this.todos))
      
  
    });
  }
  deleteTodo(todo){
    console.log("data for delete= "+JSON.stringify(todo))
    this.commonService.removeProduct(todo);
    
  // console.log(todo)
  // const index=this.todos.indexOf(todo);
  // this.todos.splice(index,1)
  // localStorage.setItem("todos",JSON.stringify(this.todos))
    // this.todos.filter(data=>data.slo!=todo.slo)
  }
  addTodo(todo){
    console.log(todo)
    
    // this.todos.push(todo)
    this.commonService.addTodos(todo);
    // localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    toggleTodo(todo:Todo){
      console.log("from toggle")
      const index=this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active
      localStorage.setItem("todos",JSON.stringify(this.todos))
    }
    openDispaly(){
      console.log("dispaly calling from ts file")
      this.commonService.callDisplay();
    }
    sendMail(){
      this.commonService.sendMail();
    }
    nextData(){
      this.startPos=Number(this.startPos)+Number(3);
      this.endPos=Number(this.endPos)+Number(3);
      this.ngOnInit();
    }
}
