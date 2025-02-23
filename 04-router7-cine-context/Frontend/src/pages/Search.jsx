import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import MovieCard from '../components/MovieCard'
import SearchBox from '../components/SearchBox'
import LoadingSpinner from '../components/LoadingSpinner'
import { searchMovies } from '../services/tmdb'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  
  const { data, loading, error } = useFetch(
    () => searchMovies(searchQuery, page),
    [searchQuery, page]
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(1) 
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBox onSearch={handleSearch} />
      
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {data?.results?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Paginación */}
      {data?.total_pages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Anterior
          </button>
          <span className="py-2">Página {page} de {data.total_pages}</span>
          <button 
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === data.total_pages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export default Search