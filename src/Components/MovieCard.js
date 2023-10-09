import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterpath}) => {
    if (!posterpath) return null;
  return (
    <div className='w-40 p-3 pr-4 hover:shadow-2xl hover:scale-125'>
        <img className='' src={IMG_CDN_URL+ posterpath} alt='Movie Card img ' />
    </div>
  )
}

export default MovieCard