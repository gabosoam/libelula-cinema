import { useState, useEffect, useRef, useContext } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { searchMoviesFetch } from '@/lib/tmdb';
import { MovieContext } from '../context/movieContext/MovieContext';
import Link from 'next/link';

const SearchResult = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className="flex items-center p-2 border-b border-gray-700">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="h-16 w-10 mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-300">{movie.title}</h3>
        <p className="text-sm text-gray-400">{new Date(movie.release_date).getFullYear()}</p>
      </div>
    </Link>
  );
};

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchBoxRef = useRef(null);


  const { fetchMovies } = useContext(MovieContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChange = async (event) => {
    const text = event.target.value;
    setSearchText(text);
    try {
      const movies = await searchMoviesFetch(`/search/movie?query=${text}&page=${1}&include_adult=false`);
      setSearchResults(movies);
    } catch (error) {
      console.error('Error al buscar películas:', error.message);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      if(searchText.length>0){
        fetchMovies(`Resultados de la búsqueda para: ${searchText}`, `/search/movie?query=${searchText}&page=${1}&include_adult=false`)
      }else{
        fetchMovies('Películas favoritas de la audiencia', '/movie/popular')
      }
   
      setSearchResults([]);
    }
  };

  return (
    <div ref={searchBoxRef} className="relative flex flex-col">
      <input
        type="text"
        placeholder="Buscar películas"
        className="bg-gray-800 text-white rounded-md py-2 px-4 pl-10 focus:outline-none focus:bg-gray-700"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {searchResults.length > 0 && (
        <div className="absolute left-0 right-0 top-10 mt-1 bg-gray-800 shadow-md rounded-b-md">
          {searchResults.map(movie => (
            <SearchResult key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default SearchBox;
