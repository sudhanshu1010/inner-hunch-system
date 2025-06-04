
package com.ih.innerhunch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ih.innerhunch.model.TestUser;
import com.ih.innerhunch.repository.UserRepository;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/hello")
    public String sayHello() {
        System.out.println("from backend");
        return "Sudhanshu backend test again";
    }

    @GetMapping("/users")
    public List<TestUser> getUsers() {
        return userRepository.findAll();
    }
}

