import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [orgDropdown, setOrgDropdown] = useState(false); // organizer dropdown

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      dispatch(logout()).unwrap();
    } catch (err) {
      console.error("Logout error:", err);
      alert("Error during logout. Please try again.");
      return;
    }

    navigate("/login");
  };

  const isOrganizer = user?.role === "ORGANIZER";
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Eventify
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to="/myregistrations"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  My Registrations
                </Link>

                {/* Organizer Dropdown */}
                {isOrganizer && (
                  <div className="relative">
                    <button
                      onClick={() => setOrgDropdown(!orgDropdown)}
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
                    >
                      Organizer
                      <svg
                        className={`w-4 h-4 transition-transform ${orgDropdown ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {orgDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-20">
                        <Link
                          to="/organizer/dashboard"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/organizer/createevent"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        >
                          Create Event
                        </Link>
                        <Link
                          to="/organizer/manageevent"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                        >
                          Manage Event
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/myregistrations"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                My Registrations
              </Link>

              {isOrganizer && (
                <>
                  <Link
                    to="/organizer/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/organizer/createevent"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Create Event
                  </Link>
                  <Link
                    to="/organizer/manageevent"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Manage Event
                  </Link>
                </>
              )}

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
