import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="p-6 my-12 widescreen:section-min-height tallscreen:section-min-height pt-6 sm:pt-48"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-20 text-white">
        About
      </h2>
      <p className="text-xl sm:text-2xl mb-6 max-w-3xl m-auto">
        The name <span className="text-ACMERed">Acme</span> comes from the Greek
        &#40;ἀκμή, English transliteration: akmē &#41;, meaning summit, highest
        point, extremity or peak.
      </p>
      <p className="text-xl sm:text-2xl mb-6 max-w-3xl  m-auto">
        <span className="text-ACMERed">Acme Rocket-Powered Products, Inc.</span>
        is based in Fairfield, New Jersey. ACME is a conglomerate which produces
        every product type imaginable, no matter how elaborate or extravagant.
      </p>
      <p className="text-xl sm:text-2xl max-w-3xl  m-auto">
        Acme delivery service is second to none; you can merely drop an order
        into a mailbox or enter an order on a website and have the product in
        your hands within seconds.
      </p>
    </section>
  );
};

export default About;
