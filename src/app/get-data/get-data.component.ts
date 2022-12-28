import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
data:any=[]
  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    const url="https://jsonplaceholder.typicode.com/users";
    this.http.get(url).subscribe(res=>{
this.data=res
console.log(this.data);

    })
  }

}
