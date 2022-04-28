import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  
  authenticated$ = new BehaviorSubject(false);
  usuario:any;

  public authenticate(usr?:string) {
    this.authenticated$.next(true);
    this.usuario = usr;
  }

  public deauthenticate() {
    this.authenticated$.next(false);
    this.usuario = '';
  }

  constructor(private auth:AngularFireAuth) { 

  }

  async iniciarSesion(email:string, password:string){
    
    return this.auth.signInWithEmailAndPassword(email, password)

  }

  async registrar(email:string, password:string){

    return this.auth.createUserWithEmailAndPassword(email, password);

  }

  obtenerUsuarioLogueado(){
    return this.auth.authState
  }

  cerrarSesion(){
    this.auth.signOut();
  }
  
}
