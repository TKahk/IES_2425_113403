package ua.pt.Movies.Service;

import ua.pt.Movies.Entities.Quote;

import java.util.List;

public interface QuoteServiceInterface {

    public Quote getRandomQuote();

    public List<Quote> getQuotes();

    public Quote getQuoteByMovie(Long movieId);
  
    public List<Quote> getQuotesByMovie(long movieId);
  
    public Quote getQuote(Long quoteId);
  
    public Quote postQuote(Quote quote);

    public void deleteQuote(Long quoteId);
  }
