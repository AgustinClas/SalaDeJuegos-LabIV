import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-omenor',
  templateUrl: './mayor-omenor.component.html',
  styleUrls: ['./mayor-omenor.component.css']
})
export class MayorOmenorComponent implements OnInit {

  randomActual:number;
  randomSiguiente:number;
  contadorAciertos:number;
  bloqueo:boolean = false;
  juegoActivo:boolean = true;

  constructor() { 
  this.randomActual = this.generarRandomInt();
  this.randomSiguiente = 0;
  this.contadorAciertos = 0;
  }

  ngOnInit(): void {

  }

  Apostar(opcion:number){

    this.randomSiguiente = this.generarRandomInt();

    if((opcion === 0 && this.randomSiguiente < this.randomActual) || (opcion === 1 && this.randomSiguiente > this.randomActual)){
      //gana
      console.log("siga");
      this.randomActual = this.randomSiguiente
      this.contadorAciertos++;
      
    }else{
      //pierde
      this.bloqueo = true;
      this.juegoActivo = false;
    }


  }

  generarRandomInt(){
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
  }

  reiniciar(){
    this.bloqueo = false;
    this.contadorAciertos = 0;
    this.randomActual = this.generarRandomInt();
    this.juegoActivo = true;
  }
}
