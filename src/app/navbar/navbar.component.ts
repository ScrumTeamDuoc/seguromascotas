import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserstorageService } from '../services/userstorage/userstorage.service';
@Component({
  selector: 'app-navbar', //ESTOS SON OBJETOS JSON / ESTE ES EL QUE SE USA EN LA ETIQUETA.
  templateUrl: './navbar.component.html',//ESTOS SON OBJETOS JSON /AQUÍ SI PONEMOS COMILLAS INVERTIDAS PODEMOS USAR HTML.
  styleUrls: ['./navbar.component.css']//ESTOS SON OBJETOS JSON
})
export class NavbarComponent implements OnInit { //ESTA CLASE SE EJECUTA AL CARGAR EL COMPONENTE DECLARADO
  public titulo: string; //Esta variable puede usarse en la vista del componente con los {{}}.
  user: any;
  constructor(public auth: AuthService, public userStorage: UserstorageService) {
    console.log('NavbarComponent cargado');
    this.titulo = 'Petfine '; //usamos variable creada arriba. para uso en la vista. (Interpolacion)
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.user = this.userStorage.getUser();
      console.log(this.user)
    }
  }


  logOut() {
    this.auth.logout();
  }
}
