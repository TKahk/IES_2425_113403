package ua.pt.Movies.Service;

import ua.pt.Movies.Entities.Quote;

import java.util.List;

public interface QuoteServiceInterface {

    List<Quote> getMovieQuotes(long movieId);

    Quote postQuote(Quote quote);
}
