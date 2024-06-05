// /components/MovieDetail.tsx
import Image from 'next/image';
import Link from 'next/link';

const MovieDetail = ({ movie }) => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg text-gray-400 mb-4">{movie.overview}</p>
          <div className="space-y-4">
            <div>
              <span className="font-bold">Géneros: </span>
              <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Duración: </span>
              <span>{movie.runtime} minutos</span>
            </div>
            <div>
              <span className="font-bold">Fecha de lanzamiento: </span>
              <span>{movie.release_date}</span>
            </div>
            <div>
              <span className="font-bold">Votación: </span>
              <span>{movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votos)</span>
            </div>
            <div>
              <span className="font-bold">País de origen: </span>
              <span>{movie.production_countries[0].name}</span>
            </div>
            <div>
              <span className="font-bold">Compañías de Producción: </span>
              <span>{movie.production_companies.map(company => company.name).join(', ')}</span>
            </div>
            <div>
              <span className="font-bold">Ingresos: </span>
              <span>${movie.revenue.toLocaleString()}</span>
            </div>
          </div>
          <Link href="/">
            <a className="inline-block mt-8 bg-gray-800 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
              Volver a la lista
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
