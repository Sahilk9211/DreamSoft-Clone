import React from 'react';
import mob1 from '../assets/Images/mob1.png';
import mob2 from '../assets/Images/mob2.png';

const Section5 = () => {
    return (
        // Get more with us section
        <div className='container mx-auto lg:px-10  bg-white py-5  md:gap-0 lg:gap-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>

            {/* Left section (Text) */}
            <div id='box1' className='  text-center md:text-left py-10 flex flex-col justify-center md:p-10 space-y-5   '>
                <h1 className="text-4xl md:text-3xl lg:text-5xl font-semibold lg:font-semibold  mb-4">Get More With Us</h1>

                {/* Numbers Section */}
                <div id='num' className='my-3 flex justify-around md:justify-between text-2xl lg:text-4xl lg:font-semibold w-full mb-4 md:border-b-2 border-gray-300'>
                    <h1 className='lg:border-t-0 border-t-2 md:border-b-0 border-b-2   border-gray-300 text-[#756AEE] '>01</h1>
                    <h1 className='text-gray-600'>02</h1>
                    <h1 className='text-gray-600'>03</h1>
                    <h1 className='text-gray-600'>04</h1>
                </div>
                
                <h2 className="text-md font-semibold  mb-2">FREE APPS</h2>
                <p className=" mb-6 px-2 md:px-0 text-sm font-medium text-gray-600">
                    We regularly upload new free apps to our website, which is fully accessible to our clients and subscribers. You can also find out about free apps in our blog.
                </p>

                {/* Buttons */}
                <div className='w-full flex gap-2 justify-center flex-wrap'>
                    <button id='btn1' className=" text-sm bg-[#756AEE] text-white py-4 px-5 border-2 font-medium hover:bg-white hover:text-black hover:border-2 hover:border-black">
                        GET IN TOUCH
                    </button>
                    <button id='btn1' className="w-3/4 text-sm bg-white border-black border-2 text-black py-5  font-medium hover:bg-white hover:text-[#756AEE] hover:border-2 hover:border-[#756AEE] hover:font-semibold transition">
                        DOWNLOAD PRESENTATION
                    </button>
                </div>
            </div>

            {/* Right section (Images) */}
            <div id='box2' className=' flex flex-wrap justify-center items-center p-4'>
                <img src={mob1} alt="Mobile 1" className="w-[51%] md:w-[50%] object-contain p-4" />
                <img src={mob2} alt="Mobile 2" className="w-[51%] md:w-[50%] object-contain p-4" />
            </div>
        </div>
    );
}

export default Section5;
