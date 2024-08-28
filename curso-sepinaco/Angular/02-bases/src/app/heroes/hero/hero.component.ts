import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // Interpolacion es poner en el html
  // estos atributos de esta manera: {{ name }} {{ age }}
  public name: string = 'ironman';
  public age: number = 45;

}
