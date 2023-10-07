import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    //Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowTopRatedMovies(json.results))
  };
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;