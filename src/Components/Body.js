import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function Body() {

    const appstore = createBrowserRouter([
        {
            path : "/",
            element :<Login />
        },
        {
            path : "/browse",
            element :<Browse />
        },
    ])
  return (
    <div>
        <RouterProvider router={appstore}/>
    </div>
  )
}

export default Body