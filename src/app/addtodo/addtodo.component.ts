import { Component, OnInit } from '@angular/core';

interface Task{
  title: string,
  is_canceled: boolean
 }
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  tasks: Array<Task> = [
    {
      title: "Morning Walk",
      is_canceled: false
    },
    {
      title:"Angular Rxjs And Chart learn",
      is_canceled: false
    },
    {
      title: "Take break and lunch",
      is_canceled: false
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }
  
 
  clearToDo(){
    let do_delete = confirm("Are you sure to delete all tasks?");
    if (do_delete){
      this.tasks.splice(0);
    }
  }
 
  addTask(input:any){
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        title: value,
        is_canceled: false
      });
  }
 
  cancelTask(idx: number){
    if (this.tasks[idx].is_canceled){
      this.tasks[idx].is_canceled = false;
    }else{
      this.tasks[idx].is_canceled = true;
    }
  }
 
  deleteTask(idx: number){
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete){
      this.tasks.splice(idx, 1);
    }
  }
 
  editTask(idx: number){
    let title = this.tasks[idx].title;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.tasks[idx].title = result;
    }
  }

}
