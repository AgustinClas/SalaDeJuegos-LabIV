import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta:any = {
    "usuario":"",
    "nombre": "",
    "apellido": "",
    "edad": "",
    "numTelefono": "",
    "juegosFav": [],
    "recomendacion": "",
    "sugerencia": "",
  }

  formValidaciones;
  
  constructor( private authService:AuthFirebaseService, private dataStorage:DataStorageServiceService, public ruteo:Router ) { 
    let fb = new FormBuilder();

    this.formValidaciones = fb.group(
      {
        'firstName': ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        'lastName': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        'edad': ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(18), Validators.max(99)]],
        'numTelefono': ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
        'sugerencia': ['', [Validators.required]],
        'ahorcado': [],
        'mayorMenor': [],
        'trivia': [],
        'cuatroEnLinea': [],
        'recomendacion': ['', [Validators.required]],
      }
    );
  }
  
  ngOnInit(): void {
  }

  CargarEncuesta(){

    this.encuesta.usuario = this.authService.usuario;
    this.encuesta.nombre = this.formValidaciones.controls['firstName'].value;
    this.encuesta.apellido = this.formValidaciones.controls['lastName'].value;
    this.encuesta.edad = this.formValidaciones.controls['edad'].value;
    this.encuesta.numTelefono = this.formValidaciones.controls['numTelefono'].value;
    this.encuesta.recomendacion = this.formValidaciones.controls['recomendacion'].value;
    this.encuesta.sugerencia = this.formValidaciones.controls['sugerencia'].value;

    if( this.formValidaciones.controls['ahorcado'].value ) this.encuesta.juegosFav.push("Ahorcado");
    if( this.formValidaciones.controls['mayorMenor'].value ) this.encuesta.juegosFav.push("Mayor o menor");
    if( this.formValidaciones.controls['trivia'].value ) this.encuesta.juegosFav.push("Trivia");
    if( this.formValidaciones.controls['cuatroEnLinea'].value ) this.encuesta.juegosFav.push("Cuatro en linea");
    if(this.encuesta.juegosFav.length === 0) this.encuesta.juegosFav.push("Ninguno");

    this.dataStorage.GuardarEncuesta(this.encuesta);
    this.ruteo.navigateByUrl("Home");


  }


}
