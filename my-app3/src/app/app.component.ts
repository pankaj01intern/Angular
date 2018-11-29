
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  img:boolean=true;

  Images=[

{
  id: 'I001',
  path:'../assets/pic1.png',
},
{
id: 'I002',
  path:'../assets/pic2.png',
},

{
id: 'I003',
  path:'../assets/pic3.png',
},


{
  id: 'I004',
  path:'../assets/pic1.png',
}
  ]

  filteredProducts:IProduct[];
  _filter:string  ;

  get filter(): string{
    return this._filter;
  }

  set filter(value:string){
    this._filter=value;
    this.filteredProducts=this.filter ? this.performFilter(this.filter) : this.products;

  }


  
  products: IProduct[]= [
    {
      name:'Pen'
    },
    {
      name:'Book'
    },
    {
      name:'Mouse'
    },
    {
      name:'Mac'
    }

  ]

  getTitle():number {
    return 2*45+67-0.2;
    } ;

    toggleImg(): void {
     this.img=!this.img;
    }


  constructor() {
    this.filteredProducts=this.products;
  }


    performFilter(filterBy: string):IProduct[]{
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product:IProduct)=>
      product.name.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }

}