import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";


const Header = ({ navMenu, showNavMenu }) => {
  return (
    <header className='w-screen fixed top-0 bg-emerald-600 dark:bg-gray-800 p-4 text-slate-50 z-50 md:flex md:justify-between md:items-center shadow-lg'>
        {/* logo */}
        <h1 id="logo" className="text-2xl w-full flex justify-between md:inline-block md:w-fit">
            <a href="#" className='font-bold'>FindMyCash</a>
            <button id="hamburger-icon" className="md:hidden" onClick={showNavMenu}>
              <FontAwesomeIcon icon={faBarsStaggered} />
            </button>
        </h1>

        <Navbar navMenu={navMenu} />
    </header>
  )
}

export default Header