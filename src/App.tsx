import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <hr className="mx-auto w-1/2 h-px border-0 dark:bg-ACMEWhite" />
        <Rockets />
        <hr className="mx-auto w-1/2 h-px border-0 dark:bg-ACMEWhite" />
        <Testimonials />
        <hr className="mx-auto w-1/2 h-px border-0 dark:bg-ACMEWhite" />
        <About />
        <hr className="mx-auto w-1/2 h-px border-0 dark:bg-ACMEWhite" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
