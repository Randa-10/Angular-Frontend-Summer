import { Component } from '@angular/core';
import { Track } from '../../Models/track';
import { CommonModule, NgFor } from '@angular/common';
import { Store } from '../../Models/store';
import { RouterOutlet } from '@angular/router';
import { ImageStyleDirective } from '../../Directives/image-style.directive';
import { ProductsServicesService } from '../../services/products-services.service';
import { StoreInterface } from '../../Models/store-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CommonModule,RouterOutlet,ImageStyleDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
TracKHome:Track
ItiTracK:Track
store:Store
ToggleImage:boolean=true
// Iproduct:StoreInterface[]

constructor( public products:ProductsServicesService ){
  this.TracKHome=new Track("Frontend","ITI Sohag",["html ","css","js","Angular"])
  this.ItiTracK=new Track(" MEARN ","ITI Sohag",["Angular ","Next js","React","Node js"])
  this.store=new Store("Laptop",10)

  // this.Iproduct=this.products.getAllProducts()
  // console.log(this.Iproduct);

}
//
toggleMethod(){
  this.ToggleImage=!this.ToggleImage
}


////////////////

//[{name:"",imgurl:"",price:""},{name:"",imgurl:"",price:""},{name:"",imgurl:"",price:""}......,{name:"",imgurl:"",price:""}], api

}
