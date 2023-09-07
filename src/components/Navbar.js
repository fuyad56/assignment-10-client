import React from "react";
import Logo from "../icons/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b-2 shadow-lg">
      <nav className="flex justify-between items-center w-[85%] mx-auto py-6">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-[45%]" />
        </Link>
        <ul className="flex justify-between items-center w-[600px]">
          <li>
            <Link to={"/"} className="text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/orders"} className="text-lg font-semibold">
              Orders
            </Link>
          </li>
          <li>
            <Link to={"/admin"} className="text-lg font-semibold">
              Admin
            </Link>
          </li>
          <li>
            <Link to={"/deals"} className="text-lg font-semibold">
              Deals
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
