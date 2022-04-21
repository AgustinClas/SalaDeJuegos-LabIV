import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  loginUsuario:Usuario = new Usuario();

  constructor(public ruteo:Router, private authService:AuthFirebaseService) {
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {
  }

  redirigir(){
    this.ruteo.navigateByUrl(this.loginUsuario.email);
  }

  ingresar(){

    this.authService.iniciarSesion(this.loginUsuario.email, this.loginUsuario.password).then(() => {
      if(this.authService.obtenerUsuarioLogueado()){ 

        this.authService.authenticate();
        this.ruteo.navigateByUrl("Home");
      }
    })
  }



  iniciarSesionAutomaticamente(){
    
    this.loginUsuario.email = "agu@gmail.com";
    this.loginUsuario.password = "123456"
  
  }




}
