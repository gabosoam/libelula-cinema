import React, { useState, useEffect } from 'react';
import { MovieContext } from "./MovieContext";
import { getPopularMoviesFetch, searchMoviesFetch } from '@/lib/tmdb';

interface Movie {
  id: number;
  title: string;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: Error | null;
}

const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [title, setTitle] = useState('');
  

  useEffect(() => {
    console.log('aleluya2')
    // Aquí puedes hacer la petición a la API para obtener las películas
    // y actualizar los estados de movies, loading y error
    fetchMovies('Películas favoritas de la audiencia', '/movie/popular')
  }, []);

  const fetchMovies = async (title, query) => {
    setLoading(true);

    try {
        // Aquí deberías reemplazar con tu llamada a la API real
        const response = await searchMoviesFetch(query);
     
        setMovies(response);
        setLoading(false);
        setTitle(title)
    } catch (err) {
        setError(err.message);
        setLoading(false);
    }
};

  return (
    <MovieContext.Provider value={{ movies, loading, error, title, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;