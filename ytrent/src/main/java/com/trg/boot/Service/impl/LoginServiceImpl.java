package com.trg.boot.Service.impl;

import org.springframework.stereotype.Service;

import com.trg.boot.UserService.LoginService;
import com.trg.boot.model.Login;
import com.trg.boot.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService {

    private final LoginRepository loginRepository;

    // Constructor-based dependency injection
    public LoginServiceImpl(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @Override
    public Login saveLogin(Login login) {
        // Simply save the login request to the database without password hashing
        return loginRepository.save(login);  // Save the login object directly
    }
}
