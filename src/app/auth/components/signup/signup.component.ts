import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary classes
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/UserService/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,  // Standalone component flag
  imports: [NzFormModule, NzInputModule, NzButtonModule, ReactiveFormsModule,CommonModule], // Import necessary modules
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;  // Declare the FormGroup for signup form
  isSubmitting: boolean = false; // Flag to show submission state (spinner or loading)
  errorMessage: string | undefined;
 

  constructor(private fb: FormBuilder,
              private userService: UserService, 
              private router: Router) {}



  ngOnInit(): void {
    // Initialize the signup form group
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email field with validation
      password: ['', [Validators.required, Validators.minLength(6)]],  // Password field with validation
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]], // Confirm Password field
    }, { 
      validator: this.passwordMatchValidator // Custom validator to check if passwords match
    });
  }

  // Custom validator to ensure password and confirmPassword match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true }; // Return error if passwords don't match
    alert('mismatch password');
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      this.isSubmitting = true;
      this.errorMessage = ''; // Reset error message on every submission

      // Send form data to the backend via UserService
      this.userService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Signup Success:', response);
          this.isSubmitting = false;
          alert('Signup successful!');
          this.router.navigate(['/customer']); // Redirect to login page after successful signup
        },
        error: (error) => {
          console.error('Signup Error:', error);
          this.isSubmitting = false;
          this.errorMessage = error.error?.message || 'An unexpected error occurred. Please try again later.';
        }
      });
    } else {
      console.log('Form is invalid');
      this.errorMessage = 'Please fill in the form correctly.';
    }
  }
}

