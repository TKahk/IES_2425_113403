package ua.pt.Movies.Service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.pt.Movies.Entities.Movie;
import ua.pt.Movies.Repository.MovieRep;

import java.util.List;

@Service
@AllArgsConstructor
public class MovieService implements MovieServiceInterface {
    private MovieRep movieRepository;

    @Override
    public List<Movie> getMovies() {
        return (List<Movie>) movieRepository.findAll();
    }

    @Override
    public Movie getMovie(Long movieId) {
        return movieRepository.findById(movieId).orElseThrow();
    }

    @Override
    public Movie postMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
