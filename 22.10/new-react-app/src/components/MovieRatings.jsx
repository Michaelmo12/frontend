import React from 'react';

function MovieRatings() {
  const movies = [
    { title: 'The Shawshank Redemption', rating: 9.3 },
    { title: 'The Dark Knight', rating: 9.0 },
    { title: 'Inception', rating: 8.8 },
    { title: 'Interstellar', rating: 8.6 },
    { title: 'The Matrix', rating: 7.5 },
    { title: 'Avatar', rating: 7.8 }
  ];

  return (
    <div className="movie-ratings">
      <h2>Movie Ratings</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.rating} - {movie.rating > 8 ? 'Highly Recommended' : 'Regular'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieRatings;
