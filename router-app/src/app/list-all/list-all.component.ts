import { ProductserviceService } from './../productservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  products:Array<any>=[];
  constructor(private ps:ProductserviceService) { }

  ngOnInit() {
    this.ps.loadAll().subscribe(products=>{
     this.products=products;
  
    });
  }

}