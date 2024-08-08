import { log } from 'console';
import { Component, inject, OnInit } from '@angular/core';
import { StoreInterface } from '../../Models/store-interface';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ImageStyleDirective } from '../../Directives/image-style.directive';
import { ProductsServicesService } from '../../services/products-services.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet ,CommonModule,ImageStyleDirective,RouterLink],  //NgFor ,NgClass ,NgStyle
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit {
// Iproducts:StoreInterface
Iproducts!:StoreInterface[]
// Product!:StoreInterface|null
// ProductServiceComp=inject(ProductsServicesService)

constructor(public  ProductServiceComp:ProductsServicesService , public router:Router  ){
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

//Day3

//   this.Iproducts=[
//     {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:0,
//     galleryUrl:"https://m.media-amazon.com/images/I/81N3z0OHdTS._AC_SX679_.jpg",aboutThis:["size","color"]}
// , {id:1,gallaryNama:"Sphere Art 60X40cm",price:20,quantity:200,
//   galleryUrl:"https://m.media-amazon.com/images/I/614ARo0EMcL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
//   {id:1,gallaryNama:"Modern Tableau Print ",price:20,quantity:1,
//     galleryUrl:"https://m.media-amazon.com/images/I/9157b1IVVhL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
// ,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//   galleryUrl:"https://i.pinimg.com/236x/c8/df/15/c8df156558f98803b20bc6c710d41a75.jpg",aboutThis:["size","color"]},
//   {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//     galleryUrl:"https://m.media-amazon.com/images/I/51PpieNNhJL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
// ,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//   galleryUrl:"https://m.media-amazon.com/images/I/51yPECTLElL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
//   {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:0,
//     galleryUrl:"https://m.media-amazon.com/images/I/81N3z0OHdTS._AC_SX679_.jpg",aboutThis:["size","color"]}
// , {id:1,gallaryNama:"Sphere Art 60X40cm",price:20,quantity:200,
//   galleryUrl:"https://m.media-amazon.com/images/I/614ARo0EMcL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
//   {id:1,gallaryNama:"Modern Tableau Print ",price:20,quantity:1,
//     galleryUrl:"https://m.media-amazon.com/images/I/9157b1IVVhL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
// ,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//   galleryUrl:"https://i.pinimg.com/236x/c8/df/15/c8df156558f98803b20bc6c710d41a75.jpg",aboutThis:["size","color"]},
//   {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//     galleryUrl:"https://m.media-amazon.com/images/I/51PpieNNhJL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
// ,{id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
//   galleryUrl:"https://m.media-amazon.com/images/I/51yPECTLElL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},

// ]
}
  ngOnInit(): void {        //3
    this.Iproducts=this.ProductServiceComp.getAllProducts()      //[{},{},{}]
   }
   getProductID(prdID:number){
this.router.navigate(['/Products',prdID])

// Products/:prdID

// console.log(this.router.navigate(['/Products',id]));

   }

}
