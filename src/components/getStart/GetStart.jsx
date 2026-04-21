import React from 'react';
import Image1 from '../../assets/user.png';
import Image2 from '../../assets/package.png';
import Image3 from '../../assets/rocket.png';

const GetStart = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto mt-20 space-y-3 md:mb-40">
            <div className='text-center mb-15'>
                <h2 className='font-bold md:text-4xl text-3xl mb-2'>Get Started in 3 Steps</h2>
                <p className='text-gray-600 text-xs'>Start using premium digital tools in minutes,  not hours.</p>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-between mb-20 space-y-10 md:space-y-0'>
                <div className=' md:w-3/12 py-9 px-3 text-center space-y-3 shadow-2xl'>
                    <div className='flex items-end justify-end m-0 p-0'>
                        <p className='font-bold text-xs w-6 h-6  rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border'>01</p>
                    </div>
                    <img className='w-16 h-16 mx-auto' src={Image1} alt="Create Account" />
                    <h3 className='font-bold text-xl'>Create Account</h3>
                    <p className='text-gray-600 text-xs'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className=' md:w-3/12 py-9 px-3 text-center space-y-3 shadow-2xl'>
                    <div className='flex items-end justify-end m-0 p-0'>
                        <p className='font-bold text-xs w-6 h-6  rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border'>02</p>
                    </div>
                    <img className='w-16 h-16 mx-auto' src={Image2} alt="Choose Products" />
                    <h3 className='font-bold text-xl'>Choose Products</h3>
                    <p className='text-gray-600 text-xs'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className=' md:w-3/12 py-9 px-3 text-center space-y-3 shadow-2xl'>
                    <div className='flex items-end justify-end m-0 p-0'>
                        <p className='font-bold text-xs w-6 h-6  rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border'>03</p>
                    </div>
                    <img className='w-16 h-16 mx-auto' src={Image3} alt="Start Creating" />
                    <h3 className='font-bold text-xl'>Start Creating</h3>
                    <p className='text-gray-600 text-xs'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStart;