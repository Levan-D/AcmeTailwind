import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ACMERed">
      <section className="max-w-4xl mx-auto p-8 flex flex-col sm:flex-row sm:justify-between mt-16">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          <div>
            555 Astro Way<br></br>
            Fairfield, New Jersey 12345-5555<br></br>
            Email:
            <a href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </a>
            <br></br>
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </div>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:text-ACMEWhite">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:text-ACMEWhite">
            Testimonials
          </a>
          <a href="#about" className="hover:text-ACMEWhite">
            About Us
          </a>
          <a href="#contact" className="hover:text-ACMEWhite">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
