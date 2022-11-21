import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-6 my-12">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">
        Testimonials
      </h2>
      <figure className="m2-12 mb-6">
        <blockquote className="bg-slate-800 pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text3xl text-left mt-2 text-white before:content-['\201C'] before:absolute before:top-2 before:left-0 before:text-9xl   before:text-blue-400  after:text-blue-400 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:absolute after:bottom-8 after:right-4 after:text-9xl after:transform after:translate-x-2 after:translate-y-2">
            Acme has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-ACMEWhite pt-12">
            &#8212; Wile E. Coyote, Genious
          </figcaption>
        </blockquote>
      </figure>
      <figure className="m2-12 mb-6">
        <blockquote className="bg-slate-800 pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text3xl text-left mt-2 text-white before:content-['\201C'] before:absolute before:top-2 before:left-0 before:text-9xl   before:text-blue-400 after:text-blue-400 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:absolute after:bottom-8 after:right-4 after:text-9xl after:transform after:translate-x-2 after:translate-y-2">
            The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occassions.
            <span className="italic">This makes me very, very angry!</span>
            Nevertheless, K-9 and I have awarded Acme the Martian contract for
            space exploration rockets based on Acme's quality and sturdy designs
          </p>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-ACMEWhite pt-12">
            &#8212; Marvin The Martian &amp; K-9
          </figcaption>
        </blockquote>
      </figure>
      <figure className="m2-12 mb-6">
        <blockquote className="bg-slate-800 pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text3xl text-left mt-2 text-white before:content-['\201C'] before:absolute before:top-2 before:left-0 before:text-9xl   before:text-blue-400 after:text-blue-400 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:absolute after:bottom-8 after:right-4 after:text-9xl after:transform after:translate-x-2 after:translate-y-2">
            I knew I not only wanted &#8212;{" "}
            <span className="italic">I needed</span> &#8212; Acme's Infinity
            Rocket for my mission in space. Acme delivered in one day! Nothing
            says <q className="italic">Take me to your leader</q> like Acme's
            Infinity Rocket! 💯
          </p>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-ACMEWhite pt-12">
            &#8212; Buzz Lightyear
          </figcaption>
        </blockquote>
      </figure>
    </section>
  );
};

export default Testimonials;
