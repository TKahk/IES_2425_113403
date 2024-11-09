package ua.pt.Movies.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.pt.Movies.Entities.Movie;
import ua.pt.Movies.Entities.Quote;
import ua.pt.Movies.Service.MovieServiceImpl;
import ua.pt.Movies.Service.QuoteServiceImpl;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@AllArgsConstructor
public class Controller {

    private final QuoteServiceImpl quoteService;
    private final MovieServiceImpl movieService;

    // Endpoint para obter uma citação aleatória
    @GetMapping("/api/quote")
    public Quote getRandomQuote() {
        return quoteService.getRandomQuote();
    }

    // Endpoint para obter todas as citações
    @GetMapping("/api/quotes")
    public List<Quote> getQuotes() {
        return quoteService.getQuotes();
    }

    // Endpoint para obter citações por movieId
    @GetMapping("/api/quotes/{movieId}")
    public List<Quote> getQuotesByMovie(@PathVariable(name = "movieId") Long movieId) {
        return quoteService.getQuotesByMovie(movieId);
    }

    // Endpoint para obter todos os filmes
    @GetMapping("/api/movies")
    public List<Movie> getMovies() {
        return movieService.getMovies();
    }

    // Endpoint para obter detalhes de um filme pelo movieId
    @GetMapping("/api/movie/{movieId}")
    public Movie getMovie(@PathVariable(name = "movieId") Long movieId) {
        return movieService.getMovie(movieId);
    }

    // Endpoint para criar um filme
    @PostMapping("/api/movie")
    public Movie createMovie(@RequestBody Movie movie) {
        return movieService.postMovie(movie);
    }

    // Endpoint para criar uma citação (agora passando apenas o movieId)
    @PostMapping("/api/quote")
    public Quote createQuote(@RequestBody Quote quote) {
        Quote savedQuote = quoteService.postQuote(quote);
        return savedQuote;
    }

    // Endpoint para excluir um filme pelo movieId
    @DeleteMapping("/api/movie/{movieId}")
    public void deleteMovie(@PathVariable(name = "movieId") Long movieId) {
        movieService.deleteMovie(movieId);
    }

    // Endpoint para excluir uma citação pelo quoteId
    @DeleteMapping("/api/quote/{quoteId}")
    public void deleteQuote(@PathVariable(name = "quoteId") Long quoteId) {
        quoteService.deleteQuote(quoteId);
    }
}
