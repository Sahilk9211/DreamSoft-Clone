import React from 'react';
import logo from '../assets/Images/logo-inverse.png';
import '../Component/style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";

const Section8 = () => {
    return (
        <>
        {/* foooter section */}
            <footer className="bg-gray-900 text-white py-12 px-2 lg:px-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24">

                    {/*  Company Info */}
                    <div className="space-y-4">
                        <img src={logo} alt="" />
                        <p className="text-gray-400 font-semibold text-md">
                            Our company has been developing high-quality and reliable software for corporate needs since 2008. We are renowned professionals of software development.
                        </p>
                        <div className='flex gap-10 py-3 border-b-2 border-gray-700'>
                            <h3 className="text-purple-400 font-semibold w-1/6">ADDRESS</h3>
                            <p className='font-semibold'>4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
                        </div>
                        <div className='flex gap-10 py-3 border-b-2 border-gray-700'>
                            <h3 className="text-purple-400 font-semibold w-1/6">PHONES</h3>
                            <p className='font-semibold'>+1 323-913-4688, +1 323-888-4554</p>
                        </div>
                        <div className='flex gap-10 py-3 border-b-2 border-gray-700'>
                            <h3 className="text-purple-400 font-semibold block w-1/6">EMAILS</h3>
                            <p className='font-semibold'>info@demolink.org, mail@demolink.org</p>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-3">
                            <a href="#" className="text-white bg-gray-800 p-3  rounded-full group"><FaFacebookF style={{ fontSize: "20px" }} className=' group-hover:bg-slate-900 group-hover:rounded ' /></a>
                            
                            <a href="#" className="text-white bg-gray-800 p-3 rounded-full "><FaTwitter style={{fontSize:"20px"}} className='hover:bg-slate-900'/></a>
                            <a href="#" className="text-white bg-gray-800 p-3 rounded-full "><FaInstagram style={{fontSize:"20px"}} className='hover:bg-slate-900'/></a>
                            <a href="#" className="text-white bg-gray-800 p-3 rounded-full "><FaGooglePlusG style={{fontSize:"20px"}} className='hover:bg-slate-900'/></a>
                        </div>
                    </div>

                    {/*Contact Form */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-semibold text-gray-500 ">Questions? Contact Us</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="placeholder-white w-full p-4 rounded bg-gray-800 text-white focus:outline-none" />
                            <input type="email" placeholder="E-mail" className="placeholder-white w-full p-4 rounded bg-gray-800 text-white focus:outline-none" />
                            <textarea placeholder="Message" className="placeholder-white w-full p-4 rounded bg-gray-800 text-white focus:outline-none"></textarea>
                            <button className="bg-[#756AEE] hover:bg-black duration-200 text-white font-semibold py-3 px-4  w-full">SEND MESSAGE</button>
                        </form>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-semibold text-gray-500 ">What We Offer</h3>
                        <ul className="space-y-2">
                            <li className="white py-3 border-b-2 border-gray-700 hover:tracking-widest hover:text-[#756AEE] duration-300 font-semibold text-xl"><a href="#">DB Management</a></li>
                            <li className="white py-3 border-b-2 border-gray-700 hover:tracking-widest hover:text-[#756AEE] duration-300 font-semibold text-xl"><a href="#">IOS/MacOS</a></li>
                            <li className="white py-3 border-b-2 border-gray-700 hover:tracking-widest hover:text-[#756AEE] duration-300 font-semibold text-xl"><a href="#">Android Apps</a></li>
                            <li className="white py-3 border-b-2 border-gray-700 hover:tracking-widest hover:text-[#756AEE] duration-300 font-semibold text-xl"><a href="#">Windows Apps</a></li>
                            <li className="white py-3 border-b-2 border-gray-700 hover:tracking-widest hover:text-[#756AEE] duration-300 font-semibold text-xl"><a href="#">UX & UI</a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </footer>
            <div>
                <p className="text-sm text-gray-400 bg-white text-center font-semibold px-7 py-6">&copy; 2024 DreamSoft. All rights reserved. Privacy Policy.</p>
            </div>

        </>
    )
}

export default Section8