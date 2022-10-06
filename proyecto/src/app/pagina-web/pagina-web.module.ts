import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { HeaderComponent } from './pagina/shared/header/header.component';
import { PaginaWebRoutingModule } from './pagina-web-routing-module';
import { FooterComponent } from './pagina/shared/footer/footer.component';
import { AcercaComponent } from './pagina/acerca/acerca.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ServiciosComponent } from './pagina/servicios/servicios.component';
import { InicioComponent } from './pagina/inicio/inicio.component';



@NgModule({
  declarations: [
    PaginaComponent,
    HeaderComponent,
    FooterComponent,
    AcercaComponent,
    ContactoComponent,
    ServiciosComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PaginaWebRoutingModule
  ],
  exports:[PaginaComponent]
})
export class PaginaWebModule { }
