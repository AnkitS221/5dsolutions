import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard implements CanActivate {
  constructor(public localSrv: LocalStorageService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userDetails = this.localSrv.getUserData();
    if (!userDetails) {
      this.router.navigate(['sign-up']);
      return false;
    } else {
      return true;
    }
  }
}
