package ua.pt.Movies.Service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.pt.Movies.Entities.Quote;
import ua.pt.Movies.Repository.QuoteRep;

import java.util.List;

@Service
@AllArgsConstructor
public class QuoteService implements QuoteServiceInterface{

    private QuoteRep quoteRepository;

    @Override
    public List<Quote> getMovieQuotes(long movieId) {
        List<Quote> quotes = (List<Quote>) quoteRepository.findAll();
        quotes.removeIf(quote -> quote.getMovie().getId() != movieId);
        return quotes;
    }

    @Override
    public Quote postQuote(Quote quote) {
        return quoteRepository.save(quote);
    }
}
