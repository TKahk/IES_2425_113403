package ua.pt.Movies.Service;

import ua.pt.Movies.Entities.Movie;
import ua.pt.Movies.Entities.Quote;
import ua.pt.Movies.Repository.QuoteRep;
import ua.pt.Movies.Service.MovieServiceImpl;
import ua.pt.Movies.Service.QuoteServiceImpl;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class KafkaConsumer {

    @Autowired
    private final MovieServiceImpl movieService;
    @Autowired
    private final QuoteServiceImpl quoteService;

    //{"titulo": "The Matrix", "ano": 1999} // Exemplo de mensagem
    @KafkaListener(topics = "movies-topic", groupId = "group_id")
    public void consumeMovie(Movie movie) {
        movieService.postMovie(movie);
        System.out.println("Consumed movie: " + movie);
    }

    @KafkaListener(topics = "quotes-topic", groupId = "group_id")
    public void consumeQuote(Quote quote) {
        quoteService.postQuote(quote);
        System.out.println("Consumed quote: " + quote);
    }
    
}
