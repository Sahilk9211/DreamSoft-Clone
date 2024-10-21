import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";
import gallery1 from '../assets/Images/gallery-1.jpg';
import gallery2 from '../assets/Images/gallery-2.jpg';
import gallery3 from '../assets/Images/gallery-3.jpg';
import gallery4 from '../assets/Images/gallery-4.jpg';
import gallery5 from '../assets/Images/gallery-5.jpg';
import gallery6 from '../assets/Images/gallery-6.jpg';
import gallery7 from '../assets/Images/gallery-7.jpg';
import gallery8 from '../assets/Images/gallery-8.jpg';

const Section2 = () => {
    const [isDropOff, setIsDropOn] = useState(false);

    const filterOptions = [
        { name: 'ALL', href: '#', isActive: true },
        { name: 'MOBILE APPS', href: '#', isActive: false },
        { name: 'CUSTOM SOFTWARE', href: '#', isActive: false },
        { name: 'QA & TESTING', href: '#', isActive: false },
        { name: 'UX AND DESIGN', href: '#', isActive: false },
    ];

    const toggleDropdown = () => {
        setIsDropOn(!isDropOff);
    };

    const galleryItems = [
        { imgSrc: gallery1, title: 'FinStep' },
        { imgSrc: gallery2, title: 'Mobile Finance' },
        { imgSrc: gallery3, title: 'Q-Manage' },
        { imgSrc: gallery4, title: 'WhetherCast' },
        { imgSrc: gallery5, title: 'Home Calendar' },
        { imgSrc: gallery6, title: 'Mplanner' },
        { imgSrc: gallery7, title: 'Alice Messenger' },
        { imgSrc: gallery8, title: 'WiseMoney' },
    ];

    return (
        <>
            {/* section2 */}
            <div className='h-full bg-white'>
                <div className='container mx-auto pt-12 text-center flex flex-col justify-center items-center gap-10'>
                    <h1 className='text-4xl md:text-5xl font-medium'>Latest Projects</h1>
                    <p className='font-medium text-gray-600 mx-14 md:mx-28 lg:mx-52'>
                        In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.
                    </p>

                    {/* Filter option for mobile screen */}
                    <div className="relative inline-block lg:hidden">
                        <button
                            onClick={toggleDropdown}
                            className='w-auto text-sm font-medium flex text-black py-3 px-10 hover:text-[#756AEE] hover:scale-95 border-2 border-solid border-black hover:border-[#756AEE] duration-300 items-center justify-center'
                        >
                            FILTER
                            {isDropOff ? (
                                <IoMdArrowDropup className='ml-2 inline-block' />
                            ) : (
                                <IoMdArrowDropdown className='ml-2 inline-block' />
                            )}
                        </button>

                        {/* Dropdown menu */}
                        {isDropOff && (
                            <div className="absolute -translate-x-1/2 left-1/2 mt-2 w-56 mx-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[9999]">
                                <div className="py-1 text-center" role="menu">
                                    {filterOptions.map((option) => (
                                        <a
                                            key={option.name}
                                            href={option.href}
                                            className="block px-4 py-2 text-lg hover:bg-[#756AEE] text-gray-500 font-medium hover:text-white"
                                        >
                                            {option.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Filter option for large screen */}
                    <div className='hidden lg:block cursor-pointer'>
                        <div className='container mx-auto flex flex-row justify-center items-center gap-5'>
                            {filterOptions.map((option, index) => (
                                <a key={index} href={option.href}>
                                    <h1
                                        className={`${option.isActive ? 'text-[#756AEE]' : 'text-gray-400'
                                            } hover:text-[#756AEE] duration-300 font-semibold border-r-2 border-gray-300 px-5`}
                                    >
                                        {option.name}
                                    </h1>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* gallery section */}
                <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10'>
                    {/* Gallery items */}
                    {galleryItems.map((item, index) => (
                        <div key={index} className="relative w-full max-w-xs mx-auto group">
                            {/* Image */}
                            <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />

                            {/* Mobile device */}
                            <div className="absolute lg:hidden inset-0 flex flex-col top-56 items-center bg-white bg-opacity-0">
                                <div className="mb-2 flex items-center gap-3 bg-white py-2 px-8">
                                    <FaSearchPlus style={{ fontSize: "20px" }} />
                                    <h3 className="text-lg font-medium text-[#756AEE]">{item.title}</h3>
                                </div>
                            </div>

                            {/* Hover content - initially hidden, shown on hover */}
                            <div className='hidden lg:block'>
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-100 group-hover:m-5 transition-opacity duration-300">
                                    <div className="mb-2 flex items-center gap-3 bg-white py-2 px-8">
                                        <FaSearchPlus style={{ fontSize: "20px" }} />
                                        <h3 className="text-lg font-medium text-[#756AEE]">{item.title}</h3>
                                    </div>
                                    <div>
                                        <p className="text-center text-gray-700">
                                            We work hard on every app to deliver top-notch features with great UI that you won't find anywhere else.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Section2;
