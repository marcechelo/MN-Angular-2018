import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ // Decoradores
  declarations: [
    AppComponent
  ], // En este arreglo se definen los componentes a usar.
  imports: [
    BrowserModule
  ], // Define todos los Modulos
  providers: [], // Define los servicios
  bootstrap: [AppComponent] // Componente proncipal
})
export class AppModule {

}
