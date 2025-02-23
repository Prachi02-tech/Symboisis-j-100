import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './modules/admin/component/admin-dashboard/admin-dashboard.component';


// Define routes
export const routes: Routes = [

  {path:'admin',component:AdminDashboardComponent},//to open dashboard
  { path: 'register', component: SignupComponent },  // Corrected `component` property
  { path: 'login', component: LoginComponent },
  {path: 'customer',component:CustomerDashboardComponent},  // Corrected `component` property
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
   
    path: 'admin', component:AdminDashboardComponent,
     loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 

  },
  {
  
    path: 'customer',component:CustomerDashboardComponent,
    loadChildren: () => import('./modules/customer/customer.module').then((m) => m.CustomerModule),
  },

 

  ];
// AppRoutingModule (if you're using NgModules)
import { NgModule } from '@angular/core';


@NgModule({
  imports: [RouterModule],  // Configure routes using RouterModule
  exports: [RouterModule],  // Export RouterModule to use it in other parts of the app
})
export class AppRoutingModule {}
