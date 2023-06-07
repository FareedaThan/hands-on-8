import React from 'react'
import logoCleverse from '../images/logo_cleverse.png'
import Navlink from './Navlink'

const Navbar = () => {
  return (
    <div className="flex justify-evenly gap-40 mt-3">
      <img className="w-32" src={logoCleverse} />
      <Navlink />
    </div>
  )
}

export default Navbar
