import React from 'react'

const Navbar = ({navMenu}) => {
  return (
    <nav className={`${navMenu} md:inline-block`}>
        <ul className="mt-6 md:mt-0 flex flex-col justify-around h-44 md:block md:h-fit"> 
            <li className="md:inline-block mx-3">
                <a href="#" className="text-lg transition-opacity hover:opacity-80">Home</a>
            </li>

            <li className="md:inline-block mx-3">
                <a href="#" className="text-lg transition-opacity hover:opacity-80">Analysis</a>
            </li>

            <li className="md:inline-block mx-3">
                <a href="https://github.com/youssefHassany/find-my-cash" target='_blank' className="text-lg transition-opacity hover:opacity-80">GitHub</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar