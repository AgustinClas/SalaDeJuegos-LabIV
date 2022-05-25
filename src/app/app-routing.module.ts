import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RespuestaEncuestasComponent } from './componentes/respuesta-encuestas/respuesta-encuestas.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'Home', loadChildren:() => import('src/app/modulo/games/games.module').then(m => m.GamesModule)},
  {path: 'encuesta', component:EncuestaComponent, canActivate: [AuthGuard]},
  {path: 'respuestasEncuesta', component:RespuestaEncuestasComponent, canActivate: [AdminGuard]},
  {path: 'QuienSoy', component:QuienSoyComponent},
  {path: 'Registro', component:RegistroComponent},
  {path: 'chat', component: ChatComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
