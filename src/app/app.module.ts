import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { RespuestaEncuestasComponent } from './componentes/respuesta-encuestas/respuesta-encuestas.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    JuegosComponent,
    NotFoundComponent,
    QuienSoyComponent,
    RegistroComponent,
    ChatComponent,
    EncuestaComponent,
    RespuestaEncuestasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
