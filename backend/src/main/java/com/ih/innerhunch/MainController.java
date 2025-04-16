
package com.ih.innerhunch;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Spring Boot! test n n";
    }
}

