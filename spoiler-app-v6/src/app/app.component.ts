import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Selector o etiquta
  templateUrl: './app.component.html', //Estructura
  styleUrls: ['./app.component.css']//Estilos
})
export class AppComponent {
  title = 'app';
  titulo= 'Hola Amigos';
  nombre = 'marcelo';
  apellido = 'nieto';
  edad = 23;
  sueldo = 1;
  fechaNacimeinto = new Date('1995/05/06');
  nombreBoton = 'Cambiar Clase';
  nombreClase = 'sa-titulo';

  cambiarClaseDeTitulo (){
    const nombreClaseEsTitulo = this.nombreClase ==='sa-titulo';
    if(nombreClaseEsTitulo){
      this.nombreClase = 'sa-subtitulo';
    }else{
      this.nombreClase = 'sa-titulo';
    }
  }

  aplicarClase(valorInput: string){
    this.nombreClase = valorInput;
    this.titulo = valorInput;
  }
}
