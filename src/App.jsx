import "./App.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo / Brand */}
              <div className="flex-shrink-0 text-2xl font-bold tracking-wide text-indigo-400">
                MyPortfolio
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/Home"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-200"
                >
                  About
                </Link>
                <Link
                  to="/Education"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-200"
                >
                  Education
                </Link>
                <Link
                  to="/Project"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-200"
                >
                  Project
                </Link>
                <Link
                  to="/Contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 transition duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
