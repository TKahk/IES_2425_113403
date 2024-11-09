package ua.pt.Movies.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import ua.pt.Movies.Entities.Quote;

public interface QuoteRep extends JpaRepository<Quote, Long> {
}
