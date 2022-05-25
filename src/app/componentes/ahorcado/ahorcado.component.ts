import { Component, OnInit, EventEmitter , ElementRef, ViewChild} from '@angular/core';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  vidas:number;
  cantidadAciertos:number;
  rand = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

  letras : string[][] = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Ñ'],
    ['Z','X','C','V','B','N','M']
  ];
  
  palabras : string[][] = [
    ['M','U','R','C','I','E','L','A','G','O'],
    ['C','U','A','R','E','N','T','E','N','A'],
    ['P','R','O','G','R','A','M','A','C','I','O','N'],
    ['T','E','C','L','A','D','O'],
    ['D','I','N','O','S','A','U','R', 'I', 'O'],
    ['A','N','G','U','U','L','A','R'],
    ['A','H','O','R','C','A','D','O'],
  ];

  palabraOriginal:string[] = this.randomPalabra();
  palabraHtml:string[] = [];
  objetoBloqueo:any =  { 
    'Q':false ,'W':false,'E':false,'R':false,'T':false,'Y':false,'U':false,'I':false,'O':false,'P':false,
    'A':false,'S':false,'D':false,'F':false,'G':false,'H':false,'J':false,'K':false,'L':false,'Ñ':false,
    'Z':false,'X':false,'C':false,'V':false,'B':false,'N':false,'M':false}

  constructor(private auth:AuthFirebaseService, private DataStorage:DataStorageServiceService) {
    this.vidas = 6;
    this.cantidadAciertos = 0;
  }
  
  ngOnInit(): void {
    
    this.generarPalabraJuego();
    this.generarObjetoBloqueo();
  }

  randomPalabra(){
    //selecciona una palabra del listado al cargar la pagina
    let max = this.palabras.length - 1
    let i = Math.floor(Math.random() * (max - 0 + 1) + 0)
    return this.palabras[i];
  }

  obtenerLetra(letra:string){

    //Desencadena el intento del usuario
    //Verificar si esta o no la palabra
    if(this.palabraOriginal.includes(letra)){

      this.actualizarPalabras(letra)
      //determinamosSiGano
      if(this.cantidadAciertos === this.palabraOriginal.length){
        this.bloquearTeclas();
        this.vidas = 10;
        this.GuardarJugada("Victoria");
      }
    
      const element = document.getElementById(letra)
      if(element != null) element.className = "bloqueo";

    }else{
      this.vidas--;

      if(this.vidas===0){
        this.bloquearTeclas();
        this.GuardarJugada("Derrota");
      }
    }
    
    this.objetoBloqueo[letra] = true;
  }
  
  generarPalabraJuego(){
    
    this.palabraHtml = [];
    for(let i=0; i < this.palabraOriginal.length; i++){
      this.palabraHtml.push("?");
    }

  }

  actualizarPalabras(letra:string){
    
    let i;
    for(let i=0; i < this.palabraOriginal.length; i++){
      if(this.palabraOriginal[i] === letra){
        this.palabraHtml[i] = letra;
        this.cantidadAciertos++;
      }
    }
  }

  GuardarJugada(resultado:string){
    let jugada = {"usuario": this.auth.usuario , "resultado": resultado, "fecha": new Date()}
    this.DataStorage.GuardarJuego("ahorcado", jugada);
  }

  reiniciarJuego(){
    //Genero nueva palabra
    this.palabraOriginal = this.randomPalabra();

    //Genero nueva palabra para renderizar
    this.generarPalabraJuego();

    //Reinicio contadores
    this.vidas = 6;
    this.cantidadAciertos = 0;

    //desbloqueo botones
    this.generarObjetoBloqueo();
  }

  generarObjetoBloqueo(){

    this.letras.forEach(subLetras => {
      subLetras.forEach(letra => {
        this.objetoBloqueo[letra] = false;
      })
    });
  }

  bloquearTeclas(){
    this.letras.forEach(subLetras => {
      subLetras.forEach(letra => {
        this.objetoBloqueo[letra] = true;
      })
    });
  }

}
