import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  imports: [RouterModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
constructor(private router: Router) {}

  navigateToSearchcars() {
    this.router.navigate(['/customer/components/searchcars']);
  }

  navigateToBookings() {
    this.router.navigate(['/customer/bookings']);
  }

  logout() {
    // Perform logout logic here
    this.router.navigate(['/customer/logout']);
  }

}
