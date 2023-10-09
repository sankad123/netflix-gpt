import React, { useRef } from "react";
import lang from "../Utils/langaugeConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openAI";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  // const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const disptach = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSerachButton = async () => {
    console.log(searchText.current.value);

    //Make an API cal to GPT API to get Movie results.
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 7 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    //Andaz Apna Apna, Hera Pheri, Chupke Chupke, Padosan, Chashme Buddoor, Chalti Ka Naam Gaadi, Namak Halaal
    //gptMoviesList contains the data of GPT results in an Arry format
    const gptMoviesList = gptResults.choices?.[0]?.message?.content.split(",");

    //gptMoviesList = [Andaz Apna Apna, Hera Pheri, Chupke Chupke, Padosan, Chashme Buddoor, Chalti Ka Naam Gaadi, Namak Halaal]

    // For each movie I will search TMDB API

    const promiseArray = gptMoviesList.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    disptach(addGptMovieResult({movieNames:gptMoviesList, movieResults:tmdbResults}));

  
  };



  return (
    <div className="pt-[15%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" p-4 md:m-4 m-2 col-span-9 rounded-lg"
        />
        <button
          onClick={handleSerachButton}
          className="col-span-3 md:m-4 m-2 py-2 px-4 bg-gray-600 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>{" "}
    </div>
  );
};

export default GptSearchBar;
