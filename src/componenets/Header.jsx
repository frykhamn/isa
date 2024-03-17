import React, { useState } from 'react'
import hero from "./../assets/hero.png"
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './header.css';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <>
        <div className="w-full" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <nav className="flex justify-end md:justify-center p-6 lg:px-8" aria-label="Global">
            {/* hamburger meny */}
            <div className="flex items-center md:hidden">
              <button
                className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              ><FaBars size={24}/>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
  
            {/* navbar meny */}
            <div className="hidden font-cor md:flex md:gap-x-12">
              <Link to="/" className="link text-md uppercase font-robo font-extralight text-white">Home</Link>
              <Link to="/treatments" className="link text-md uppercase font-robo font-extralight text-white">Treatments</Link>
              <Link to="/workshops" className="link text-md uppercase font-robo text-white">Workshops</Link>
              <Link to="/self-care" className="link text-md uppercase font-robo text-white">Self Care</Link>
              <Link to="/about" className="link text-md uppercase font-robo text-white">About</Link>
            </div>
          </nav>
  
          <div className="relative isolate md:pt-14 sm:px-8 ml-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-20 sm:py-42">
              <h1 className="text-4xl font-cor mb-6">Isabella dos Santos</h1>
              <h2 className="flex flex-col text-6xl text-white font-cor tracking-wider md:text-8xl ">
                <span> Befriend your </span>
                <span className="">nervous system</span>
              </h2>
              <p className="mt-4 font-cor text-xl md:text-2xl leading-8">
                Treatments for all seasons in life
              </p>
            </div>
          </div>
          </div>
      </>
    )
}


