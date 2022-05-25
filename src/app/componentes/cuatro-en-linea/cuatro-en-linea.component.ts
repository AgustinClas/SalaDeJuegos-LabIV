import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-cuatro-en-linea',
  templateUrl: './cuatro-en-linea.component.html',
  styleUrls: ['./cuatro-en-linea.component.css']
})
export class CuatroEnLineaComponent implements OnInit {

  entradas = [
    { "bloqueo":false, "posicion":0, "espacios":[0,6,12,18,24]},
    { "bloqueo":false, "posicion":1, "espacios":[1,7,13,19,25]},
    { "bloqueo":false, "posicion":2, "espacios":[2,8,14,20,26]},
    { "bloqueo":false, "posicion":3, "espacios":[3,9,15,21,27]},
    { "bloqueo":false, "posicion":4, "espacios":[4,10,16,22,28]},
    { "bloqueo":false, "posicion":5, "espacios":[5,11,17,23,29]},
  ]

  espacios = [
    {"ocupado":false, "clase":"key", "posicionFila":0},
    {"ocupado":false, "clase":"key", "posicionFila":1},
    {"ocupado":false, "clase":"key", "posicionFila":2},
    {"ocupado":false, "clase":"key", "posicionFila":3},
    {"ocupado":false, "clase":"key", "posicionFila":4},
    {"ocupado":false, "clase":"key", "posicionFila":5},
    {"ocupado":false, "clase":"key", "posicionFila":0},
    {"ocupado":false, "clase":"key", "posicionFila":1},
    {"ocupado":false, "clase":"key", "posicionFila":2},
    {"ocupado":false, "clase":"key", "posicionFila":3},
    {"ocupado":false, "clase":"key", "posicionFila":4},
    {"ocupado":false, "clase":"key", "posicionFila":5},
    {"ocupado":false, "clase":"key", "posicionFila":0},
    {"ocupado":false, "clase":"key", "posicionFila":1},
    {"ocupado":false, "clase":"key", "posicionFila":2},
    {"ocupado":false, "clase":"key", "posicionFila":3},
    {"ocupado":false, "clase":"key", "posicionFila":4},
    {"ocupado":false, "clase":"key", "posicionFila":5},
    {"ocupado":false, "clase":"key", "posicionFila":0},
    {"ocupado":false, "clase":"key", "posicionFila":1},
    {"ocupado":false, "clase":"key", "posicionFila":2},
    {"ocupado":false, "clase":"key", "posicionFila":3},
    {"ocupado":false, "clase":"key", "posicionFila":4},
    {"ocupado":false, "clase":"key", "posicionFila":5},
    {"ocupado":false, "clase":"key", "posicionFila":0},
    {"ocupado":false, "clase":"key", "posicionFila":1},
    {"ocupado":false, "clase":"key", "posicionFila":2},
    {"ocupado":false, "clase":"key", "posicionFila":3},
    {"ocupado":false, "clase":"key", "posicionFila":4},
    {"ocupado":false, "clase":"key", "posicionFila":5},
  ]

  //turno del participante
  turno = "azul";
  mensaje = "Turno: " + this.turno;

  partidaGuardada=false;

  constructor(private auth:AuthFirebaseService, private DataStorage:DataStorageServiceService) { }

  ngOnInit(): void {
  }


  IngresarFicha(posicion:number){
    
    //Posicionamos el nuevo elemento
    //Devuelve la posicion ocupada
    let espacioOcupado =  this.OcuparEspacio(posicion);

    //Chequeamos si gano
    if(this.VerificarVictoria(espacioOcupado, posicion)){
      this.BloquearBotones(true);
      this.mensaje = "Ganador: " + this.turno;

      this.GuardarJugada();

    }else if(!this.VerificarEmpate())
      this.AsignarTurno();
  }

  GuardarJugada(){

    let jugada = {"usuario": this.auth.usuario , "resultado": this.mensaje, "fecha": new Date()}
    this.DataStorage.GuardarJuego("4-en-linea", jugada);

  }

  OcuparEspacio(posicion:number){

    for(let i = this.entradas[posicion].espacios.length - 1; i >= 0; i--){
      let posicionEspacio = this.entradas[posicion].espacios[i];
      if(!this.espacios[posicionEspacio].ocupado){
        this.espacios[posicionEspacio].clase = "key_" + this.turno;
        this.espacios[posicionEspacio].ocupado = true;

        let posicionCero = this.entradas[posicion].espacios[0];

        if(this.espacios[posicionCero].ocupado) this.entradas[posicion].bloqueo = true;

        return posicionEspacio;
      } 
    }

    return -1;
  }
  
  VerificarVictoria(espacioOcupado:number, columnaOcupada:number){

    //Chequeamos columna
    let contadorColumna = 0;

    for(let i = 0; i < this.entradas[columnaOcupada].espacios.length; i++){

      let posicionEspacio = this.entradas[columnaOcupada].espacios[i];

      if( this.espacios[posicionEspacio].clase === "key_" + this.turno){
        contadorColumna++;
        if(contadorColumna === 4) return true
    
      }else contadorColumna = 0;
    }

    //Chequeamos fila
    let contadorFila = 0;
    let posicionFila = espacioOcupado - this.espacios[espacioOcupado].posicionFila

    for(let i = 0; i < 6; i++){
      if( this.espacios[posicionFila].clase === "key_" + this.turno){
        contadorFila++;
        if(contadorFila === 4) return true
    
      }else contadorFila = 0;

      posicionFila++;
    }

    return false;
  }

  VerificarEmpate(){
    for(let i = 0; i < this.espacios.length; i++){

      if(!this.espacios[i].ocupado) return false;  
      
    }

    this.BloquearBotones(true);
    this.mensaje = "Partida empatada!"
    this.GuardarJugada();

    return true;
  }

  AsignarTurno(){
    this.turno === 'azul' ? this.turno = "naranja" : this.turno = "azul"
    this.mensaje = "Turno: " + this.turno;
  }

  ReiniciarJuego(){


    for(let i = 0; i < this.espacios.length; i++){
      this.espacios[i].ocupado = false;
      this.espacios[i].clase = "key";
    }

    this.BloquearBotones(false);
  }

  BloquearBotones(opcion:boolean){
    for(let i = 0; i < this.entradas.length; i++){

      this.entradas[i].bloqueo = opcion;
    }
  }

}
