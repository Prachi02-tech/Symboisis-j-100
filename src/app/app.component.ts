import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ensure both FormsModules are imported
import { RouterLink, RouterLinkActive, RouterOutlet,RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { CustomerModule } from './modules/customer/customer.module';
import { AppRoutingModule } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NzLayoutModule,
    RouterLink,
    RouterLinkActive,
    NzButtonModule,
    NzMenuModule,
    RouterOutlet,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSpinModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is here as well
    FormsModule,
    RouterModule,
    CustomerModule,
    AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car_rental_angular';
}


