import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Cargar favoritos del localStorage al iniciar
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => fav.id === movie.id);
      
      let newFavorites;
      if (isFavorite) {
        // Remover de favoritos
        newFavorites = prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        // Agregar a favoritos
        newFavorites = [...prevFavorites, movie];
      }

      // Guardar en localStorage
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return { favorites, toggleFavorite, isFavorite };
} 