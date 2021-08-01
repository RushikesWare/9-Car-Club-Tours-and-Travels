import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  // { path: '', pathMatch: "full", redirectTo: 'auth' },
  { path: '', pathMatch: "full", redirectTo: 'pages/home' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(mod=> mod.PagesModule)},


  {
    path: 'layout', component: LayoutComponent,
    children: [
      {path: '', component:DashboardComponent}
      
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
