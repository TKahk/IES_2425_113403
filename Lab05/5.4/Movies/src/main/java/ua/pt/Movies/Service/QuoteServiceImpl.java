package ua.pt.Movies.Service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import ua.pt.Movies.Entities.Movie;
import ua.pt.Movies.Entities.Quote;
import ua.pt.Movies.Repository.MovieRep;
import ua.pt.Movies.Repository.QuoteRep;

import java.util.List;
import java.util.Random;

@Service
@AllArgsConstructor
public class QuoteServiceImpl implements QuoteServiceInterface {
  private QuoteRep quoteRepository;
  private MovieRep movieRepository;

  @Override
  public Quote getRandomQuote() {
    Random rand = new Random();
    List<Quote> quotes = quoteRepository.findAll();
    return quotes.get(rand.nextInt(quotes.size()));
  }

  @Override
  public List<Quote> getQuotes() {
    return quoteRepository.findAll();
  }

  @Override
  public Quote getQuoteByMovie(Long movieId) {
    Random rand = new Random();
    List<Quote> quotes = this.getQuotesByMovie(movieId);
    return quotes.get(rand.nextInt(quotes.size()));
  }

  @Override
  public List<Quote> getQuotesByMovie(long movieId) {
    List<Quote> quotes = quoteRepository.findAll();
    quotes.removeIf(quote -> quote.getMovie().getId() != movieId);
    return quotes;
  }

  @Override
  public Quote getQuote(Long quoteId) {
    return quoteRepository.findById(quoteId).orElseThrow();
  }

  @Override
  public Quote postQuote(Quote quote) {
    Movie movie = movieRepository.findById(quote.getMovieId())
    .orElseThrow(() -> new RuntimeException("Movie not found"));
    quote.setMovie(movie); // Atribui o filme carregado
    return quoteRepository.save(quote); // Salva a citação 
  }

  @Override
  public void deleteQuote(Long quoteId) {
    quoteRepository.deleteById(quoteId);
  }
}
