package com.trg.boot.repository;  // Corrected package name

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trg.boot.model.User;  // Ensure this import is correct

@Repository
public interface UserRepository extends JpaRepository<User, Long> {  // Correct entity and primary key type

    // This method is already available by default with JpaRepository, no need to define it explicitly

}
