/** @format */

import React from "react";
import wec from "../assets/wec.jpg";
import marv from "../assets/marv.jpg";
import buzz from "../assets/buzz.jpg";

const Testimonials = () => {
  const testData = [
    {
      name: "Wile E. Coyote, Genious",
      img: wec,
      desc: (
        <>
          Acme has always been there for me. Their Explorer rocket arrived in a
          wooden crate as expected. Life-long customer! A++ shopping experience.
        </>
      ),
    },
    {
      name: "Marvin The Martian & K-9",
      img: marv,
      desc: (
        <>
          The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
          Space Modulator on several occassions.
          <span className="italic">This makes me very, very angry!</span>
          Nevertheless, K-9 and I have awarded Acme the Martian contract for
          space exploration rockets based on Acme's quality and sturdy designs
        </>
      ),
    },
    {
      name: "Buzz Lightyear",
      img: buzz,
      desc: (
        <>
          I knew I not only wanted &#8212;{" "}
          <span className="italic">I needed</span>
          &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered
          in one day! Nothing says{" "}
          <q className="italic">Take me to your leader</q> like Acme's Infinity
          Rocket! 💯
        </>
      ),
    },
  ];
  return (
    <section
      id="testimonials"
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height pt-28"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 pb-8 text-white">
        Testimonials
      </h2>
      {testData.map((test) => (
        <figure className="m2-12 mb-6">
          <div className="w-5/6 mx-auto h-[420px] bg-transparent rounded-3xl relative  cursor-pointer group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div className="absolute backface-hidden border-2 w-full h-full rounded-3xl">
                <img
                  src={test.img}
                  className="w-full h-full rounded-3xl object-cover md:object-fill  "
                />
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-3xl">
                <div className="text-center flex flex-col items-center justify-center h-full bg-slate-800   ">
                  <blockquote className=" pl-14 pr-8 py-12 rounded-3xl relative">
                    <p className="text-base sm:text-3xl text-left mt-2 text-white before:content-['\201C'] before:absolute before:top-2 before:left-0 before:text-9xl   before:text-blue-400  after:text-blue-400 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:absolute after:bottom-8 after:right-4 after:text-9xl after:transform after:translate-x-2 after:translate-y-2">
                      {test.desc}
                    </p>
                    <figcaption className="italic text-sm sm:text-2xl text-right mt-2 text-ACMEWhite pt-12">
                      &#8212; {test.name}
                    </figcaption>
                  </blockquote>
                  <a
                    href="#contact"
                    className="hidden sm:block bg-blue-400 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-6 scale-0 group-hover:scale-125"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </figure>
      ))}
    </section>
  );
};

export default Testimonials;
