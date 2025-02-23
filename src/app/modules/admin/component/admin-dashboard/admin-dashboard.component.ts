import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  
  constructor(private router: Router) {}

  navigateToCars() {
    this.router.navigate(['/admin/post-car']);
  }

  navigateToBookings() {
    this.router.navigate(['/admin/bookings']);
  }

  logout() {
    // Perform logout logic here
    this.router.navigate(['/admin/logout']);
  }
}