import React from 'react';
import '../Component/style.css';
import logo1 from '../assets/Images/logo1.png';
import logo2 from '../assets/Images/logo2.png';
import logo3 from '../assets/Images/logo3.png';
import logo4 from '../assets/Images/logo4.png';

const Section3 = () => {
    return (
        <>
            {/* Experience Section */}
            <div className="container mx-auto flex flex-wrap justify-center items-center gap-20 bg-white md:py-0">
                {/* number */}
                <div className="text-[#756AEE] text-[17rem] font-bold tracking-tighter text-center">
                    10
                </div>

                <div className='tracking-wide w-72'>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 px-5 border-l-4 border-gray-300">
                        Years Of Experience
                    </h2>
                    <p className="text-gray-400 text-md font-medium mb-6 max-w-lg">
                        DreamSoft is a team of highly experienced app designers and developers creating unique software for you.
                    </p>
                    <button className="text-sm bg-[#756AEE] text-white py-4 px-10 font-medium hover:bg-white border hover:text-black hover:border hover:border-black hover:font-light transition">
                        GET IN TOUCH
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 md:mt-0 text-center">
                    <div className='lg:border-r-2 border-gray-200 p-5'>
                        <h3 className="text-8xl font-medium">2<span className='text-7xl'>K</span></h3>
                        <p className="text-gray-400 font-normal tracking-wide">APPS DEVELOPED</p>
                    </div>
                    <div className='lg:border-gray-200 p-5'>
                        <h3 className="text-8xl font-medium">40</h3>
                        <p className="text-gray-400 font-normal tracking-wide">CONSULTANTS</p>
                    </div>
                    <div className='lg:border-t-2 lg:border-r-2 border-gray-200 p-5'>
                        <h3 className="text-8xl font-medium">12</h3>
                        <p className="text-gray-400 font-normal tracking-wide">AWARDS WON</p>
                    </div>
                    <div className='lg:border-t-2 border-gray-200 p-5'>
                        <h3 className="text-8xl font-medium">160</h3>
                        <p className="text-gray-400 font-normal tracking-wide">EMPLOYEES</p>
                    </div>
                </div>
            </div>

            {/* Logos */}
            <div className="container mx-auto my-20 flex flex-wrap  justify-center items-center gap-8">
                {/* Img1*/}
                <div className="border duration-300 hover:border-black inline-block group">
                    <div className="group-hover:scale-90 duration-300 group-hover:border group-hover:border-black">
                        <img src={logo1} className="group-hover:scale-90 duration-300" alt="Logo 1" />
                    </div>
                </div>

                {/* img2 */}
                <div className="border duration-300 hover:border-black inline-block group">
                    <div className="group-hover:scale-90 duration-300 group-hover:border group-hover:border-black">
                        <img src={logo2} className="group-hover:scale-90 duration-300" alt="Logo 2" />
                    </div>
                </div>

                {/* img3 */}
                <div className="border duration-300 hover:border-black inline-block group">
                    <div className="group-hover:scale-90 duration-300 group-hover:border group-hover:border-black">
                        <img src={logo3} className="group-hover:scale-90 duration-300" alt="Logo 3" />
                    </div>
                </div>

                {/* img4 */}
                <div className="border duration-300 hover:border-black inline-block group">
                    <div className="group-hover:scale-90 duration-300 group-hover:border group-hover:border-black">
                        <img src={logo4} className="group-hover:scale-90 duration-300" alt="Logo 4" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section3
