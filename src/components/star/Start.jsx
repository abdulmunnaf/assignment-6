import React from 'react';

const Start = () => {
    return (
        <div className='mt-11 md:mt-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-full md:w-9/12 mx-auto py-10 px-3 md:py-16 flex flex-row items-center justify-around text-white'>
                <div className='text-center'>
                    <h2 className='text-[30px] md:text-[60px] font-semibold'>50K+</h2>
                    <p className='text-gray-200'>Active Users</p>
                </div> <span className='inline-block h-15 md:h-20 w-px bg-white/50'></span>
                <div className='text-center'>
                    <h2 className='text-[30px] md:text-[60px] font-semibold'>200+</h2>
                    <p className='text-gray-200'>Premium Tools</p>
                </div> <span className='inline-block h-15 md:h-20 w-px bg-white/50'></span>
                <div className='text-center'>
                    <h2 className='text-[30px] md:text-[60px] font-semibold'>4.9</h2>
                    <p className='text-gray-200'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Start;