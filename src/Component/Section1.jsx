import React from 'react';
import '../Component/style.css';
import tab from '../assets/Images/tab1jpg.jpg';
import { VscCallOutgoing } from "react-icons/vsc";
import { BsHeadset } from "react-icons/bs";
import { CiInboxOut } from "react-icons/ci";

const Section1 = () => {
    return (
        <>
        {/* Service section */}
            <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 p-6 bg-white mt-20">
                
                <div className="flex justify-center items-center ">
                    <img src={tab} alt="" />
                </div>
                
                <div className=" flex gap-5 flex-wrap justify-center items-center">
                    
                    <div id='box1' className=' w-[250px] h-[250px] text-center rounded-md card flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-3xl font-semibold  px-6'>See All Services  </h1>
                        <hr className='w-20 h-0.5 bg-slate-300'/>
                        <button className='bg-[#756AEE] text-sm font-medium text-white py-4 px-10 hover:bg-black duration-300'>All Services</button>
                    </div>

                    <div id='box2' className=' w-[250px] h-[250px] text-center  rounded-md card flex flex-col items-center justify-center gap-5'>
                        <VscCallOutgoing style={{fontSize:"50px"}}/>
                        <h1 className='text-[17px] font-semibold hover:text-[#756AEE] duration-150 '>CORPORATE SOLUTIONS</h1>
                        <hr className='w-20 h-0.5 bg-slate-300' />
                        <p className='font-medium text-sm px-4' >Need specific software for your company? We are ready to develop it!</p>
                    </div>

                    <div id='box3' className=' w-[250px] h-[250px] text-center  rounded-md card flex flex-col items-center justify-center gap-5'>
                        <BsHeadset style={{ fontSize: "50px" }} />
                        <h1 className='text-[17px] font-semibold hover:text-[#756AEE] duration-150 '>CALL CENTER SOLUTIONS</h1>
                        <hr className='w-20 h-0.5 bg-slate-300' />
                        <p className='font-medium text-sm px-4' >Our experts provide custom products of any complexity for call centers.</p>
                    </div>

                    <div id='box4' className=' w-[250px] h-[250px] text-center  rounded-md card flex flex-col items-center justify-center gap-5'>
                        <CiInboxOut style={{ fontSize: "50px" }} />
                        <h1 className='text-[17px] font-semibold hover:text-[#756AEE] duration-150 '>CLOUD DEVELOPMENT</h1>
                        <hr className='w-20 h-0.5 bg-slate-300' />
                        <p className='font-medium text-sm px-4' >We can also offer you reliable cloud development solutions.</p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Section1;
