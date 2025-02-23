import { createContext, useContext, useState, useEffect } from 'react'

const ReviewsContext = createContext()

export function useReviews() {
  return useContext(ReviewsContext)
}

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([])

  // Cargar reseñas desde localStorage al iniciar
  useEffect(() => {
    const savedReviews = localStorage.getItem('movieReviews')
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    }
  }, [])

  // Guardar reseñas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('movieReviews', JSON.stringify(reviews))
  }, [reviews])

  const addReview = (movieId, review) => {
    const newReview = {
      id: Date.now(),
      movieId,
      ...review
    }
    setReviews(prevReviews => [...prevReviews, newReview])
    return newReview
  }

  const deleteReview = (reviewId) => {
    setReviews(prevReviews => prevReviews.filter(review => review.id !== reviewId))
  }

  const getMovieReviews = (movieId) => {
    return reviews.filter(review => review.movieId === movieId)
  }

  const value = {
    reviews,
    addReview,
    deleteReview,
    getMovieReviews
  }

  return (
    <ReviewsContext.Provider value={value}>
      {children}
    </ReviewsContext.Provider>
  )
}
