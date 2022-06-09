import { Component } from '@angular/core';

@Component({ //DECORADOR
  selector: 'app-root', //ETIQUETA O DIRECTIVA EN QUE SE CARGA
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //AQUÍ CREAMOS VARIABLES QUE SE LLAMARAN CON DOBLE LLAVE EN HTML
  public title = 'Seguro de mascotas Petfine';
}
