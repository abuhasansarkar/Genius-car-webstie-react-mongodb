import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { AuthContest } from "../../Contexts/AuthContexts/AuthProvider";

const Header = () => {
  const {user, userSingOut} = useContext(AuthContest);
  // console.log(user);


  const navbarItem = (
    <>
      <li>
        <Link to='/' className="font-medium hover:bg-white hover:text-red-600">Home</Link>
      </li>
      <li>
        <Link to='/' className="font-medium hover:bg-white hover:text-red-600">About</Link>
      </li>
      <li>
        <Link to='/' className="font-medium hover:bg-white hover:text-red-600">Blog</Link>
      </li>
      <li>
        <Link to='/' className="font-medium hover:bg-white hover:text-red-600">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="lg:w-[80%] mx-auto py-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItem}
            </ul>
          </div>
          <Link to='/'>
               <img className="lg:w-24 w-14" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarItem}</ul>
        </div>
        <div className="navbar-end">
          <button className="hover:text-red-600"><FaCartPlus className="text-4xl p-2"></FaCartPlus></button>
          <button className="hover:text-red-600"><FaSearch className="text-4xl p-2"></FaSearch></button>
          <button><Link className="btn btn-outline text-red-600 hover:bg-red-600">Appointment</Link></button>
          {user?.uid ? <button onClick={userSingOut}><Link className="ml-2 font-bold">SingOut</Link></button> :  
            <Link  to='/login' className="ml-2 font-bold">Login</Link>
           }
        </div>
      </div>
    </div>
  );
};

export default Header;
