import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md sticky top-0">
      <ul className="flex items-center justify-between max-w-7xl mx-auto px-4 text-white">
        <div className="flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300 text-lg font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 text-lg font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 text-lg font-medium">
              Contact
            </Link>
          </li>
        </div>

        <div className="flex space-x-4 ml-2">
          <Fragment>
            <li>
              <Link
                to="/login"
                className="bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-white text-blue-600 hover:bg-gray-200 px-4 py-2 mr-2 rounded-full font-semibold transition-all duration-300 ease-in-out"
              >
                Signup
              </Link>
            </li>
          </Fragment>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
