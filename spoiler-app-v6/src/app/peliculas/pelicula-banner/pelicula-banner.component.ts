import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  urlPelicula = 'https://www.screengeek.net/wp-content/uploads/2018/03/tomb-raider-movie-2018.jpg';
  nombrePelicula = 'Tom Ridr';
  descripcionPelicula = 'Alicia Vikander';
  estado = 'estreno';
  esEstreno = false;
  textoEstreno:string;
  clseEstreno:string
  constructor() {
  }

  ngOnInit() {
    if (this.esEstreno){
      this.textoEstreno = 'ESTRENO';
      this.clseEstreno = 'sa-'
    }
  }

}
