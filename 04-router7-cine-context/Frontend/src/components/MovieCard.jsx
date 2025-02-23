import { Link } from "react-router-dom";
import { getImageUrl } from "../services/tmdb";
import { useFavorites } from '../hooks/useFavorites';

export default function MovieCard({ movie }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  console.log(movie);
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  return (
    <Link to={`/movie/${movie.id}`} className="bg-sky-800">
      <article className="card transform transition-transform duration-300 hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          

          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1  px-2 rounded">
            ⭐ {rating}
          </div>
          <button 
            onClick={() => toggleFavorite(movie)}
            className="absolute top-2 right-2 p-2"
          >
            {isFavorite(movie.id) ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-red-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                  clipRule="evenodd" 
                />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-400 hover:text-red-500"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            )}
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg line-clamp-2 text-white">{movie.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2" >
            {movie.release_date}
          </p>  
        </div>
      </article>
    </Link>
  );
}
