import React from 'react';
import Instagram from '../../assets/Instagram.png'
import Facebood from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'

const Footer = () => {
    return (
        <div className='border bg-[#101727] text-white md:p-8'>
            <div className='md:w-10/12 p-8 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-5 space-x-4 '>

                <div className='text-center md:text-left w-[350px] space-y-3 '>
                    <h3 className='font-semibold text-2xl'>DigiTools</h3>
                    <p className='text-xs md:text-sm text-gray-300'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className='grid grid-cols-3 text-left gap-18 mt-5 '>
                    <ul className='space-y-2'>
                        <li className='md:text-lg font-semibold'>Product</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Features</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Pricing</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Templates</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Integrations</li>
                    </ul>

                    <ul className='space-y-2'>
                        <li className='text-sm md:text-lg font-semibold'>Company</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>About</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Blog</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Careers</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Press</li>
                    </ul>

                    <ul className='space-y-2'>
                        <li className='text-sm md:text-lg font-semibold'>Resources</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Documentation</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Help Center</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Community</li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'>Contact</li>
                    </ul>
                </div>

                <div className='space-y-2 ml-2 text-right md:text-left'>
                    <p className='text-2xl font-bold '>Social Links</p>
                    <ul className='flex gap-2'>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'><img src={Facebood} alt="Facebook" /></li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'><img src={Twitter} alt="Twitter" /></li>
                        <li className='text-xs cursor-pointer md:text-sm text-gray-300'><img src={Instagram} alt="Instagram" /></li>
                    </ul>
                </div>
            </div>
            <div className="flex w-10/12 mx-auto">
                <div class="divider"></div>
                </div>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 text-center w-10/12 justify-between mx-auto p-4 text-xs text-gray-400">
                <p>&copy; 2026 Digitools. All rights reserved.</p>
                <ul className='flex gap-5 justify-center md:justify-start'>
                    <li className='text-gray-400'>Privacy Policy </li>
                    <li className='text-gray-400'>Terms of Service </li>
                    <li className='text-gray-400'>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;