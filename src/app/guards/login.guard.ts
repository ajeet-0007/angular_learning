import {inject} from "@angular/core"
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Router } from "@angular/router";



export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(LoginService)
  return service.isLoggedIn ? true : router.navigate(['/login']);
  
};
