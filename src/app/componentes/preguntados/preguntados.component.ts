import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  
  juegosRecord:any = [];
  listadoPaises:any = [];
  paisesElegidos:any = ["1","2","3"];
  paisBandera:any = [];
  string = "qq";
  contador = 0;
  juegoPerdido = false;

  constructor(private http:HttpClient, private auth:AuthFirebaseService, private DataStorage:DataStorageServiceService) { }

  Intento(eleccion:number){

    if(this.paisBandera.pais === this.paisesElegidos[eleccion].pais){
      
      this.contador = this.contador + 1;
      this.AsignarPaises();
    }else{
      this.juegoPerdido = true;
      this.GuardarJugada();
    }

  }

  Reiniciar(){
    this.contador = 0;
    this.juegoPerdido = false;
    this.AsignarPaises();
  }

  GetApi(){ 
    this.AsignarPaises();
  }
  
  ngOnInit(): void {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((listadoPaisesAux:any) => {
            
      listadoPaisesAux.map((auxPais:any)=>{
        let newPais = { 
          pais : auxPais.translations.spa.common,
          imagen : auxPais.flags.svg
        }
        
        if(newPais.imagen != undefined)
        this.listadoPaises.push(newPais)
      })

      this.AsignarPaises();
    });

    this.ObtenerJuegos();

  }


  AsignarPaises(){
    let max = this.listadoPaises.length - 1;

    this.paisesElegidos[0] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    this.paisesElegidos[1] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    this.paisesElegidos[2] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    
    this.paisBandera = this.paisesElegidos[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    
    if(this.paisBandera.imagen === undefined) this.AsignarPaises();
  }

  GuardarJugada(){
    let jugada = {"usuario": this.auth.usuario , "resultado": this.contador, "fecha": new Date()}
    this.DataStorage.GuardarJuego("trivia", jugada);
  }

  ObtenerJuegos(){

    this.DataStorage.GetJuegos("trivia").subscribe(
        prod => {this.juegosRecord = prod;}
      )    
  }

}
  


