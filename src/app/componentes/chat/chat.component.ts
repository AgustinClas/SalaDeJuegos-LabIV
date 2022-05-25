import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';
import { DataStorageServiceService } from 'src/app/servicios/data-storage-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  userCollection?: AngularFirestoreCollection;
  collection: any;


  usuarioLogeado:any;
  nuevoMensaje:string;
  mensajes:any = []

    constructor(public authService:AuthFirebaseService, private dataStorage:DataStorageServiceService) { 
    this.nuevoMensaje = "";

    }

  ngOnInit(): void {
    this.dataStorage.GetMensajes().subscribe(
      prod => {this.mensajes = prod;}
    )    
  }

  

  enviarMensaje(){
    if(this.nuevoMensaje.length > 0){ 
    console.log(this.nuevoMensaje);
    this.dataStorage.GuardarMensaje(this.authService.usuario, this.nuevoMensaje);
    this.nuevoMensaje = "";
    }
  }

}
