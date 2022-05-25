import { Component, OnInit } from '@angular/core';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';

@Component({
  selector: 'app-respuesta-encuestas',
  templateUrl: './respuesta-encuestas.component.html',
  styleUrls: ['./respuesta-encuestas.component.css']
})
export class RespuestaEncuestasComponent implements OnInit {

  Encuestas:any = [];


  constructor(public bd:DataStorageServiceService) { }

  ngOnInit(): void {
    this.ObtenerEncuestas();
  }

  ObtenerEncuestas(){
    this.bd.GetEncuestas().then((encuestas) => {
        encuestas.forEach((encuesta:any) => {
          this.Encuestas.push(encuesta)
        })
      })
  }

}
