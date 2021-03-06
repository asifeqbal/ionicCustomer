import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {CustomerComponent} from './customer/customer.component';
import { AddCustomerComponent } from './add.customer/add.customer.component';
import { ListCustomerComponent } from './list.customer/list.customer.component';
import { EditCustomerComponent } from './edit.customer/edit.customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'list-customer', component:ListCustomerComponent},
  {path: 'add-customer', component:AddCustomerComponent},
  {path: 'edit-customer/:id', component:EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
