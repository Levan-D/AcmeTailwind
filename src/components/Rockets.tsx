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
      desc: "Best Selling Rocket!",
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
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height pt-6 sm:pt-28"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Our <span className="text-ACMERed">Rockets</span>
      </h2>
      <ul className="list-none mx-auto my-12 flex text-blue-300 flex-col sm:flex-row items-center gap-8 sm:pt-20">
        {rocketsData.map(rocket => (
          <li className=" group  flex flex-col items-center rounded-3xl px-2 border-2 border-white w-2/3 sm:w-5/6 py-6 transform transition duration-500 hover:scale-110">
            <img className="w-1/2 pt-3 group-hover:rotate" src={rocket.img} alt="" />
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

{
  /* <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section> */
}
