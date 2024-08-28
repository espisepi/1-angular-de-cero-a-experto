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

  // Los getters se ven como una propiedad
  // aunque en realidad es un metodo
  // pero accedemos a ello como si fuesen propiedades
  // Es decir, con interpolacion hariamos {{ capitalizedName }}
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Esto es un metodo
  // Con interpolacion hariamos {{ getHeroDescription() }}
  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  // Cuando hacemos un cambio de atributo
  // Angular solo actualiza en el html
  // Ese atributo cambiado
  // Y no actualiza todo el html
  // Por lo tanto, tiene buena performance haciendo eso
  changeHero(): void {
    // throw 'Metodo no implementado';
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 25;
  }

}
