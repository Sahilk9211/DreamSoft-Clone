import React from 'react';
import '../Component/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 


// Import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

const Section = () => {
    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                // mousewheel={true}
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[70vh] md:h-screen " 
            >
                <SwiperSlide id='img1' className='bg-blue-300 px-5 flex flex-col text-center gap-10 items-center justify-center text-2xl leading-loose'>
                    <h1 className='font-medium text-4xl text-center md:text-5xl lg:text-7xl pt-14'>Mobile App Development</h1>
                    <p className='text-base font-semibold text-gray-700  md:mx-40 lg:mx-72'>Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.</p>
                    <button className='bg-[#756AEE] text-sm font-medium text-white py-4 px-10 hover:bg-black duration-300'>GET IN TOUCH</button>
                </SwiperSlide>


                <SwiperSlide id='img2' className='bg-blue-300 px-5 flex flex-col text-center gap-10 items-center justify-center text-2xl leading-loose'>
                    <h1 className='font-medium text-4xl text-center md:text-5xl lg:text-7xl pt-14'>Experienced Team</h1>
                    <p className='text-base font-semibold text-gray-700  md:mx-40 lg:mx-72 '>We are a team of qualified software developers, aimed at creating unique and powerful tools for your business & everyday life</p>
                    <button className='bg-[#756AEE] text-sm font-medium text-white py-4 px-10 hover:bg-black duration-300'>GET IN TOUCH</button>
                </SwiperSlide>


                <SwiperSlide id='img3' className='bg-blue-300 px-5 flex flex-col text-center gap-10 items-center justify-center text-2xl leading-loose'>
                    <h1 className='font-medium text-4xl text-center md:text-5xl lg:text-7xl pt-14'>Award-Winning Software</h1>
                    <p className='text-base font-semibold text-gray-700  md:mx-40 lg:mx-72'>The software solutions developed by our company have been numerously awarded for usability and innovative features.</p>
                    <button className='bg-[#756AEE] text-sm font-medium text-white py-4 px-10 hover:bg-black duration-300'>GET IN TOUCH</button>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Section;
