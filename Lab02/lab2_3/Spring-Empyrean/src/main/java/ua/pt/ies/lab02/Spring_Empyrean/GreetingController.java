package ua.pt.ies.lab02.Spring_Empyrean;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public JSON greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new JSON(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/potatoe")
    public JSON potatoe(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new JSON(counter.incrementAndGet(), String.format(template, name));
    }


}