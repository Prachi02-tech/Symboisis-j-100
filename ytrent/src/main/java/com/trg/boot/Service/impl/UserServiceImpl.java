package com.trg.boot.Service.impl;


import org.springframework.stereotype.Service;

import com.trg.boot.UserService.UserService;
import com.trg.boot.model.User;
import com.trg.boot.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private  UserRepository userRepository;

    
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);  // Use the save method provided by JpaRepository
    }

	@Override
	public void users(User credentials) {
		// TODO Auto-generated method stub
		
	}

    // Other service methods
}

