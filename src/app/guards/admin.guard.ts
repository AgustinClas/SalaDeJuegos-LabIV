import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from '../servicios/auth-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService:AuthFirebaseService, private ruteo:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.usuario === 'admin@acgames.com') return true
      if(this.authService.usuario != '' && this.authService.usuario != undefined) return false
      this.ruteo.navigate(["/login"])

      return false;
  }
  
}
