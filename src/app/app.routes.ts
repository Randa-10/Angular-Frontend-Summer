import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
//first match wins
  // localhost:4200/
  {path:'',redirectTo:'/Home',pathMatch:'full'}, //default
  {path:"Home",component:HomeComponent,title:"home page"},
  {path:"Products",component:ProductsComponent,title:"product page"},


  // not found page, wildcard path
  {path:"**",component:HomeComponent},
];
