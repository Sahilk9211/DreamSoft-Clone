import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';
import '../Component/style.css';
import { IoMenu, IoArrowBack } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="px-4 py-2 sticky top-0 z-[999999] bg-white shadow-md">
            <div className="container-fluid  flex items-center md:justify-between h-16 pr-12 "  >
                {/*  menu button */}
                <button
                    className="block md:hidden focus:outline-none mr-2"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <IoArrowBack style={{ fontSize: "30px" }} />
                    ) : (
                        <IoMenu style={{ fontSize: "30px" }} />
                    )}
                </button>

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <img src={logo} className='w-28 md:w-44' alt="logo" />
                </div>

                {/* Links - for large screens */}
                <div className="hidden md:flex  items-center text-md xl:font-medium " id='nav'>
                    <ul className="md:flex  md:items-center gap-4 xl:gap-10 ">

                        <li className="block py-2 md:py-0">
                            <a href="#" className="custom-underline">Home</a>
                        </li>
                        <li className="block py-2 md:py-0">
                            <a href="#" className="custom-underline">About Us</a>
                        </li>
                        <li className="block py-2 md:py-0">
                            <a href="#" className="custom-underline">Gallery</a>
                        </li>
                        <li className="block py-2 md:py-0">
                            <a href="#" className="custom-underline">Pricing</a>
                        </li>
                        <li className="relative group block py-2 md:py-0 ">
                            <a href="#" className="custom-underline">Blog</a>

                            <div className='absolute overflow-hidden bg-white shadow-lg p-6 w-[140px] hidden group-hover:grid grid-cols-3 gap-6 '>
                                <div className="space-y-2 w-[30vw]">
                                    <ul className="space-y-1 tracking-wider">
                                        <li><a href="#" className="text-xs hover:text-[#756AEE]">Classic Blog</a></li>
                                        <li><a href="#" className="text-xs hover:text-[#756AEE]">Grid Blog 1</a></li>
                                        <li><a href="#" className="text-xs hover:text-[#756AEE]">Grid Blog 2</a></li>
                                        <li><a href="#" className="text-xs hover:text-[#756AEE]">Grid Blog 3</a></li>
                                        <li><a href="#" className="text-xs hover:text-[#756AEE]">Grid Post</a></li>
                                        </ul>
                                </div>
                            </div>
                        </li>
                        <li className="block py-2 md:py-0">
                            <a href="#" className="custom-underline">Contact Us</a>
                        </li>

                        {/* Dropdown */}
                        <li className="relative group block py-2 md:py-0">
                            <a href="#" className="custom-underline">Pages</a>
                        </li>

                        <li className="flex gap-3 py-2 md:py-0 ">
                            <button><IoSearchOutline style={{ fontSize: "26px" }} /></button>
                            <button><GoShareAndroid style={{ fontSize: "26px" }} /></button>
                        </li>

                    </ul>
                </div>

            </div>

            {/*menu for mobile */}
            <div
                className={`bg-white absolute  top-14 left-0 w-auto h-screen md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
            >
                <ul className="space-y-4 navbar">
                    <li className="md:hidden">
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                className="border shadow-md shadow-slate-200 block py-3 p-2.5 w-full z-20 text-md font-medium text-gray-900 bg-gray-50 rounded-lg   placeholder-[#756AEE] focus:border-0 focus:outline-none"
                                placeholder="Search..."
                            />
                            <button type="submit" className="absolute top-0 right-0 p-2.5 m-1 text-sm font-medium h-auto bg-white rounded-lg">
                                <svg
                                    className="w-5 h-5 text-[#756AEE]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </li>
                    <li >
                        <div className='flex space-x-4'>
                            <a href="#" ><FaFacebookF className='hover:text-[#756AEE] transition-all' /></a>
                            <a href="#" ><FaTwitter className='hover:text-[#756AEE] transition-all' /></a>
                            <a href="#" ><FaGooglePlusG className='hover:text-[#756AEE] transition-all' /></a>
                            <a href="#" ><FaInstagram className='hover:text-[#756AEE] transition-all' /></a>
                        </div>
                    </li>
                    <hr />
                    <li className='nav-item'>
                        <a href="#" className="  block">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className=" block">About Us</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className=" block">Gallery</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className=" block">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
