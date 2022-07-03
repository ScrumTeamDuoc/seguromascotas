import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { appRoutingProviders } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterVideoComponent } from './footer-video/footer-video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { CardserviciosComponent } from './cardservicios/cardservicios.component';
import { ConsultasComponent } from './templates/consultas/consultas.component';
import { TerapiasComponent } from './templates/terapias/terapias.component';
import { OperacionesComponent } from './templates/operaciones/operaciones.component';
import { MedicamentosComponent } from './templates/medicamentos/medicamentos.component';
import { ExamenesComponent } from './templates/examenes/examenes.component';
import { FarmaciasComponent } from './templates/farmacias/farmacias.component';
import { CotizadorComponent } from './templates/cotizador/cotizador.component';
import { SolicitarconsultaComponent } from './templates/solicitarconsulta/solicitarconsulta.component';
import { MiplanComponent } from './templates/miplan/miplan.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { LoginComponent } from './templates/login/login.component';
import { RegistrousuarioComponent } from './templates/registrousuario/registrousuario.component';
import { IndexComponent } from './templates/index/index.component';
import { BaseComponent } from './templates/base/base.component';
import { ConsultascardsComponent } from './consultascards/consultascards.component';
import { MapagoogleComponent } from './mapagoogle/mapagoogle.component';
import { FormulariocotizarComponent } from './formulariocotizar/formulariocotizar.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { CardterapiasComponent } from './cardterapias/cardterapias.component';
import { CardoperacionesComponent } from './cardoperaciones/cardoperaciones.component';
import { CardsresponsiveComponent } from './cardsresponsive/cardsresponsive.component';
import { ModalinvitadoComponent } from './modalinvitado/modalinvitado.component';
import { CardcontrataComponent } from './cardcontrata/cardcontrata.component';
import { LogotituloComponent } from './logotitulo/logotitulo.component';

@NgModule({
  declarations: [ //Declarar componentes
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterVideoComponent,
    CarouselComponent,
    QrcodeComponent,
    CardserviciosComponent,
    ConsultasComponent,
    TerapiasComponent,
    OperacionesComponent,
    MedicamentosComponent,
    ExamenesComponent,
    FarmaciasComponent,
    CotizadorComponent,
    SolicitarconsultaComponent,
    MiplanComponent,
    ContactoComponent,
    LoginComponent,
    RegistrousuarioComponent,
    IndexComponent,
    BaseComponent,
    ConsultascardsComponent,
    MapagoogleComponent,
    FormulariocotizarComponent,
    WhatsappComponent,
    CardterapiasComponent,
    CardoperacionesComponent,
    CardsresponsiveComponent,
    ModalinvitadoComponent,
    CardcontrataComponent,
    LogotituloComponent
  ],
  imports: [
    appRoutingProviders,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //Aqui se exporta el modulo.
