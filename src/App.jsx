import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Hero, Navbar } from "./components";
import { About, Projects, Skills, Contact, Fof, Shutter, Call } from "./pages";
import { AnimatePresence } from "framer-motion";
import Current from "./pages/Current";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(location);
  return (
    <>
      <div className="grid place-items-center h-[100vh]">
        <AnimatePresence wait>
          {pathname !== "/projects/current" && (
            <>
              <div className="absolute top-4 right-4 z-20 sm:hidden">
                {menuOpen && (
                  <a
                    href="/projects/current"
                    className="bg-red-500 rounded-lg p-2 text-[8px] text-white "
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {" "}
                    Look at what I'm working right now
                  </a>
                )}
                {!menuOpen && (
                  <>
                    <div
                      className="w-4 h-4 bg-red-500 rounded-full "
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    ></div>
                    <div
                      className={`w-4 h-4 border -z-20 border-red-500 bg-gradient-to-tr from-red-600 to-red-900 rounded-full absolute top-0 ${
                        menuOpen ? "" : "animate-ping"
                      } `}
                    ></div>
                  </>
                )}
              </div>
              <div className="absolute top-2 right-2 peer sm:block hidden">
                <a href="/projects/current" className="group">
                  <div className="rounded-full border-red-500 border bg-gradient-to-tr from-red-600 to-red-900 w-4 h-4 hover:rounded-sm hover:w-32 sm:hover:h-6 transition-all ease-in duration-100 group grid place-items-center">
                    <div className="group-hover:scale-100 sm:scale-0 text-[8px] duration-200 w-fit mx-auto text-white text-center">
                      Look at what I'm Currently Working on...
                    </div>
                  </div>
                  <div className="absolute w-4 h-4 animate-ping border-red-200/50 border rounded-full top-0 right-0 -z-20 peer-hover:rounded-sm peer-hover:animate-none peer-hover:w-12 transition-all ease-in duration-100"></div>
                </a>
              </div>
            </>
          )}

          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Hero />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/current" element={<Current />}></Route>
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
