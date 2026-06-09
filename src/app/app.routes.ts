import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
    path: 'home',
    title: "BBKR-BI : Home",
    loadChildren: () => import("./public/home/home.routes")
},
{
    path: 'contact',
    title: "BBKR-BI : Contact",
    loadChildren: () => import("./public/contact/contact.routes")
},
{
    path: 'thanks',
    title: "BBKR-BI : Thanks",
   loadChildren: () => import("./public/thanks/thanks.routes")
},
{ path: '**', redirectTo: 'home' }];
