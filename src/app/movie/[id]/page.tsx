'use client'
import React, { useEffect, useState } from 'react';
import MenuProvider from '@/app/context/menuContext/MenuProvider';
import MovieProvider from '@/app/context/movieContext/MovieProvider';
import MainContainer from '@/app/containers/MainContainer';
import { getMovieDetails } from '@/lib/tmdb';
import MovieDetail from '@/app/components/MovieDetail';
import UserProvider from '@/app/context/userContext/UserProvider';
import { notFound } from 'next/navigation';


interface MoviePageProps {
  params: {
    id: string;
  };
}

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState(null)

  

  useEffect(() => {
    getMovie()
  }, [])

  const getMovie = async () => {
    let movieFinded = await getMovieDetails(id);

    if(!movieFinded){
      notFound()
    }

    setMovie(movieFinded)
  }

  return (
    <MenuProvider>
      <MovieProvider>
        <UserProvider>
          <MainContainer>
            <main className="">
              <div className="bg-gray-900 text-white px-3 lg:px-40">

                {movie && <MovieDetail movie={movie} />}

              </div>
            </main>
          </MainContainer>
        </UserProvider>
      </MovieProvider>
    </MenuProvider>
  );
}

export default MoviePage;
