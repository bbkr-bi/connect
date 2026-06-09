import { Routes } from '@angular/router';

export default [{ path: '', loadComponent: () => import('./footer').then(m => m.Footer) }] as Routes;