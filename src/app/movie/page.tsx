// app/movie/[idMovie].tsx
import React from 'react';
import { useRouter } from 'next/router';
import MenuProvider from '../context/menuContext/MenuProvider';
import MainContainer from '../containers/MainContainer';
import MovieList from '../components/MovieList';
import MovieProvider from '../context/movieContext/MovieProvider';

const MoviePage = () => {


  return (
    <MenuProvider>
      <MovieProvider>
        <main>
          <MainContainer>

        



          </MainContainer>

        </main>
      </MovieProvider >
    </MenuProvider >
  );
}

export default MoviePage;
