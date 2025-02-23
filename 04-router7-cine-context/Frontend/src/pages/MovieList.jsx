import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/tmdb';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('popular'); // popular, top_rated, upcoming
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let result;
        switch (filter) {
          case 'popular':
            result = await getPopularMovies();
            break;
          case 'top_rated':
            result = await getTopRatedMovies();
            break;
          case 'upcoming':
            result = await getUpcomingMovies();
            break;
          default:
            result = await getPopularMovies();
        }
        setMovies(result);
      } catch (err) {
        setError('Error al cargar las películas');
      }
    };
    
    fetchMovies();
  }, [filter]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="popular">Populares</option>
          <option value="top_rated">Mejor Valoradas</option>
          <option value="upcoming">Próximos Estrenos</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
