import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  return (
    <nav className=" bg-ACMERed  p-2  sm:scroll-smooth">
      <div className="flex justify-between max-w-4xl m-auto items-center">
        <div className=" sm:m-0  m-auto">
          <a href="#hero">
            <img className="h-10" src={logo} alt="logo" />
          </a>
        </div>
        <div className=" items-center hidden sm:flex">
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2">
            <a href="#rockets">Rockets</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2">
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2">
            <a href="#about">About</a>
          </div>
          <div className="mr-6 font-semibold cursor-pointer text-ACMEWhite hover:text-white hover:border-b-2">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div
          onClick={() => setMenuVisibility((x) => !x)}
          className="px-3  sm:hidden   block absolute  right-2 text-ACMEWhite cursor-pointer hover:text-white"
        >
          {menuVisibility ? <>&#10005;</> : <>&#9776;</>}
        </div>
      </div>
      {menuVisibility && (
        <div className=" text-center ">
          <div className="m-5 font-semibold text-ACMEWhite">
            <a href="#rockets">Rockets</a>
          </div>
          <div className="m-5 font-semibold text-ACMEWhite">
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="m-5 font-semibold text-ACMEWhite">
            <a href="#about">About</a>
          </div>
          <div className="m-5 font-semibold text-ACMEWhite">
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
