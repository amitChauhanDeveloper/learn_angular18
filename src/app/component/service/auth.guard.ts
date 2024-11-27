import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const userRegisterData = localStorage.getItem('userRegisterData');

  if (token != null) {
    return true;
  } else if (userRegisterData != null) {
    return true;
  } else {
    router.navigateByUrl('');
  }
  return false;
};
