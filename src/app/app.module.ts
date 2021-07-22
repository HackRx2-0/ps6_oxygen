import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {Symptoms } from './Symptoms/symptoms.component';
import {AboutUs}from './AboutUs/AboutUs';
import {ContactUs} from './ContactUs/ContactUs';
import {Services} from './Services/Services';
import {Doctor} from './Doctor/Doctor';
import {Hospital} from './Hospital/Hospital';
import {Ambulance} from './Ambulance/Ambulance';
import {Construction} from './Construction/Construction';
import {Link} from './Link/Link';
import {home} from './home/home';
import {admin} from './admin/admin';
const appRoutes: Routes = [
  { path:'Symptoms', component: Symptoms },
  {path:'aboutUs',component: AboutUs  },
  {path:'ContactUs',component:ContactUs},
  {path:'Services',component:Services},
  {path:'Doctor',component:Doctor},
  {path:'Hospital',component:Hospital},
  {path:'Ambulance',component:Ambulance},
  {path:'Construction',component:Construction},
  {path:'Link',component:Link},
  {path:'home',component:home},
  {path:'admin',component:admin},
  {path:'', redirectTo:'/home',pathMatch: 'full'}
];
@NgModule({
  imports:[ BrowserModule, FormsModule,CommonModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent,Symptoms,AboutUs,ContactUs,Services,Doctor,Hospital,Ambulance,Construction,Link,home,admin],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]
})
export class AppModule { }

