import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  productForm2:FormGroup;
  constructor(private fb: FormBuilder,  private ps: ProductserviceService,
     private router: Router, private route: ActivatedRoute) { 
  }
  
  products2:any;
  prodId:string;
  str:string="";
  str2:string="";
  str3:string="";
  
  handleForm(e){
  this.prodId=this.productForm2.controls['prodId'].value;
  if(this.prodId ==null){
      this.str3="Enter ProdId";
}
else{
  this.ps.findById(this.prodId).subscribe(products2=>{
    this.products2=products2;
    if(this.products2==null)
    this.str="Not Found";
    else
    this.str2="Deleted";
    console.log(this.products2);
  })
}

}
  ngOnInit() {

    this.productForm2 = this.fb.group({
      prodId: ['', [Validators.required, Validators.minLength(3)]],
      prodName: [''],
      price: ['0']
    })


}
}