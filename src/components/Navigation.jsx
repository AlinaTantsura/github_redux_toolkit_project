import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-400 text-yellow-400'>
        <h3 className="font-bold">Github search</h3>
        <span>
              <Link to="/" className='mr-5'>Home</Link>
              <Link to="/favorites">Favorites</Link>
        </span>  
    </nav>
  )
}
