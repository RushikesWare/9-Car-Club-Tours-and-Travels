import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { AdmindashboardComponent } from './admindashboard.component';


@NgModule({
  declarations: [DashboardsComponent, AdmindashboardComponent],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule
  ]
})
export class AdmindashboardModule { }
