/** @format */

import React from "react";
import rocketMan from "../assets/rocketdab.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 pt-16 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left ">
          We Boldy Go <span className="text-ACMERed"> Where No Rocket </span>
          Has Gone Before...
        </h2>
        <p className="max-w-md text-xl mt-4 text-center sm:text-left text-blue-300">
          We're building rockets for the next century today. From the moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-xl mt-4 text-center sm:text-left text-blue-300">
          Think Acme Rockets.
        </p>
      </article>
      <img className="w-1/2" src={rocketMan} alt="" />
    </section>
  );
};

export default Hero;
