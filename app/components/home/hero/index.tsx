'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { heroFilters } from './hero';
import ResponsiveImage from '../../common/responsive-image';
import Loader from '../../ui/loader';
import MenuItem from '../../common/Menu';
import CommonDropdown from '../../common/Menu';


const itemLocationNames: string[] = [`New york USA`, 'Newark New Jersey', 'Newport News Virginia', 'New haven Connecticut', 'New braunfels Texas'];
const itemServiceNames: string[] = ['Bartender', 'Waiters', 'Cocktails', 'Barbacks', 'Promo Models', 'Event Servers'];
const Hero = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [imageLoading, setLoadImage] = useState(false)
    const [serviceOpen, setServiceOpen] = useState(false) //to open service 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | null>(null); //to get selected service

    const [locationOpen, setLocationOpen] = useState(false) //to open service 
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null); //to get selected service

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedText = event.target.options[event.target.selectedIndex].text;
        setSelectedValue(selectedText)
        event.target.value = '0'; // Reset the dropdown to show "Services"
    };
    const handleImageLoad = () => {
        setLoadImage(true)
    }
    const handleService = () => {
        setLocationOpen(false)
        setServiceOpen(!serviceOpen)
    }
    const handleLocation = () => {
        setServiceOpen(false)
        setLocationOpen(!locationOpen)
    }
    const handleServiceSelect = (itemName: string) => { //for location
        setSelectedService(itemName === selectedService ? null : itemName); // Toggle selection
        console.log('Clicked item:', itemName); // Log the clicked item name
    };
    const handleLocationSelect = (itemName: string) => { //for location
        setSelectedLocation(itemName === selectedLocation ? null : itemName); // Toggle selection
        console.log('Clicked item:', itemName); // Log the clicked item name
    };
    
    const handleCloseDropdown = () => {
        setIsOpen(false); // Example: Close dropdown by setting isOpen to false
    };

    return (
        <div>
            <main className="h-screen flex flex-col justify-end items-center ">
                <div className="text-center text-[#f5f5f5] md:text-[200px] font-bold uppercase relative top-[80px] 2xl:text-[220px]  max-w-[1279px] m-auto">Workers</div>
                {!imageLoading && <Loader />}
                <Image onLoadingComplete={handleImageLoad} layout="intrinsic" src="./background.svg" height={580} width={1950} alt="Background" />

                {/* Add your content here */}
                <div className="absolute z-50 flex flex-col items-center justify-center text-white text-lg sm:max-w-[700px] lg:max-w-[840px] xl:max-w-[1000px] 2xl:max-w-[1050px] m-auto">
                    <span className="text-black font-900 md:font-extrabold text-[60px] md:text-[80px]  2xl:text-[130px] leading-[80px] md:leading-[120px] 2xl:leading-[188px] ">
                        BOOK <strong className="text-[#350abc]">EVENT</strong>
                    </span>
                    <span className="text-black font-900 md:font-extrabold text-[60px] md:text-[80px] 2xl:text-[110px] mb-[38px] 2xl:mb-[55px]">
                        <strong className="text-[#350abc]">STAFF</strong> IN A SNAP!
                    </span>

                    <div style={{ ...heroFilters }} className="flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
                        <div style={{ width: '14%' }} className=" text-start space-y-1.5">
                            <div className="relative inline-block border-none shadow-none">
                                <span
                                    className="block appearance-none md:w-[90px] 2xl:w-[100px] 2xl:text-[20px] leading-[150%] capitalize font-[500] md:text-[16px] bg-white pr-4 rounded focus:outline-none focus:shadow-outline text-[#0B0B0B]"
                                >Services</span>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                    {!imageLoading && <Loader />}
                                    <Image onLoadingComplete={handleImageLoad} height={13} width={13} src='/images/hero/box.svg' alt='box' />
                                </div>
                            </div>
                            <span onClick={handleService} className='block 2xl:text-[15px] text-start font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858]'>{selectedService||'Choose Service'}</span>


                            <CommonDropdown onCloseDropdown={()=>setServiceOpen(false)} selectedItem={selectedService} handleSelect={handleServiceSelect} isOpen={serviceOpen} itemNames={itemServiceNames} />

                        </div>
                        <img src="./images/Line 4.png" alt="" />
                        <div style={{ width: '22%',marginLeft:'15px' }} className=" text-start space-y-1.5 relative left-2">
                            <div className="relative inline-flex border-none shadow-none">
                                {/* SVG icon */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-gray-700">
                                    <Image src='/images/gallery/location.svg' alt='location-svg' width={15} height={15} />
                                </div>

                                {/* Dropdown */}
                               <span
                               className="font-[500] block appearance-none w-full  md:text-[16px] 2xl:text-[20px] bg-white pl-[32px] leading-[150%] text-[#0B0B0B] capitalize rounded focus:outline-none focus:shadow-outline"
                               >
                                Location
                               </span>
                            </div>
                            <span onClick={handleLocation} className='block 2xl:text-[15px] text-start font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858]'>{selectedLocation||'Choose Location'}</span>
                            <CommonDropdown onCloseDropdown={()=>setLocationOpen(false)} selectedItem={selectedLocation} handleSelect={handleLocationSelect} isOpen={locationOpen} itemNames={itemLocationNames} isLocation />

                        </div>


                        <img src="./images/Line 4.png" alt="" />
                        <div style={{ width: '29%' }} className=" text-start space-y-1.5">
                            <div className="relative inline-flex border-none shadow-none">
                                {/* SVG icon */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
                                    <Image height={13} width={13} src='/images/hero/star.svg' alt='box' />
                                </div>

                                {/* Dropdown */}
                                <select
                                    className="font-[500] block appearance-none w-full 2xl:text-[20px] 2xl:pr-0 md:text-[16px] bg-white pl-[32px] leading-[150%] text-[#0B0B0B] capitalize rounded focus:outline-none focus:shadow-outline"
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
                            <span className='block 2xl:text-[15px] text-start pl-[10px] font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858]'>{'July 24, 2024'}</span>

                        </div>
                        <img src="./images/Line 4.png" alt="" className='relative right-[15px]' />
                        <div style={{ width: '21%' }} className="space-y-1.5">

                            <div className='flex justify-center items-center'>
                                <span className='px-[14px] py-[0px] text-[#2C2240] text-[14px] relative right-[11px] font-[400] rounded-lg '>All</span>
                                <div className="flex items-center">
                                    <Image height={18} width={124} src='/images/hero/stars.svg' alt='box' />

                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <span className='relative right-[10px]'> <Image height={13} width={13} src='/images/hero/hero2.svg' alt='box' /></span>
                                <div className="flex items-center space-x-2.5 text-[13.5px]  text-[#696969] relative left-[16px]">
                                    <span>02</span>
                                    <span>07</span>
                                    <span>29</span>
                                    <span>59</span>
                                    <span>73</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Image height={744} width={1094} src="/images/hero/hero.png" alt="Hero Image" />
                </div>
            </main>
        </div>
    )
}

export default Hero
