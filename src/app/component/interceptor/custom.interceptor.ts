import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');
  const cloneedRequest = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(cloneedRequest);
};
