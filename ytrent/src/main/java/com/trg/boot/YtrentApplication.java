package com.trg.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.trg.boot.model") 
@EnableJpaRepositories(basePackages = "com.trg.boot.repository") 
public class YtrentApplication {

	public static void main(String[] args) {
		SpringApplication.run(YtrentApplication.class, args);
	}

}
