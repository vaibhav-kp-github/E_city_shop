import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { TfiAngleLeft } from "react-icons/tfi";



const Navbar = () => {

    const [visible , setVisible] = useState(false)

  return (
    <div className="z-50 flex items-center justify-between py-5 font-medium text-xl shadow-lg shadow-gray-700 px-4 sm:px-[5vw] md:px-[7vw] lg-[9vw]" >
      <img className="w-14" src={logo} alt="logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/">
          {({ isActive }) => (
            <div className="group flex flex-col items-center gap-0.5">
              <p>Home</p>
              <hr
                className={`${isActive ? "w-full" : "w-0 group-hover:w-full"}   transition-all delay-200 border-none h-[1.5px] bg-gray-700`}
              />
            </div>
          )}
        </NavLink>
        <NavLink to="/collection">
          {({ isActive }) => (
            <div className="group flex flex-col items-center gap-0.5">
              <p>Collection</p>
              <hr
                className={`${isActive ? "w-full" : "w-0 group-hover:wfull"} w-0 group-hover:w-full transition-all delay-200 border-none h-[1.5px] bg-gray-700`}
              />
            </div>
          )}
        </NavLink>

        <NavLink to="about">
          {({ isActive }) => (
            <div className="group flex flex-col items-center gap-0.5">
              <p>About</p>
              <hr
                className={`${isActive ? "w-full" : "w-0 group-hover:wfull"} w-0 group-hover:w-full transition-all delay-200 border-none h-[1.5px] bg-gray-700`}
              />
            </div>
          )}
        </NavLink>
        <NavLink to="contact">
          {({ isActive }) => (
            <div className="group flex flex-col items-center gap-0.5">
              <p>Contact</p>
              <hr
                className={`${isActive ? "w-full" : "w-0 group-hover:wfull"} w-0 group-hover:w-full transition-all delay-200 border-none h-[1.5px] bg-gray-700`}
              />
            </div>
          )}
        </NavLink>
      </ul>

      <div className="flex items-center gap-1">
        <span>
          <CiSearch />
        </span>

        <div className="group relative">
          <CiUser />
          <div className="group-hover:block hidden absolute right-0  pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <IoBagCheckOutline />
          <p className="absolute -right-1 -bottom-1 text-center text-[10px] border-black p-[1.5px] leading-none bg-[#e41b1b] text-white rounded-full aspect-square">
            10
          </p>
        </Link>

        <div className="sm:hidden" onClick={() => setVisible(true)}>
          <CgMenuRight />
        </div>

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? "w-full" : "w-0"} flex flex-col gap-8 text-gray-700 `}
        >
          <p className="flex items-center gap-2 p-2 text-lg" onClick={()=>setVisible(false)}>
            <TfiAngleLeft className="text-sm" />
            Back
          </p>
          <ul className="flex flex-col gap-2">
            <NavLink
              className="border-b p-5 leading-0 cursor-pointer "
              onClick={() => setVisible(false)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="border-b p-5 leading-0 cursor-pointer "
              onClick={() => setVisible(false)}
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              className="border-b p-5 leading-0 cursor-pointer "
              onClick={() => setVisible(false)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="border-b p-5 leading-0 cursor-pointer "
              onClick={() => setVisible(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
