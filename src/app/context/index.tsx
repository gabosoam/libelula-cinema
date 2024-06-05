// /pages/index.tsx
'use client'
import Image from "next/image";
import Navbar from "../components/Navbar";
import MainContainer from "../containers/MainContainer";

import MovieList from "../components/MovieList";
import MovieProvider from "../context/movieContext/MovieProvider";
import MenuProvider from "../context/menuContext/MenuProvider";

export default function Home() {
  return (
    <MenuProvider>
      <MovieProvider>
        <main>
          <MainContainer>
            <MovieList />
          </MainContainer>
        </main>
      </MovieProvider>
    </MenuProvider>
  );
}
