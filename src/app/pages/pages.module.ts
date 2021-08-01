import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SubheaderComponent } from './subheader/subheader.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CarsComponent } from './cars/cars.component';
import { CarsdetailsComponent } from './carsdetails/carsdetails.component';
import { BooknowComponent } from './booknow/booknow.component';
import { SelectComponent } from './select/select.component';
import { TaxiComponent } from './taxi/taxi.component';
import { InvoiceformComponent } from './invoiceform/invoiceform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubheaderComponent, SubfooterComponent, HomeComponent, PagesComponent, AboutComponent, GalleryComponent, ContactComponent, ServicesComponent, CarsComponent, CarsdetailsComponent, BooknowComponent, SelectComponent, TaxiComponent, InvoiceformComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
})
export class PagesModule { }
