import React from 'react'
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <div>
      <div className='bar'>
        <a href=''>Sick Fits</a>
        <Nav />
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  )
}