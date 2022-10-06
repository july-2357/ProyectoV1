import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './pagina/acerca/acerca.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ServiciosComponent } from './pagina/servicios/servicios.component';


const routes: Routes = [
  // {path:'',component:PaginaComponent},
  {
    path: '', component: PaginaComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'acerca', component: AcercaComponent },]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PaginaWebRoutingModule { }