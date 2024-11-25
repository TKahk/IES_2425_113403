package ua.pt.Movies.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "quotes")
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String quote;

    @Column(nullable = false)
    private Long movieId;

    @ManyToOne 
    @JoinColumn(name = "movieId", insertable = false, updatable = false, referencedColumnName = "id")
    private Movie movie;

    public Movie getMovie() {
        return new Movie(movieId, null, 0, null);
    }

    public void setMovie(Movie movie) {
        this.movieId = movie.getId();
    }
}