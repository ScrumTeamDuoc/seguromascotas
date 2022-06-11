import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', //ESTOS SON OBJETOS JSON / ESTE ES EL QUE SE USA EN LA ETIQUETA.
  templateUrl: './navbar.component.html',//ESTOS SON OBJETOS JSON /AQUÍ SI PONEMOS COMILLAS INVERTIDAS PODEMOS USAR HTML.
  styleUrls: ['./navbar.component.css']//ESTOS SON OBJETOS JSON
})
export class NavbarComponent implements OnInit { //ESTA CLASE SE EJECUTA AL CARGAR EL COMPONENTE DECLARADO
  public titulo: string; //Esta variable puede usarse en la vista del componente con los {{}}.

  constructor() { 
    console.log('NavbarComponent cargado');
    this.titulo = 'Petfine '; //usamos variable creada arriba. para uso en la vista. (Interpolacion)
  }

  ngOnInit(): void {
  }

}
