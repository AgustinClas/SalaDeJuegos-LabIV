import { Injectable } from '@angular/core';
import { AngularFirestore, SnapshotOptions} from '@angular/fire/compat/firestore';




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

      var time = new Date();
      var fecha = time.getTime();
      var hora = time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

    const mensaje = {"usuario":usuario, "fecha":fecha, "hora":hora, "texto":texto};

    this.db.collection('mensajes').add(mensaje).catch(e => console.log("error al cargar en la base"));
  }

  GuardarEncuesta(encuesta:any){
    this.db.collection('encuesta').add(encuesta).catch(e => console.log("error al cargar en la base"));
  }

  GuardarJuego(juego:string, jugada:any){
    this.db.collection(juego).add(jugada).catch(e => console.log("error al cargar en la base"));
  }

  GetJuegos(juego:string){

    return this.db.collection(juego, ref => ref.orderBy('resultado', 'desc').limit(5)).valueChanges();

  }

  GetMensajes(){
    return this.db.collection('mensajes', ref => ref.orderBy('fecha', 'asc')).valueChanges();
  }

  async GetEncuestas(){

    return await this.db.collection( "encuesta" ).ref
                .get().then( snapshots => snapshots.docs.map( snapshot => snapshot.data()) )
  }
  
  
    
}
