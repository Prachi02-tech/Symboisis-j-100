import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SearchcarsComponent } from './components/searchcars/searchcars.component';


const routes: Routes = [
   { path: 'dashboard', component: CustomerDashboardComponent },
   { path:'searchcars',component:SearchcarsComponent},  // Cars section
   { path: 'bookings', component: BookingsComponent }, // Bookings section
   { path: 'logout', component: LogoutComponent },   // Logout section
   
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
