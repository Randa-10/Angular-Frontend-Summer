import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,  //v17 ,v18
  imports: [RouterOutlet,SidbarComponent ,NavbarComponent,FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
