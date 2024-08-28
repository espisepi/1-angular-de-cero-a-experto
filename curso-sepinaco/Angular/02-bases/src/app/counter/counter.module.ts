import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

// CounterComponent solo puede ser utilizado
// dentro de esta carpeta counter donde se encuentra
// CounterModule
// Para usarlo fuera, es decir, en otro modulo
// tengo que importar en el modulo externo el CounterModule
// para poder usar el CounterComponent dentro del modulo externo
// Para usarlo fuera tengo que definirlo en el apartado exports: []
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
