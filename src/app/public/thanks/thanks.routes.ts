import { Routes } from '@angular/router';

export default [{ path: '', loadComponent: () => import('./thanks').then(m => m.Thanks) }] as Routes;