import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterVideoComponent } from './footer-video/footer-video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { CardserviciosComponent } from './cardservicios/cardservicios.component';

@NgModule({
  declarations: [ //Declarar componentes
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterVideoComponent,
    CarouselComponent,
    QrcodeComponent,
    CardserviciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //Aqui se exporta el modulo.
