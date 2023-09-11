import React from 'react'
import { LOGO_URL } from '../Utils/constants'

function Header() {
  return (
    <div>
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 bg-opacity-80'>
            <img  className='w-52' src={LOGO_URL} alt='Logo Url'/>
        </div>
    </div>
  )
}

export default Header