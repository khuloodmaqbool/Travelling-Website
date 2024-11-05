import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const list_styles = `px-3 py-2 font-medium`;
  return (
    <nav className="sticky top-2 z-40 lg:px-9 md:px-9 px-3 my-4">
      <div className="bg-white shadow-lg shadow-gray-200 mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 border border-gray-200 md:rounded-full lg:rounded-full mt-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <div className="flex-shrink-0">
              <img
                src="logo.png"
                className="lg:h-7 md:h-6 h-5 lg:ps-1 md:ps-1 ps-3"
                alt="Logo"
              />
            </div>
          </NavLink>

          <div className="flex-1 flex justify-center sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-greenColor text-greenColor"
                        : "text-black hover:text-greenColor"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-greenColor text-greenColor"
                        : "text-black hover:text-greenColor"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/destination"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-greenColor text-greenColor"
                        : "text-black hover:text-greenColor"
                    }`
                  }
                >
                  Destination
                </NavLink>
                <NavLink
                  to="/tour"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-greenColor text-greenColor"
                        : "text-black hover:text-greenColor"
                    }`
                  }
                >
                  Tour
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${list_styles} text-sm ${
                      isActive
                        ? "border-b-2 border-greenColor text-greenColor"
                        : "text-black hover:text-greenColor"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } h-6 w-6 bg-white text-black border-0`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } h-6 w-6 bg-white text-black border-0`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-greenColor text-greenColor"
                  : "text-black hover:text-greenColor"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-greenColor text-greenColor"
                  : "text-black hover:text-greenColor"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-greenColor text-greenColor"
                  : "text-black hover:text-greenColor"
              }`
            }
          >
            Destination
          </NavLink>
          <NavLink
            to="/tour"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-greenColor text-greenColor"
                  : "text-black hover:text-greenColor"
              }`
            }
          >
            Tour
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-base ${list_styles} ${
                isActive
                  ? "border-b-2 border-greenColor text-greenColor"
                  : "text-black hover:text-greenColor"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
