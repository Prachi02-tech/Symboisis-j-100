import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { BookingsComponent } from './components/bookings/bookings.component';

import { LogoutComponent } from './components/logout/logout.component';
import { SearchcarsComponent } from './components/searchcars/searchcars.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    BookingsComponent,
    SearchcarsComponent,
    LogoutComponent
  ]
})
export class CustomerModule { }
