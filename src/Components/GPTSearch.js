import React from 'react'
import GptSearchBar from './GptSearchBar '
import GptMovieSuggestions from './GptMovieSuggestions '
import { BgImg } from '../Utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-auto bg-opacity-80 bg-gradient-to-b from-black"
          src={BgImg}
          alt="BgImg"
        />
      </div>
      <div className='pt-[40%] md:p-0'>
      <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GPTSearch