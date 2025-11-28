import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    { name: "Instagram", url: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { name: "Hashnode", url: "https://hashnode.com", icon: "M8.639 21.938c-1.018-.138-2.191-.588-3.054-1.164-1.063-.708-2.076-1.9-2.6-3.088-.839-1.906-.837-4.074.005-5.987.482-1.095 1.341-2.162 2.36-2.916l.423-.316-.012-.55c-.017-.761.119-1.484.425-2.253.317-.795.676-1.331 1.286-1.942 1.016-1.016 2.254-1.545 3.688-1.584.603-.017.793.002 1.381.15.399.102 1.082.37 1.437.571l.272.153.423-.15c.735-.261 1.226-.353 1.938-.353.938 0 1.718.202 2.525.645 1.33.734 2.295 2.021 2.617 3.511.119.539.119 1.5 0 2.038-.097.44-.311 1.004-.545 1.423l-.164.293.164.293c.234.419.448.983.545 1.423.119.538.119 1.499 0 2.038-.322 1.49-1.287 2.777-2.617 3.511-.811.447-1.585.645-2.525.645-.712 0-1.203-.092-1.938-.353l-.423-.15-.272.153c-.355.201-1.038.469-1.437.571-.588.148-.778.167-1.381.15-.382-.011-.821-.04-.973-.068z" },
    { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" }
  ];

  const navItems = [
    { name: '✦ Home', path: '/' },
    { name: '✦ About', path: '/about' },
    { name: '✦ Projects', path: '/projects' },
    { name: '✦ Hire me', path: '/hire' },
    { name: '✦ Blogs', path: '/blogs' },
    { name: '✦ My Journey', path: '/journey' },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  }, []);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className=" sticky top-5 z-50   relative px-10 py-2 flex justify-between items-center bg-[#452829] border border-[#FFE1AF] rounded-lg mx-6  my-6 shadow-md shadow-md hover:shadow-2xl">

        <Link
          to="/"
          className="text-2xl relative  py-1 text-[#FFE1AF] font-medium 
                  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                  after:bg-[#FFE1AF] after:transition-all after:duration-300 after:ease-out
                  hover:after:w-full"
          onClick={closeMenu}
        >

          ✦ WithMilan.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-5">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative px-3 py-2 text-[#FFE1AF] font-medium
                  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                  after:bg-[#FFE1AF] after:transition-all after:duration-300 after:ease-out
                  hover:after:w-full"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-[#FFE1AF] p-2 rounded-md transition-transform duration-300 hover:scale-105"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`h-6 w-6 transform transition-all duration-300 ${isMenuOpen
              ? 'rotate-90'
              : 'rotate-0'
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (Slide-in) */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-5/6 max-w-sm bg-[#FBF3D1] shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#452829]/90">
              <Link
                to="/"
                className="text-2xl font-bold text-[#FFE1AF]"
                onClick={closeMenu}
              >
                See More 😊
              </Link>
              <button
                onClick={closeMenu}
                className="text-gray-300 hover:text-[#FFE1AF] transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 transform transition-transform duration-300 hover:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-2  text-[#FFE1AF]  font-medium text-xl
                    relative after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 
                    after:bg-[#FFE1AF] after:transition-all after:duration-300 after:ease-out
                    hover:after:w-full hover:after:left-0
                    rounded-lg bg-[#452829] hover:bg-[#5a3637] flex align-center"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}

              <div className=" sm:py-2 px-2 sm:px-6 lg:px-8  ">
                <div className="max-w-2xl mx-auto">

                  <h2
                    className="text-2xl sm:text-2xl font-bold text-center 
             text-[#FBF3D1] bg-[#452829] 
             py-2 px-4 
             
             w-fit mx-auto mb-4
             shadow-md transition-all duration-300 hover:scale-110 mt-16"
                  >
                    Connect With Me
                  </h2>
                  <div className="flex justify-center flex-wrap gap-4 sm:gap-4  ">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative "
                      >
                        <div className=" w-8 h-8 sm:w-10 sm:h-10 bg-[#452829] rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-200 text-white">
                          <svg className=" w-4 h-4 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </div>
                        <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-sm font-bold text-[#FBF3D1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap px-1">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center  text-xs text-[#452829]/70 font-bold">
                © {new Date().getFullYear()} MyPortfolio
              </div>
            </div>

          </div>
        </>
      )}
    </>
  );
};

export default Navbar;