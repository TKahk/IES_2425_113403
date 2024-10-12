package ua.pt.ies.lab02.Spring_Empyrean;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final List<Quote> quotes = List.of(
        new Quote(1, "Yo, Adrian!!. - Rocky (1976)"),
        new Quote(2, "Why are you trying so hard to fit in when you were born to stand out? - What A Girl Wants (2003)"),
        new Quote(3, "You have bewitched me, body and soul. - Pride and Prejudice (2005)"),
        new Quote(4, "For Azeroth, for the Alliance! - Warcraft (2016)"),
        new Quote(5, "People walk around, act like they know what hate means. Nah, no one does, until you hate yourself. I mean truly hate yourself. That’s power. - Mr. Robot (2017)")
    );

    private static final List<Show> shows = List.of(
        new Show(1, "Rocky (1976)"),
        new Show(2, "What A Girl Wants (2003)"),
        new Show(3, "Pride and Prejudice (2005)"),
        new Show(4, "Warcraft (2016)"),
        new Show(5, "Mr. Robot (2017)")
    );



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

    @GetMapping("/quote")
    public Quote quote() {
        Random random = new Random();
        return quotes.get(random.nextInt(quotes.size()));
    }

    @GetMapping("/shows")
    public List<Show> getShows() {
        return shows;
    }

    @GetMapping("/quotes")
    public List<Quote> getQuotes(@RequestParam(value = "Show") String show) {
        List<Quote> tmp = new ArrayList<>();
        for(Quote q: quotes){
            if(q.getContent().contains(show)){
                tmp.add(q);
            }
        }
        return tmp;
    }


}