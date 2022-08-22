import { Prueba2Component } from './pages/components/prueba2/prueba2.component';
import { Prueba1Component } from './pages/components/prueba1/prueba1.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { CenterComponent } from './pages/components/center/center.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'center',component:CenterComponent},
{path:'dashboard',component:DashboardComponent},
{path:'prueba1',component:Prueba1Component},
{path:'prueba2',component:Prueba2Component},
{path:'',component:Prueba2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }