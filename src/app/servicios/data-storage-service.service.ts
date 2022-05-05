import { Injectable } from '@angular/core';
import { AngularFirestore, SnapshotOptions} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {



  constructor(private db : AngularFirestore) { 
    
  }

  GuardarLog( usuario : string ) {

    const fecha = new Date();
    const log = {"hora":fecha,"usuario":usuario}
    
    this.db.collection('logs').add(log).catch( e => console.log("error al cargar en la base"));

  }

  GuardarMensaje(usuario : string, texto : string){
    const fecha = new Date();
    const mensaje = {"usuario":usuario, "hora":fecha, "texto":texto };

    this.db.collection('mensajes').add(mensaje).catch(e => console.log("error al cargar en la base"));
  }

  GetMensajes(){
    return this.db.collection('mensajes').valueChanges();
  }
  
}
