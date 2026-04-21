import React from 'react';
import bannerImg from '../../assets/banner.png';


const Banner = () => {
    return (
        <div className='md:w-10/12 mx-auto md:h-[80vh] flex flex-col text-center md:text-left md:flex-row items-center md:justify-between md:gap-20 mt-5 md:mt-15'>
            <div>
                <p className='bg-[#E1E7FF] py-2 px-4 text-[#9514FA] w-[294px] rounded-4xl text-center my-3 mx-auto md:mx-0'>New: AI-Powered Tools Available </p>
                <h1 className='font-bold text-3xl md:text-5xl mb-3 '>Supercharge Your Digital Workflow</h1>
                <p className='text-gray-500 text-xs px-2 md:px-0 line-clamp-3 md:text-sm mb-3'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
               <div className='flex gap-2 mx-auto md:mx-0 justify-center md:justify-start'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">Explore Products</button>
                    <button className='btn btn-primary rounded-4xl btn-outline'>Learn More</button>
               </div>
            </div>
           
            <img className=' w-[70%] h-[80%] md:w-[50%] md:h-[90%] shadow-2xl mt-10 md:mt-0  mb-10' src={bannerImg} alt="Banner" />

        </div>
    );
};

export default Banner;