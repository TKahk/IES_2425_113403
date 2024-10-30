package ua.pt.Movies.Controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.pt.Movies.Entities.Movie;
import ua.pt.Movies.Entities.Quote;
import ua.pt.Movies.Service.MovieService;
import ua.pt.Movies.Service.QuoteService;

import java.util.List;

@RestController
@AllArgsConstructor
public class Controller {

    private MovieService movieService;
    private QuoteService quoteService;

    @GetMapping("/api/movies")
    public ResponseEntity<List<Movie>> getMovies() {
        List<Movie> movies = movieService.getMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @PostMapping("/api/movie")
    public void addMovie(Movie movie) {
        movieService.postMovie(movie);
    }

    @GetMapping("/api/quotes/{movieId}")
    public List<Quote> getQuotes(int movieId) {
        return quoteService.getMovieQuotes(movieId);
    }

    @PostMapping("/api/quote")
    public void addQuote(Quote quote) {
        quoteService.postQuote(quote);
    }

}
