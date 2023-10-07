import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowUpComingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = ()=>{
    //Fetch data from TMDB API and update the store.
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowUpComingMovies(json.results))
  };
  useEffect(()=>{
    getUpComingMovies();
  },[])
}

export default useUpComingMovies;