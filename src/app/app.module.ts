import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorOmenorComponent } from './componentes/mayor-omenor/mayor-omenor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JuegosComponent,
    NotFoundComponent,
    PreguntadosComponent,
    QuienSoyComponent,
    RegistroComponent,
    NavBarComponent,
    AhorcadoComponent,
    MayorOmenorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCRKspIEi8o3hADS26wmmW-NeYd8HuSaLY",
      authDomain: "ac-games-85b64.firebaseapp.com",
      projectId: "ac-games-85b64",
      storageBucket: "ac-games-85b64.appspot.com",
      messagingSenderId: "1050265686370",
      appId: "1:1050265686370:web:7e24ee4b049f7d1b739c3b"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
