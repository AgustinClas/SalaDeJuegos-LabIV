import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string;
  password:string;
  passwordConf:string;

  registroUsuario:Usuario = new Usuario();

  constructor(public ruteo:Router, private authService:AuthFirebaseService) {
    this.email = "";
    this.password = "";
    this.passwordConf = "";
  }

  ngOnInit(): void {
  }

  registrar(){

      if(this.password === this.passwordConf){ 
        try{

          this.authService.registrar(this.registroUsuario.email, this.registroUsuario.password).then(() => {
            
            if(this.authService.obtenerUsuarioLogueado()){ 
              this.authService.authenticate();
              this.ruteo.navigateByUrl("Home");
            }
          })
        }
        catch(e){
          console.log(e);
      }
    }
  }


}
