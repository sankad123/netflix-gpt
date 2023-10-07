import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPopularMovies = ()=>{
    //Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPopularMovies(json.results))
  };
  useEffect(()=>{
    getNowPopularMovies();
  },[])
}

export default useNowPopularMovies;