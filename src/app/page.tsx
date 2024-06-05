'use client'
import MainContainer from "./containers/MainContainer";

import MovieList from "./components/MovieList";
import MovieProvider from "./context/movieContext/MovieProvider";
import MenuProvider from "./context/menuContext/MenuProvider";

const Home= () =>  {



  return (
    <MenuProvider>
      <MovieProvider>
        <main>
          <MainContainer>

            <MovieList />



          </MainContainer>

        </main>
      </MovieProvider >
    </MenuProvider >
  );
}

export default Home;


