import { Component } from '@angular/core';

@Component({
  selector: 'app-sidbar',
  standalone: true,
  imports: [],
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.css'
})
export class SidbarComponent {
//properites
sayHello:string="Hello "
track:string="Frontend"

//methods
sayHelloMethod():string{
return `hello in iti ${this.track}`
}

}
