import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Hero, Navbar } from "./components";
import { About, Projects, Skills, Contact, Fof, Shutter, Call } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <div className="grid place-items-center h-[100vh]">
        <AnimatePresence wait>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Hero />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/shutterbug" element={<Shutter />}></Route>
            <Route path="/call" element={<Call />}></Route>
            <Route path="/*" element={<Fof />}></Route>
          </Routes>
        </AnimatePresence>

        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;
