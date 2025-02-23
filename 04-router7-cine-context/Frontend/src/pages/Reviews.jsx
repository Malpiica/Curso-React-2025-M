
import { useFetch } from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import { getTopRatedMovies } from '../services/tmdb';


const Reviews = () => {
  const { data: movies, loading, error } = useFetch(() => getTopRatedMovies(1));

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Reseñas de Películas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies?.results?.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <div className="space-y-4">
              <h3 className="font-medium">Reseñas:</h3>
              {movie.reviews && movie.reviews.map((review) => (
                <div key={review.id} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700">{review.content}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Calificación: {review.rating}/5
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;