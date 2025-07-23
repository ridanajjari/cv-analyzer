import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav  className='navbar' >

      <Link to="/">
      <p className="text-2x1 font-bold text-gardien"> Resumer</p>
      </Link>
      <Link to="/upload">
      <p className="primary-button w-fit"> upload CV</p>
      </Link>
      
      </nav>
  )
}

export default Navbar