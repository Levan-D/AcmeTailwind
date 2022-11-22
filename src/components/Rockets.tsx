/** @format */

import React from "react"
import rocketMan from "../assets/rocketman.png"
import rocketLaunch from "../assets/rocketlaunch.png"
import rocketride from "../assets/rocketride.png"

const Rockets = () => {
  const rocketsData = [
    {
      title: "Explorer",
      desc: "Affordable Exploration",
      img: rocketMan,
    },
    {
      title: "Adventurer",
      desc: "Best Selling Rocketz!",
      img: rocketride,
    },
    {
      title: "Infinity",
      desc: "Luxury Starship",
      img: rocketLaunch,
    },
  ]
  return (
    <section
      id="rockets"
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height pt-6 sm:pt-48"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Our <span className="text-ACMERed">Rockets</span>
      </h2>
      <ul className="list-none mx-auto my-12 flex text-blue-300 flex-col sm:flex-row items-center gap-8 sm:pt-20">
        {rocketsData.map(rocket => (
          <li className=" group  flex flex-col items-center rounded-3xl px-2 border-2 border-white w-2/3 sm:w-5/6 py-6 transform transition duration-500 hover:scale-110">
            <img
              className="w-1/2 pt-3 group-hover:animate-rotateY"
              src={rocket.img}
              alt=""
            />
            <h3 className="text-3xl text-center   font-bold pt-3">{rocket.title}</h3>
            <p className="text-xl text-center text-ACMEWhite pt-3">{rocket.desc}</p>

            <a
              className="bg-blue-400 hover:bg-blue-600 active:bg-blue-700 text-white px-3 py-2 font-bold mt-4 rounded-xl border border-solid border-slate-900 dark:border-none w-4/5   text-center"
              href="#contact"
            >
              Order Now
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Rockets
