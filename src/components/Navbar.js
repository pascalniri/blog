import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <NavLink to='/signin'></NavLink>
        <NavLink to='/signup'></NavLink>

    </div>
  )
}

export default Navbar