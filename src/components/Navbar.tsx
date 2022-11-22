/** @format */

import React, { useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false)
  return (
    <nav className=" bg-ACMERed  p-2  sm:scroll-smooth fixed w-full z-50">
      <div className="flex justify-between max-w-4xl m-auto items-center">
        <div className=" sm:m-0  m-auto">
          <a href="#hero">
            <img className="h-10" src={logo} alt="logo" />
          </a>
        </div>
        <div className=" items-center hidden sm:flex">
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2 border-b-2 border-transparent hover:border-inherit pt-1 ">
            <a href="#rockets">Rockets</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2 border-b-2 border-transparent hover:border-inherit pt-1">
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2 border-b-2 border-transparent hover:border-inherit pt-1">
            <a href="#about">About</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2 border-b-2 border-transparent hover:border-inherit pt-1">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="px-3  sm:hidden   block absolute  right-2 text-ACMEWhite cursor-pointer hover:text-white">
          <button
            onClick={() => {
              setMenuVisibility(x => !x)
            }}
            className={` ${
              menuVisibility ? `open` : `false`
            }  block hamburger md:hidden focus:outline-none `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {menuVisibility && (
        <div className={` text-center origin-top animate-open-menu `}>
          <div
            onClick={() => setMenuVisibility(x => !x)}
            className="m-5 font-semibold text-ACMEWhite"
          >
            <a href="#rockets">Rockets</a>
          </div>
          <div
            onClick={() => setMenuVisibility(x => !x)}
            className="m-5 font-semibold text-ACMEWhite"
          >
            <a href="#testimonials">Testimonials</a>
          </div>
          <div
            onClick={() => setMenuVisibility(x => !x)}
            className="m-5 font-semibold text-ACMEWhite"
          >
            <a href="#about">About</a>
          </div>
          <div
            onClick={() => setMenuVisibility(x => !x)}
            className="m-5 font-semibold text-ACMEWhite"
          >
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
