
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'App3';

  emp=new Employee();

  data:any;
  products:any[];

  e1={
    empId:11,
    empName:'James',
    salary:4864
  };

  ngOnInit(){

  }


}