import { useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/movieContext/MovieContext";

const MovieList = () => {

    const { movies, loading, error, title } = useContext(MovieContext);


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
            <div className=" lg:p-50">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
