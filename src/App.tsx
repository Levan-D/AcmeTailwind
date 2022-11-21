import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <hr className="mx-auto w-1/2" />
        <Rockets />
        <hr className="mx-auto w-1/2" />
        <Testimonials />
        <hr className="mx-auto w-1/2" />
        <About />
        <hr className="mx-auto w-1/2" />
        <Contact />
      </main>
    </div>
  );
}

export default App;
