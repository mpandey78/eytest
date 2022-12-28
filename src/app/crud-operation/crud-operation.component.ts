import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.scss']
})
export class CrudOperationComponent implements OnInit {
  name = 'TodoList App';
  todos =[
   {
    title: 'Birthday'
    // done: false
   },

   {
    title: 'Meeting'
    // done: true
   },

   {
    title: 'Pay Bill'
    // done: true
   }

  ];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  
  addTodo(newTodoTitle:any){
    var newTodo = {
      title: newTodoTitle
    };
    this.todos.push(newTodo);
  }
  
  deleteTodo(todo:any){
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }
  editTodo(todo:any){
    
  }

}
