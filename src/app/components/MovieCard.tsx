import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900 shadow-md rounded-md overflow-hidden p-4 mb-4">
      <div className="w-full md:w-1/4 h-96 md:h-full flex justify-center items-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={375}
          className="rounded-md"
        />
      </div>
      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">{movie.title}</h2>
        <p className={`text-lg text-gray-400 mb-4 ${isMobile() ? 'truncate' : ''}`}>
          {movie.overview}
        </p>
        <ul className="list-none mb-4 space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-lg font-bold text-white">Fecha de lanzamiento:</span>
            <span className="text-lg text-gray-400">{movie.release_date}</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-lg font-bold text-white">Votación:</span>
            <span className="text-lg text-gray-400">
              {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votos)
            </span>
          </li>
        </ul>
        <Link href={`/movie/${movie.id}`} legacyBehavior>
          <a className="inline-block bg-gray-800 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
            Ver Detalles
          </a>
        </Link>
      </div>
    </div>
  );
};

const isMobile = () => {
  const screenWidth = window.innerWidth;
  return screenWidth < 640;
};

export default MovieCard;
