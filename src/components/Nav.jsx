import { ArrowDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleRequestBlog() {
  window.location.href = "mailto:emmanuelakinola255@gmail.com?subject=Hi%20Emmanuel%2C%20I%20want%20a%20blog";
  }

  return (
    <div className="w-full bg-white/90 sticky top-0 z-50">
      <section className="flex flex-wrap justify-between items-center poppins px-4 py-3">
        <Link to="/">
          <h1 className="text-lg md:text-2xl font-bold">EmmanuelAkinola</h1>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        > {menuOpen ? (
          <X className="w-7 h-7 transition-all duration-300"/> 
        ) : (
           <Menu className="w-7 h-7 transition-all duration-300" />
        ) }
          
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-5 text-lg transition-all">
          <a target="_blank" href="https://akinolaemmanuel.netlify.app">
            <li className="hover:underline hover:text-blue-500">Portfolio</li>
          </a>
          <a href="#profile">
            <li className="hover:underline hover:text-blue-500 flex items-center gap-2">
              Social Media Links <ArrowDown className="animate-bounce" />
            </li>
          </a>
        </ul>

        <div className="hidden lg:flex items-center gap-x-3 text-base transition-all">
          <button onClick={handleRequestBlog} className="group font-medium py-1 px-5 border-2 border-black hover:text-white hover:bg-black transition-all duration-300">
            Request a Blog
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col items-start gap-y-2 px-6 py-4 text-lg">
            <a href="https://akinolaemmanuel.netlify.app" onClick={() => setMenuOpen(false)}>
              <li className="hover:underline hover:text-blue-500 py-1">Portfolio</li>
            </a>
            <a href="#profile" onClick={() => setMenuOpen(false)}>
              <li className="hover:underline hover:text-blue-500 flex items-center gap-2 py-1">
                Social Media Links <ArrowDown className="animate-bounce" />
              </li>
            </a>
            <button
              className="group font-medium py-1 px-5 border-2 border-black hover:text-white hover:bg-black transition-all duration-300 mt-2"
              onClick={
                () => {
                setMenuOpen(false)
                handleRequestBlog();
                }
                }
            >
              Request a Blog
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
