import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  // Lo exportamos para poder usar estos componentes
  // en otros modulos distinto a HeroesModule
  exports: [
    HeroComponent,
    ListComponent,
  ],
  // En el apartado declarations ponemos los componentes
  // que han sido creados para este modulo de HeroesModule
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    // Lo importamos para poder usar *ngIf dentro
    // de los componentes que se definen en
    // el apartado declarations
    CommonModule
  ]
})
export class HeroesModule { }
