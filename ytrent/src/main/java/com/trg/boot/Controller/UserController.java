package com.trg.boot.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trg.boot.UserService.UserService;
import com.trg.boot.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200") 
@RequestMapping("/api/users")
public class UserController {
   private UserService userService;
  
 
public UserController(UserService userService) {
	super();
	this.userService = userService;
}
@PostMapping()
public ResponseEntity<User> saveUser(@RequestBody User user) {
   return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
}
}
