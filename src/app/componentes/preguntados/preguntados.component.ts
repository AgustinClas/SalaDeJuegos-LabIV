import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  
  listadoPaises:any = [];
  paisesElegidos:any = ["1","2","3"];
  paisBandera:any = [];
  string = "qq";
  contador = 0;
  juegoPerdido = false;

  constructor(private http:HttpClient) { }

  Intento(eleccion:number){

    if(this.paisBandera.pais === this.paisesElegidos[eleccion].pais){
      
      this.contador = this.contador + 1;
      this.AsignarPaises();
    }else{
      this.juegoPerdido = true;
    }

  }

  Reiniciar(){
    this.contador = 0;
    this.juegoPerdido = false;
    this.AsignarPaises();
  }

  //QUE TENGA MENU (NAV BAR)
  //QUE APAREZCA LA INFO DE LA BANDERA SELECCIONADA EN LA INFO BASICA


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

        console.log(auxPais);
        
        if(newPais.imagen != undefined)
        this.listadoPaises.push(newPais)
      })

      this.AsignarPaises();
    });

  }


  AsignarPaises(){
    let max = this.listadoPaises.length - 1;

    this.paisesElegidos[0] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    this.paisesElegidos[1] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    this.paisesElegidos[2] = this.listadoPaises[Math.floor(Math.random() * (max - 0 + 1) + 0)];
    
    this.paisBandera = this.paisesElegidos[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
    
    if(this.paisBandera.imagen === undefined) this.AsignarPaises();
  }

  

}
