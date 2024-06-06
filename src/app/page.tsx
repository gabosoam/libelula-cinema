'use client'  
import MainContainer from "./containers/MainContainer";

import MovieList from "./components/MovieList";
import MovieProvider from "./context/movieContext/MovieProvider";
import MenuProvider from "./context/menuContext/MenuProvider";
import UserProvider from "./context/userContext/UserProvider";

const Home= () =>  {



  return (
    <MenuProvider>
      <MovieProvider>
        <UserProvider>
        <main>
          <MainContainer>

            <MovieList />



          </MainContainer>

        </main>
        </UserProvider>
      </MovieProvider >
    </MenuProvider >
  );
}

export default Home;


