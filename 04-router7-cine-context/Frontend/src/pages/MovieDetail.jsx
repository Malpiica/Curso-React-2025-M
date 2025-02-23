import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";
import { getImageUrl, getMovieDetails } from "../services/tmdb";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

  if (loading) return <PacmanLoader color="#3a6bca" />;
  
  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-red-600">
          {typeof error === 'string' ? error : 'Error al cargar la película'}
        </p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center p-10">
        <p>No se encontró la película</p>
      </div>
    );
  }

  return (
    <article className="max-w-6xl mx-auto p-4">
      {/* Header con imagen de fondo */}
      <header className="relative h-96 mb-8">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={getImageUrl(movie?.backdrop_path, "original")}
          alt={movie?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 text-white p-6">
            <h1 className="text-4xl font-bold mb-2">{movie?.title}</h1>
            <div className="flex items-center gap-4 mb-2">
              <p>{movie?.release_date?.split("-")[0]}</p>
              <p>{movie?.runtime} min</p>
              <p className="flex items-center">{movie?.vote_average?.toFixed(1)} ⭐</p>
            </div>
            <div className="flex gap-2">
              {movie?.genres?.map(genre => (
                <span key={genre.id} className="bg-blue-500 px-2 py-1 rounded text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="grid md:grid-cols-[300px,1fr] gap-8">
        
        <aside>

          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              ❤️ Agregar a favoritos
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
              ✍️ Escribir reseña
            </button>
          </div>
        </aside>

        {/* Detalles y sinopsis */}
        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sinopsis</h2>
            <p className="text-gray-700">{movie?.overview}</p>
          </section>

          {movie?.videos?.results && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Trailer</h2>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}`}
                  title="Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}
        </main>
      </div>
    </article>
  );
};

export default MovieDetail;
