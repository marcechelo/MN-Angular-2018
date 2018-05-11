import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';

@NgModule({ // Decoradores
  declarations: [
    AppComponent,
    PeliculaBannerComponent
  ], // En este arreglo se definen los componentes a usar.
  imports: [
    BrowserModule,
    FormsModule
  ], // Define todos los Modulos
  providers: [], // Define los servicios
  bootstrap: [AppComponent] // Componente proncipal
})
export class AppModule {

}
