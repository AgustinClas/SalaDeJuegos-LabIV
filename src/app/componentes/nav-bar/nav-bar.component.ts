
import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/servicios/auth-firebase.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario = this.obtenerUsuarioLogueado();

  constructor(public authService:AuthFirebaseService) { 
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
    this.authService.deauthenticate();
    
  }

  obtenerUsuarioLogueado(){
    const user = this.authService.obtenerUsuarioLogueado()
    console.log(user);
  
  }


}
