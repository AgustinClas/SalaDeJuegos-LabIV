import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'juegos', component:JuegosComponent, children:
    [
    {path: 'login', component:LoginComponent},
    {path: 'preguntados', component:PreguntadosComponent},
    {path: '**', component:NotFoundComponent}
    ]
  },
  {path: 'QuienSoy', component:QuienSoyComponent},
  {path: 'Registro', component:RegistroComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
