import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatPaginatorModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatSlideToggleModule, MatDatepickerModule, MatProgressSpinnerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatLabel } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatIconModule, MatDividerModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import * as $ from 'jquery';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
 
     
  ],
  imports: [
    FormsModule,
        ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDialogModule,MatIconModule,MatDividerModule,MatListModule,MatToolbarModule,
    MatMenuModule,MatCardModule, MatPaginatorModule,
    CommonModule,
    RouterModule, 
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule, 
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatPaginatorModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [DatePipe],
  exports: [
    MatButtonModule, MatDialogModule, MatIconModule],
    
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
