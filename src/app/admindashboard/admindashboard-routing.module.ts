import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';


const routes: Routes = [
  
{
  path:'',
  children:[
  {path:'dashboards',component:DashboardsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }
