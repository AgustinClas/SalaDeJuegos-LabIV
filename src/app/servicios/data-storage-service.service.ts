import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {

  constructor(private db : AngularFirestore) { }

  GuardarLog( usuario : string ) {

    const fecha = new Date();
    const log = {"hora":fecha,"usuario":usuario}
    
    this.db.collection('logs').add(log).catch(err => console.log()).catch( e => console.log("error al cargar en la base"));

  }
}
