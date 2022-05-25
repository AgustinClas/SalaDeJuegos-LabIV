import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from 'src/app/componentes/ahorcado/ahorcado.component';
import { CuatroEnLineaComponent } from 'src/app/componentes/cuatro-en-linea/cuatro-en-linea.component';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { MayorOmenorComponent } from 'src/app/componentes/mayor-omenor/mayor-omenor.component';
import { PreguntadosComponent } from 'src/app/componentes/preguntados/preguntados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'mayor-menor', component: MayorOmenorComponent},
  {path: 'trivia', component: PreguntadosComponent},
  {path: 'cuatro-en-linea', component: CuatroEnLineaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
