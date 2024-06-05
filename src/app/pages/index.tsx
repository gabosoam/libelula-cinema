'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";
import MenuProvider from "../context/menuContext/MenuProvider";
import MovieProvider from "../context/movieContext/MovieProvider";
import MovieList from "../components/MovieList";



export default function Home() {



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


