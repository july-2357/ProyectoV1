import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { CenterComponent } from './pages/components/center/center.component';
import { BreadcrumbsComponent } from './pages/shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { Prueba1Component } from './pages/components/prueba1/prueba1.component';
import { Prueba2Component } from './pages/components/prueba2/prueba2.component';

import { PagesComponent } from './pages/pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PaginaWebModule } from './pagina-web/pagina-web.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CenterComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    Prueba1Component,
    Prueba2Component,
    LoginComponent,
    RegistroComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PaginaWebModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
