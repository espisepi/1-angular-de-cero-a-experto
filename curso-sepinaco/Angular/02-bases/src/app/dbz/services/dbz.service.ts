import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  // Gracias a este codigo
  // No tenemos que añadir el servicio
  // En el apartado de providers de AppModule
  // Porque es similiar a lo que hacemos con este codigo
  // Por lo tanto, tambien hace
  // Que dispongamos de nuestro servicio
  // En toda la aplicacion
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter( character: Character ): void {
    // console.log('MainPage');
    // console.log(character);
    this.characters.push(character);
  }

  onDeleteCharacter( index: number ) {
    this.characters.splice(index,1);
  }
}
