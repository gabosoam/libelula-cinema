'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MenuProvider from '@/app/context/menuContext/MenuProvider';
import MovieProvider from '@/app/context/movieContext/MovieProvider';
import MainContainer from '@/app/containers/MainContainer';
import { getMovieDetails } from '@/lib/tmdb';
import MovieDetail from '@/app/components/MovieDetail';
import UserProvider from '@/app/context/userContext/UserProvider';


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
    setMovie(await getMovieDetails(id))
  }


  return (
    <MenuProvider>
      <MovieProvider>
      <UserProvider>
        <main>
          <MainContainer>


            {movie &&
              <MovieDetail movie={movie}  />
            }

          </MainContainer>

        </main>
        </UserProvider>
      </MovieProvider >
    </MenuProvider >
  );
}

export default MoviePage;
