import { Component } from '@angular/core';
import { StoreInterface } from '../../Models/store-interface';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
// Iproducts:StoreInterface
Iproducts:StoreInterface[]


constructor(){
  // this.Iproducts={
  //   PrdName:"Jabra",
  //   prdImageUrl:"https://m.media-amazon.com/images/I/41gGkBjThPL._AC_UL480_FMwebp_QL65_.jpg",
  //   prdPrice:200,
  //   prdQuantity:1000,
  // }

///demo

  // this.Iproducts=[
  //   {
  //   PrdName:"Jabra",
  //   prdImageUrl:"https://m.media-amazon.com/images/I/41gGkBjThPL._AC_UL480_FMwebp_QL65_.jpg",
  //   prdPrice:200,
  //   prdQuantity:1000,
  // },
  // {  PrdName:"Jabra",
  //   prdImageUrl:"https://m.media-amazon.com/images/I/41gGkBjThPL._AC_UL480_FMwebp_QL65_.jpg",
  //   prdPrice:200,
  //   prdQuantity:1000,}
  // ]


  this.Iproducts=[
    {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:0,
    galleryUrl:"https://m.media-amazon.com/images/I/81N3z0OHdTS._AC_SX679_.jpg",aboutThis:["size","color"]}
, {id:1,gallaryNama:"Sphere Art 60X40cm",price:20,quantity:200,
  galleryUrl:"https://m.media-amazon.com/images/I/614ARo0EMcL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
  {id:1,gallaryNama:"Modern Tableau Print ",price:20,quantity:0,
    galleryUrl:"https://m.media-amazon.com/images/I/9157b1IVVhL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
  galleryUrl:"https://i.pinimg.com/236x/c8/df/15/c8df156558f98803b20bc6c710d41a75.jpg",aboutThis:["size","color"]},
  {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
    galleryUrl:"https://m.media-amazon.com/images/I/51PpieNNhJL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
  galleryUrl:"https://m.media-amazon.com/images/I/51yPECTLElL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
]



}

}
