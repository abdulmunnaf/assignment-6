import React from 'react';

const Pricing = () => {
    return (
        <div className='md:w-10/12 mx-auto my-20 flex flex-col md:flex-row gap-0 items-center justify-center space-y-5 md:space-y-0 '>
            
                <div className="card w-86 py-9 bg-base-100 shadow-2xl bg-base-200 mx-auto ">
                    <div className="card-body">
                            <h2 className="text-3xl font-bold">Starter</h2>
                        <p>Perfect for getting started</p>
                        <h2 className="text-2xl font-bold">$0/<span className='text-gray-600'>month</span></h2>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-gray-600'>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-gray-600'>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-gray-600'>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-gray-600'>1 project per month</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6 ">
                            <button className="btn bg-linear-to-r w-full from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-86 md:w-96  py-9 md:py-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl text-white shadow-2xl bg-base-200 mx-auto ">
                    <div className="card-body">
                    <h2 className="text-3xl font-bold">Pro</h2>
                    <p>Best for professionals</p>
                    <h2 className="text-2xl font-bold">$29/<span className='text-gray-100'>Month</span></h2>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-100'>Advanced analytics</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6 ">
                        <button className="btn w-full rounded-4xl text-[#912dc0]">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                <div className="card w-86 py-9 bg-base-100 shadow-2xl bg-base-200 mx-auto ">
                    <div className="card-body">
                    <h2 className="text-3xl font-bold">Enterprise</h2>
                    <p>For teams and businesses</p>
                    <h2 className="text-2xl font-bold">$99/<span className='text-gray-600'>Month</span></h2>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-600'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-600'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-600'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-gray-600'>Dedicated support</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6 ">
                            <button className="btn bg-linear-to-r w-full from-[#4F39F6] to-[#9514FA] rounded-4xl text-white">Get Started Free</button>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Pricing;