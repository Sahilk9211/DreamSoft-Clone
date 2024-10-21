import React from 'react';
import '../Component/style.css';
import person1 from '../assets/Images/person1.jpg';
import person2 from '../assets/Images/person2.jpg';
import person3 from '../assets/Images/person3.jpg';
import person4 from '../assets/Images/person4.jpg';



const Section4 = () => {
    return (
        // Team members Section
        <div className='container mx-auto bg-white '>
            <div className='container mx-auto  text-center '>
                <h1 className='text-4xl md:text-5xl font-medium'>Meet The Team</h1>
            </div>

            <div className='container mx-auto flex flex-wrap gap-10 justify-center mt-20'>

                <div id='grayImage' className='mx-2 lg:mx-0 relative w-[vw] md:w-[30vw] lg:w-[20vw] group'>
                    <img src={person1} alt="Image1" className='w-full h-auto object-cover' />
                    <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-10 '>
                        <h1 className='text-xl font-semibold mt-2 group-hover:translate-x-5 duration-300 '>Rayn</h1>
                        <h2 className='text-sm font-medium text-gray-300 group-hover:translate-x-5 duration-300'>Director of Production</h2>
                    </div>
                </div>

                <div id='grayImage' className='mx-2  lg:mx-0 relative w-[vw] md:w-[30vw] lg:w-[20vw] group'>
                    <img src={person2} alt="Image1" className='w-full h-auto object-cover' />
                    <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-10 '>
                        <h1 className='text-xl font-semibold mt-2 group-hover:translate-x-5 duration-300 '>Rayn</h1>
                        <h2 className='text-sm font-medium text-gray-300 group-hover:translate-x-5 duration-300'>Director of Production</h2>
                    </div>
                </div>

                <div id='grayImage' className='mx-2  lg:mx-0 relative w-[vw] md:w-[30vw] lg:w-[20vw] group'>
                    <img src={person3} alt="Image1" className='w-full h-auto object-cover' />
                    <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-10 '>
                        <h1 className='text-xl font-semibold mt-2 group-hover:translate-x-5 duration-300 '>Rayn</h1>
                        <h2 className='text-sm font-medium text-gray-300 group-hover:translate-x-5 duration-300'>Director of Production</h2>
                    </div>
                </div>

                <div id='grayImage' className='mx-2  lg:mx-0 relative w-[vw] md:w-[30vw] lg:w-[20vw] group'>
                    <img src={person4} alt="Image1" className='w-full h-auto object-cover' />
                    <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 z-10 '>
                        <h1 className='text-xl font-semibold mt-2 group-hover:translate-x-5 duration-300 '>Rayn</h1>
                        <h2 className='text-sm font-medium text-gray-300 group-hover:translate-x-5 duration-300'>Director of Production</h2>
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default Section4