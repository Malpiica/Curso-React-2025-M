import { useFavorites } from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Mis Películas Favoritas</h2>
      
      {favorites.length === 0 ? (
        <p className="text-gray-500">No tienes películas favoritas aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}