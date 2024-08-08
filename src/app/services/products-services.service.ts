import { Injectable } from '@angular/core';
import { StoreInterface } from '../Models/store-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsServicesService {
productServices:StoreInterface[]
  constructor() {
    this.productServices=[
      {id:1,gallaryNama:"Artexist Bathroom",price:20,quantity:0,
      galleryUrl:"https://m.media-amazon.com/images/I/81N3z0OHdTS._AC_SX679_.jpg",aboutThis:["size","color"]}
  , {id:2,gallaryNama:"Sphere Art 60X40cm",price:20,quantity:200,
    galleryUrl:"https://m.media-amazon.com/images/I/614ARo0EMcL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
    {id:3,gallaryNama:"Modern Tableau Print ",price:20,quantity:1,
      galleryUrl:"https://m.media-amazon.com/images/I/9157b1IVVhL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
  ,{id:13,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
    galleryUrl:"https://i.pinimg.com/236x/c8/df/15/c8df156558f98803b20bc6c710d41a75.jpg",aboutThis:["size","color"]},
    {id:14,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
      galleryUrl:"https://m.media-amazon.com/images/I/51PpieNNhJL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
  ,{id:16,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
    galleryUrl:"https://m.media-amazon.com/images/I/51yPECTLElL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
    {id:15,gallaryNama:"Artexist Bathroom",price:20,quantity:0,
      galleryUrl:"https://m.media-amazon.com/images/I/81N3z0OHdTS._AC_SX679_.jpg",aboutThis:["size","color"]}
  , {id:111,gallaryNama:"Sphere Art 60X40cm",price:20,quantity:200,
    galleryUrl:"https://m.media-amazon.com/images/I/614ARo0EMcL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},
    {id:12,gallaryNama:"Modern Tableau Print ",price:20,quantity:1,
      galleryUrl:"https://m.media-amazon.com/images/I/9157b1IVVhL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
  ,{id:5,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
    galleryUrl:"https://i.pinimg.com/236x/c8/df/15/c8df156558f98803b20bc6c710d41a75.jpg",aboutThis:["size","color"]},
    {id:7,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
      galleryUrl:"https://m.media-amazon.com/images/I/51PpieNNhJL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]}
  ,{id:100,gallaryNama:"Artexist Bathroom",price:20,quantity:200,
    galleryUrl:"https://m.media-amazon.com/images/I/51yPECTLElL.__AC_SY300_SX300_QL70_ML2_.jpg",aboutThis:["size","color"]},

  ]

  }

  getAllProducts():StoreInterface[]{
    return this.productServices  //[{},{},{}]
  }
  getProductByID(PRD:number): StoreInterface |null{   //{data},null
  let  OneProduct= this.productServices.find(prd=>prd.id==PRD)
   return OneProduct?OneProduct:null

}


}
