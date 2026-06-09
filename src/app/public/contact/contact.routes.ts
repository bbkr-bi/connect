import { Routes } from '@angular/router';

export default [{ path: '', loadComponent: () => import('./contact').then(m => m.Contact) }] as Routes;