import { Routes } from '@angular/router';

export default [{ path: '', loadComponent: () => import('./header').then(m => m.Header) }] as Routes;