import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/UserService/UserService'; // Import your user service
import { Router } from '@angular/router'; // Router for navigation

@Component({
  selector: 'app-login',
  standalone: true, // Standalone component flag
  imports: [NzFormModule, NzInputModule, NzSpinModule, NzButtonModule, ReactiveFormsModule], // Import necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})    
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Declare the FormGroup for the login form
  isSpinning: boolean = false; // Spinner state to show loading during login
  errorMessage: string = ''; // To display the error message from the backend

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,  // User service for handling login logic
    private router: Router  // Router for navigating to other components/routes
  ) {}

  ngOnInit(): void {
    // Initialize the login form with form controls and validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email validation
      password: ['', Validators.required]  // Password validation (required)
    });
  }

  // On form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      
      this.isSpinning = true;  // Show loading spinner
      this.errorMessage = '';  // Reset error message
  
      // Use the userService to make the login request
      this.userService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login Success:', response);
          this.isSpinning = false;  // Hide spinner after successful login
  
          // Check if the response indicates success
          if (response === 'Login successful') {
            alert('Login successful!');
            
            // Navigate to the admin dashboard after successful login
            this.router.navigate(['/admin']);
          } else {
            alert('Unexpected response from the server.');
          }
        },
        error: (error) => {
          console.error('Login Error:', error);
          this.isSpinning = false;  // Hide spinner if error occurs
  
          // Check the error object for different statuses or messages
          if (error.status === 401) {
            this.errorMessage = 'Invalid email or password.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        }
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill in the form correctly.');
    }
  }
}

