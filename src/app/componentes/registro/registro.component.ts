import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    email:string;
    password:string;
    passwordConf:string;
    errorRegistro:boolean = false;

    registroUsuario:Usuario = new Usuario();

    constructor(public ruteo:Router, private authService:AuthFirebaseService,  private dataStorage:DataStorageServiceService) {
      this.email = "";
      this.password = "";
      this.passwordConf = "";
    }

    ngOnInit(): void {
    }

    async registrar(){

      if(this.password === this.passwordConf){ 
        try{

          this.authService.registrar(this.email, this.password).then((usr) => {
            
            if(usr.user?.email){ 
              this.authService.authenticate(usr.user?.email);
              this.ruteo.navigateByUrl("Home");
              this.dataStorage.GuardarLog(usr.user?.email);
              this.errorRegistro = false;
            }
          }).catch(e => {
            console.log("Error al iniciar usuario" + e);
            this.errorRegistro = true;
          })
           
       }
       catch(e){
         console.log("Error al iniciar usuario" + e);
         this.errorRegistro = true;
       }
    }
  }

}
