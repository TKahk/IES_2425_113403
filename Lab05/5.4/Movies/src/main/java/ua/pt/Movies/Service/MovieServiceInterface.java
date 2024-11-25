package ua.pt.Movies.Service;
import ua.pt.Movies.Entities.Movie;

import java.util.List;

public interface MovieServiceInterface {
    List<Movie> getMovies();

    Movie getMovie(Long movieId);

    Movie postMovie(Movie movie);

    void deleteMovie(Long movieId);
}