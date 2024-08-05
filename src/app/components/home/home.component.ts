import { Component } from '@angular/core';
import { Track } from '../../Models/track';
import { CommonModule, NgFor } from '@angular/common';
import { Store } from '../../Models/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
TracKHome:Track
ItiTracK:Track
store:Store

ToggleImage:boolean=true

constructor(){
  this.TracKHome=new Track("Frontend","ITI Sohag",["html ","css","js","Angular"])
  this.ItiTracK=new Track(" MEARN ","ITI Sohag",["Angular ","Next js","React","Node js"])
  this.store=new Store("Laptop",10)
}
//
toggleMethod(){
  this.ToggleImage=!this.ToggleImage
}

}
