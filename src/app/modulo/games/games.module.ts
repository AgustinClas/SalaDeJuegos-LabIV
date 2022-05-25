import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { PreguntadosComponent } from 'src/app/componentes/preguntados/preguntados.component';
import { AhorcadoComponent } from 'src/app/componentes/ahorcado/ahorcado.component';
import { MayorOmenorComponent } from 'src/app/componentes/mayor-omenor/mayor-omenor.component';
import { CuatroEnLineaComponent } from 'src/app/componentes/cuatro-en-linea/cuatro-en-linea.component';
import { GamesRoutingModule } from './games-routing.module';


@NgModule({
  declarations: [
    PreguntadosComponent,
    HomeComponent,
    AhorcadoComponent,
    MayorOmenorComponent,
    CuatroEnLineaComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
