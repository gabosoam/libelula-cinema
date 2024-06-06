'use client'
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
    fetchMovies("Audience's favorite movie", '/movie/popular')
  }, []);

  const fetchMovies = async (title: string, query: string) => {
    setLoading(true);

    try {
        const response = await searchMoviesFetch(query);
     
        setMovies(response);
        setLoading(false);
        setTitle(title)
    } catch (err: any) {
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