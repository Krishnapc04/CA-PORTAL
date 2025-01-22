import React, { useState, useEffect } from "react";
import logo from "../assets/image/Composit_logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../const";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [UserId, setUserId] = useState(null);
  

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("CompositSaData"));
    setIsLoggedIn(false)
    if (Data && Data.message) {
      setIsLoggedIn(true);
      setUserId(Data.user.userData?._id);
    }
    console.log(Data, isLoggedIn)
  }, []);



 const handleLogout = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${BaseUrl}/api/user/logout`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${localStorage.getItem("SaToken")}`
    },
      body: JSON.stringify({userId:UserId, token:localStorage.getItem('Satoken')}),
    });
    const data = await response.json();
    console.log(data)
    if (response.ok){
      setIsLoggedIn(false);
      localStorage.clear();
      console.log("User LoggedOut SAuccessFully")
      navigate('/')
    }
    
  } catch (error) {
    console.log("error : ", error.message)
  }    
  };

  return (
    <nav className="fixed top-0 p-1 left-0 w-full bg-[#95a316ed 2f] bg-#312e2e shadow-xl z-50" style={{backgroundColor:"#312e3e"}} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img
            src={logo} // Add the logo path here
            alt="Composit Logo"
            className="w-20 h-20"
          />
          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to={"/"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-gray-100 hover:text-[#c29a66] font-medium active:text-[#c29a66]"
            >
              About
            </Link>
            
           
            <Link
              to={"/registrations"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              My Registrations
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Contact
            </Link>
            <Link
              to={"/profile"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Profile
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">

           {isLoggedIn ? (
                      <button onClick={handleLogout} className="text-gray-100 hover:text-[#c29a66] font-medium">Logout</button>
           ) : (
             <Link
              to={"/signup"}
              className="text-gray-100 hover:text-[#c29a66] font-medium"
            >
              Register
            </Link>
          )}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#fde4ae] hover:text-[#c29a66] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className=" md:hidden hidden bg-[#4b3926] text-center bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-xl"
      >
        <div className="px-2 pt-2 pb-2 space-y-1">
          <Link
            to={"/"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            About
          </Link>
          <Link
            to={"/events"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Events
          </Link>
          <Link
            to={"/sponsers"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Sponsers
          </Link>
          <Link
            to={"/team"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Team
          </Link>
          <Link
            to={"/contact"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Contact
          </Link>
          <Link
            to={"/profile"}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
          >
            Profile
          </Link>


          
          {isLoggedIn ? (
            <button onClick={handleLogout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]">Logout</button>
           ) : (
             <Link
              to={"/signup"}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:bg-[#806240]"
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
