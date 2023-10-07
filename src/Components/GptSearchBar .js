import React from "react";
import lang from "../Utils/langaugeConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey  = useSelector(store=>store.config.lang)
  // const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="md:w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" p-4 m-4 col-span-9 rounded-lg"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-gray-600 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>{" "}
    </div>
  );
};

export default GptSearchBar;
