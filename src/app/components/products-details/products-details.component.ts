import { Component, OnInit } from '@angular/core';
import { StoreInterface } from '../../Models/store-interface';
import { ProductsServicesService } from '../../services/products-services.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {
product!:StoreInterface|null
currID:number=0
constructor(public ProductDetails:ProductsServicesService, public active:ActivatedRoute , public location:Location){

}
  ngOnInit(): void {
this.currID=Number(this.active.snapshot.paramMap.get('prdID'))   // id:url   //2
console.log(this.currID);

this.product=this.ProductDetails.getProductByID(this.currID)  ///  {data}
console.log("aaaaa",this.product);   //{}

console.log("string");
  }

  goBack(){
    this.location.back()
  }

}
