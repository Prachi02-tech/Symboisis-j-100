package com.trg.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trg.boot.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {

    // Custom query methods (optional) can be defined here if needed
    // For example, find by email:
    Login findByEmail(String email);
}


	

	


