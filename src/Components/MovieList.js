import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  //   const {poster_path} = movies;
  if (movies === null) return;
  return (
    <div className="py-3">
      <h1 className="text-white font-semibold text-3xl p-3  pt-8">{title}</h1>
      <div className="flex no-scrollbar overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard posterpath={movie?.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
