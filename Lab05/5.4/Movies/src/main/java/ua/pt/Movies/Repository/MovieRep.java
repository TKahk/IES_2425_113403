package ua.pt.Movies.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.pt.Movies.Entities.Movie;

public interface MovieRep extends JpaRepository<Movie, Long> {
}
