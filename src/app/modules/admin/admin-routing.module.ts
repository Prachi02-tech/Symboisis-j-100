import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

import { BookingsComponent } from './component/bookings/bookings.component';
import { LogoutComponent } from './component/logout/logout.component';
const routes: Routes = [
 { path: 'admin', component: AdminDashboardComponent },
 { path: 'bookings', component: BookingsComponent }, // Bookings section
 { path: 'logout', component: LogoutComponent },   // Logout section

 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
