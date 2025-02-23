package com.trg.boot.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.trg.boot.model.Login;

import org.springframework.web.bind.annotation.PostMapping;

@RestController
@CrossOrigin(origins = "http://localhost:4200")  // Allow requests from this specific origin
public class LoginController {

    // Predefined credentials for simplicity
    private static final String VALID_EMAIL = "user@example.com";
    private static final String VALID_PASSWORD = "password123";

    @PostMapping("/api/login")
    public String login(@RequestBody Login loginRequest) {
    	System.out.println(loginRequest.getEmail());
        // Extract email and password from the request
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check if the provided credentials are valid
        if (VALID_EMAIL.equals(email) && VALID_PASSWORD.equals(password)) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
}


