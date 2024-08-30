import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

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
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter( character: Character ): void {

    const newCharacter: Character = {
      // name: character.name,
      // power: character.power
      ...character,
      id: uuid(),
    };

    this.characters.push(character);
  }

  // onDeleteCharacter( index: number ) {
  //   this.characters.splice(index,1);
  // }
   deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
