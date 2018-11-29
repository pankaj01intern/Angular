import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFOrmComponent implements OnInit {

  productForm:FormGroup;
  
  constructor(private fb: FormBuilder,  private ps: ProductserviceService,
     private router: Router, private route: ActivatedRoute) { 

    function f1() {
      alert(" submitted");
    }
  }


  handleForm(e){
    let productData = this.productForm.value;
    this.ps.saveProduct(productData)
     .subscribe(response => {
       this.router.navigate([])
      })
  }

  messages: any = {};
  ngOnInit() {

    this.productForm = this.fb.group({
      prodId: ['', [Validators.required, Validators.minLength(3)]],
      prodName: [''],
      price: ['0']
    })

    this.productForm.get('prodId').statusChanges
    .subscribe(status => {
      if (status === "INVALID") this.messages['prodId'] = "Invalid ProductId"
      else this.messages['prodId'] = ""
    })

  this.productForm.get('prodName').statusChanges
    .subscribe(status => {
      if (status === "INVALID") this.messages['prodName'] = "Invalid ProductName"
      else this.messages['prodName'] = ""
    })
  

  this.productForm.get('price').statusChanges
    .subscribe(status => {
      if (status === "INVALID") this.messages['price'] = "Invalid Price"
      else this.messages['price'] = ""
    })
  }
  

}