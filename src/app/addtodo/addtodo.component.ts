import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
   
   
   
   time = new Observable(res=>{
    setInterval(() => res.next(new Date().toString()), 1000)  

   })
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
  
  newTime:any
  hr:any
  min:any
  sec:any
  timer:any
  session:any
  t:any
  constructor() { }

  ngOnInit(): void {
  this.clock()
  }

  
  clock(){
    this.newTime= new Date()
    this.hr = this.newTime.getHours()
    this.min =this.newTime.getMinutes()
    this.sec =this.newTime.getSeconds()
    this.session='AM'
    if(this.hr==0){
      this.hr=12
    }
    if(this.hr>12){
      this.hr=this.hr-12
      this.session='PM'
    }
    this.hr=(this.hr<10) ? "0" + this.hr : this.hr
    this.min=(this.min<10) ? "0" + this.min : this.min
    this.sec=(this.sec<10) ? "0" + this.sec : this.sec

    
    this.timer= this.hr +':'+ this.min +':'+this.sec +' ' +this.session
    
    this.t= setTimeout(() => {
      this.clock()
    }, 1000);
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
