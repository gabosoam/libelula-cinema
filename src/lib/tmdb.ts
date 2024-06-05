// lib/tmdb.js
const TMDB_TOKEN = process.env.TMDB_TOKEN;

export const getPopularMoviesFetch = async () => {
  console.log('aleluya')
  const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }

  const data = await response.json();
  return data.results;
};



export const searchMoviesFetch = async (query, page = 1, resultsPerPage = 5) => {
  const response = await fetch(`https://api.themoviedb.org/3${query}`, {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to search movies');
  }

  const data = await response.json();
  return data.results.slice(0, resultsPerPage); // Limitar resultados a la cantidad deseada
};


export const searchMoviesFetch3 = async (query, page = 1, resultsPerPage = 5) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&include_adult=false`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
  
    const data = await response.json();
    return data.results.slice(0, resultsPerPage); // Limitar resultados a la cantidad deseada
  };

  export const getMovieDetails = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
  
    const data = await response.json();
    return data;
  };
  
