import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
  const popularMovies = useSelector((store)=>store?.movies?.popularMovies)
  const topRatedMovies = useSelector((store)=>store?.movies?.topRatedMovies)
  const upcomingMovies = useSelector((store)=>store?.movies?.upComngMovies)
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MovieList title ={"Now Playing Movies"} movies={movies}/>
      <MovieList title ={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title ={"Popular Movies"} movies={popularMovies}/>
      <MovieList title ={"Upcomming Movies"} movies={upcomingMovies}/>
      </div>
      {/* {
        MovieList-Popular
          -Moviecards*n
        MovieList-NowPlaying
        MovieList-Trending
        MovieList-Horror

      } */}
      
    </div>
  )
}

export default SecondaryContainer