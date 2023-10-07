import React from 'react'
import GptSearchBar from './GptSearchBar '
import GptMovieSuggestions from './GptMovieSuggestions '
import { BgImg } from '../Utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className=" bg-opacity-80 bg-gradient-to-b from-black"
          src={BgImg}
          alt="BgImg"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch