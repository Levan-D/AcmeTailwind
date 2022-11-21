import React from "react";
import rocketMan from "../assets/rocketman.png";
import rocketLaunch from "../assets/rocketlaunch.png";
import rocketride from "../assets/rocketride.png";

const Rockets = () => {
  return (
    <section
      id="rockets"
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height pt-28"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Our <span className="text-ACMERed">Rockets</span>
      </h2>
      <ul className="list-none mx-auto my-12 flex text-blue-300 flex-col sm:flex-row items-center gap-8">
        <li className="flex flex-col items-center rounded-3xl px-2 border-2 border-white w-2/3 sm:w-5/6 py-6">
          <img className="w-1/2 " src={rocketMan} alt="" />
          <h3 className="text-3xl text-center   font-bold">Explorer</h3>
          <p className="text-xl text-center text-ACMEWhite pt-3">
            Affordable Exploration
          </p>
        </li>
        <li className="flex flex-col items-center text-blue-300 rounded-3xl px-2 border-2 border-white w-2/3 sm:w-5/6 py-6">
          <img className="w-1/2 " src={rocketride} alt="" />
          <h3 className="text-3xl text-center   font-bold">Adventurer</h3>
          <p className="text-xl text-center text-ACMEWhite pt-3">
            Best Selling Rocket!
          </p>
        </li>
        <li className="flex flex-col items-center text-blue-300 rounded-3xl px-2 border-2 border-white w-2/3 sm:w-5/6 py-6">
          <img className="w-1/2 " src={rocketLaunch} alt="" />
          <h3 className="text-3xl text-center   font-bold">Infinity</h3>
          <p className="text-xl text-center text-ACMEWhite pt-3">
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Rockets;
