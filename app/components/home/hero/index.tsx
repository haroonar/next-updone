'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { heroFilters } from './hero';
import ResponsiveImage from '../../common/responsive-image';

const Hero = () => {
    const [selectedValue, setSelectedValue] = useState('Bartenders');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedText = event.target.options[event.target.selectedIndex].text;
      setSelectedValue(selectedText)
      event.target.value = '0'; // Reset the dropdown to show "Services"
    };
    return (
        <div> 
            <main className="h-screen flex flex-col justify-end items-center">
                <div className="text-center text-[#f5f5f5] md:text-[200px] font-bold uppercase relative top-[10px] 2xl:text-[250px]">Workers</div>
                <Image layout="intrinsic" src="./background.svg" height={100} width={100} alt="Background" className="w-full h-auto" />
                {/* Add your content here */}
                <div className="absolute flex flex-col items-center justify-center text-white text-lg mx-[300px]">
                    <span className="text-black font-900 md:font-extrabold text-[60px] md:text-[80px] 2xl:text-[130px] leading-[80px] md:leading-[120px] 2xl:leading-[188px] ">
                        BOOK <strong className="text-[#350abc]">EVENT</strong>
                    </span>
                    <span className="text-black font-900 md:font-extrabold text-[60px] md:text-[80px] 2xl:text-[110px] mb-[60px] 2xl:mb-[55px]">
                        <strong className="text-[#350abc]">STAFF</strong> IN A SNAP!
                    </span>

                    <div style={{...heroFilters}} className="flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
                        <div style={{width:'15%'}} className=" text-start ml-4">
                            <div className="relative inline-block border-none shadow-none">
                                <select
                                    className="block appearance-none md:w-[90px] 2xl:w-[100px] 2xl:text-[20px] font-[500] md:text-[12px] bg-white pr-4 rounded focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    defaultValue="0"
                                >
                                    <option value="0">Services</option>
                                    <option value="Audi">Waiters</option>
                                    <option value="BMW">Cocktail Servers</option>
                                    <option value="Citroen">Bar Backs</option>
                                    <option value="Ford">Promo Models</option>
                                    <option value="Honda">Event Helper</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                  <Image height={13} width={13} src='/images/hero/box.svg' alt='box'/>
                                </div>
                            </div>
                            <span className='block md:text-[10px] 2xl:text-[15px]  text-[#696969] mr-[30px]'>{selectedValue}</span>
                        </div>
                        <img src="./images/Line 4.png" alt="" />
                        <div style={{width:'25%'}} className=" text-start">
                            <div className="relative inline-flex border-none shadow-none">
                                {/* SVG icon */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                                <Image src='/images/gallery/location.svg' alt='location-svg' width={15} height={15} />
                                </div>

                                {/* Dropdown */}
                                <select
                                    className="font-[500] block appearance-none w-full  md:text-[12px] 2xl:text-[20px] bg-white pl-10 rounded focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    defaultValue="0"
                                >
                                    <option value="0">Location</option>
                                    <option value="Audi">Waiters</option>
                                    <option value="BMW">Cocktail Servers</option>
                                    <option value="Citroen">Bar Backs</option>
                                    <option value="Ford">Promo Models</option>
                                    <option value="Honda">Event Helper</option>
                                </select>
                            </div>
                            <span className='block 2xl:text-[15px] text-start pl-[9px] md:text-[10px] text-[#696969]'>{'Manhattan, New York'}</span>

                        </div>


                        <img src="./images/Line 4.png" alt="" />
                        <div style={{width:'20%'}} className=" text-start">
                            <div className="relative inline-flex border-none shadow-none">
                                {/* SVG icon */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
                                <Image height={13} width={13} src='/images/hero/star.svg' alt='box'/>
                                </div>

                                {/* Dropdown */}
                                <select
                                    className="font-[500] block appearance-none w-full 2xl:text-[20px] 2xl:pr-0 md:text-[12px] bg-white pl-10  rounded focus:outline-none focus:shadow-outline"
                                    onChange={handleChange}
                                    defaultValue="0"
                                >
                                    <option value="0">Day & Time</option>
                                    <option value="Audi">Waiters</option>
                                    <option value="BMW">Cocktail Servers</option>
                                    <option value="Citroen">Bar Backs</option>
                                    <option value="Ford">Promo Models</option>
                                    <option value="Honda">Event Helper</option>
                                </select>
                            </div>
                            <span className='block 2xl:text-[15px] text-start pl-[10px]  md:text-[10px] text-[#696969]'>{'July 24, 2024'}</span>

                        </div>
                        <img src="./images/Line 4.png" alt="" />
                        <div style={{width:'30%'}} className="space-y-1.5">
                            <div className='flex justify-around items-center'>
                                <span className='px-[14px] py-[0px] text-white text-[14px] bg-black rounded-lg font-[400]'>All</span>
                                <div className="flex items-center">
                                <Image height={18} width={120} src='/images/hero/stars.svg' alt='box'/>

                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <span className='relative right-[10px]'> <Image height={13} width={13} src='/images/hero/hero2.svg' alt='box'/></span>
                                <div className="flex items-center space-x-2.5 text-[13.5px] text-[#696969] relative left-[24px]">
                                    <span>02</span>
                                    <span>07</span>
                                    <span>29</span>
                                    <span>59</span>
                                    <span>73</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ResponsiveImage src="/images/hero/hero.png" alt="Hero Image" />
                </div>
            </main>
        </div>
    )
}

export default Hero
