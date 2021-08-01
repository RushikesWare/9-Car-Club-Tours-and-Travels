import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CarsComponent } from './cars/cars.component';
import { CarsdetailsComponent } from './carsdetails/carsdetails.component';
import { BooknowComponent } from './booknow/booknow.component';
import { SelectComponent } from './select/select.component';
import{TaxiComponent} from './taxi/taxi.component';
import{InvoiceformComponent} from './invoiceform/invoiceform.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'subfooter', component: SubfooterComponent },
      { path: 'subheader', component: SubheaderComponent },
      { path: 'about', component: AboutComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'carsdetails', component: CarsdetailsComponent },
      { path: 'select', component: SelectComponent },
      {path:'booknow',component:BooknowComponent},
      {path:'invoice',component:InvoiceformComponent},
      {path:'taxi',component:TaxiComponent}


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
