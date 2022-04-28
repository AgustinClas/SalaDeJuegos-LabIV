import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  password:string;
  errorInicio:boolean;

  loginUsuario:Usuario = new Usuario();

  constructor(public ruteo:Router, private authService:AuthFirebaseService, private dataStorage:DataStorageServiceService) {
    this.email = "";
    this.password = "";
    this.errorInicio = false;
  }

  ngOnInit(): void {
  }

  redirigir(){
    this.ruteo.navigateByUrl(this.loginUsuario.email);
  }

   async ingresar(){

    try{
       
       this.authService.iniciarSesion(this.loginUsuario.email, this.loginUsuario.password).then( usr => {

         if(usr.user?.email){ 
           this.authService.authenticate(usr.user?.email);
           this.ruteo.navigateByUrl("Home");
           this.dataStorage.GuardarLog(usr.user?.email);
           this.errorInicio = false;
         }
       }).catch(e => {this.errorInicio = true});
        
    }
    catch(e){
      console.log("Error");
    }
  }

  iniciarSesionAutomaticamente(){
    
    this.loginUsuario.email = "usuario@anonimo.com";
    this.loginUsuario.password = "123456"
  
  }

}
