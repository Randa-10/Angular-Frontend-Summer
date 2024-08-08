import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponentsComponent } from './components/main-components/main-components.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

export const routes: Routes = [
  //Day3
//first match wins
  // localhost:4200/
  // {path:'',redirectTo:'/Home',pathMatch:'full'}, //default
  // {path:"Home",component:HomeComponent,title:"home page"},
  // {path:"Products",component:ProductsComponent,title:"product page"},
 // // not found page, wild card path

 //Day4
 // localhost:4200/
{path:'',component:MainComponentsComponent,children:[  //default
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent,title:"home page"},
  {path:"Products",component:ProductsComponent,title:"product page"},
  // /:prdID
  {path:"Products/:prdID",component:ProductsDetailsComponent,title:"Details"}

]},


 {path:'**',component:NotfoundComponent}





];
