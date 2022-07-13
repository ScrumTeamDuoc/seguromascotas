import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component';
import { AppComponent } from './app.component';
import { ConsultasComponent } from './templates/consultas/consultas.component';
import { ContactoComponent } from './templates/contacto/contacto.component';
import { CotizadorComponent } from './templates/cotizador/cotizador.component';
import { ExamenesComponent } from './templates/examenes/examenes.component';
import { FarmaciasComponent } from './templates/farmacias/farmacias.component';
import { IndexComponent } from './templates/index/index.component';
import { MedicamentosComponent } from './templates/medicamentos/medicamentos.component';
import { MiplanComponent } from './templates/miplan/miplan.component';
import { OperacionesComponent } from './templates/operaciones/operaciones.component';
import { RegistrousuarioComponent } from './templates/registrousuario/registrousuario.component';
import { SolicitarconsultaComponent } from './templates/solicitarconsulta/solicitarconsulta.component';
import { TerapiasComponent } from './templates/terapias/terapias.component';
import { UnderConstructionComponent } from './templates/under-construction/under-construction.component';



const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'terapias', component: TerapiasComponent },
  { path: 'operaciones', component: OperacionesComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'examenes', component: ExamenesComponent },
  { path: 'farmacias', component: FarmaciasComponent },
  { path: 'solicitarconsulta', component: SolicitarconsultaComponent },
  { path: 'miplan', component: MiplanComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cotizador', component: CotizadorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrousuario', component: RegistrousuarioComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: IndexComponent },
  { path: 'underconstruction', component: UnderConstructionComponent }
];

//exportar modilo routing
export const appRoutingProviders: any[] = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
