import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/api'; // Base URL for your API

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Signup method to send user data to the backend
  signup(credentials: { email: string, password: string, confirmPassword: string }): Observable<any> {
    return this.http.post('http://localhost:8080/api/users', credentials);
  }

 
  login(credentials: { email: string, password: string }): Observable<string> {
    // The response is expected to be plain text (e.g., "Login successful")
    return this.http.post('http://localhost:8080/api/login', credentials, { responseType: 'text' });
  }
  
}

