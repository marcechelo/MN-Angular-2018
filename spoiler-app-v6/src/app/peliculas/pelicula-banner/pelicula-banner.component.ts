import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  urlImagen = 'https://www.hdwallpapers.in/download/alicia_vikander_as_lara_croft_in_tomb_raider-wide.jpg';
  descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  nombrePelicula = 'Tomb Raider';
  descripcionPelicula = 'Alicia vikander,Walton Googins';
  esEstreno = true;
  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }

  ngOnInit() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

}
