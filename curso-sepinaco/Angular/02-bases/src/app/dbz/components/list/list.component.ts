import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Input es un decorador que hace que le podamos pasar al ListComponent
  // ese atributo, es decir,
  // <dbz-list [characterList]="myCharacterList"></dbz-list>
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ]

}
