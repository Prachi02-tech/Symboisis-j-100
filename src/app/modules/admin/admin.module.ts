import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; // Import the routing module
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component'; // Import the component
import { Router, RouterModule } from '@angular/router';

import { BookingsComponent } from './component/bookings/bookings.component';
import { LogoutComponent } from './component/logout/logout.component';



@NgModule({
  declarations: [], // Declare the component here
  imports: [
    CommonModule,
    AdminRoutingModule ,// Import the routing module for admin

    BookingsComponent,
    LogoutComponent,
    RouterModule
  ]
})
export class AdminModule { 
}