import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  
  authenticated$ = new BehaviorSubject(false);

  public authenticate() {
    this.authenticated$.next(true);
  
  }

  public deauthenticate() {
    this.authenticated$.next(false);
  }

  constructor(private auth:AngularFireAuth) { 

  }

  async iniciarSesion(email:string, password:string){
    
    try{
      return await this.auth.signInWithEmailAndPassword(email, password)

    }catch(err){
      console.log("Error en login: ", err)
      return null
    }
  }

  async registrar(email:string, password:string){
    
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password)
    }catch(err){
      console.log("Error en login: ", err)
      return null
    }
  }

  obtenerUsuarioLogueado(){
    return this.auth.authState
  }

  cerrarSesion(){
    this.auth.signOut();
  }
  
}
