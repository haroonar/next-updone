'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { heroFilters } from './hero';
import Loader from '../../ui/loader';
import CommonDropdown from '../../common/Menu';
import TimeAndCalander from '../../ui/booking-calander/calander-time';
import { useBookingContext } from '@/app/libs/context/BookingContext';
import StarRating from '../../ui/star-rating';
import ImageWithSkeleton from '../../ui/image-skeleton';
import Skeleton from 'react-loading-skeleton';
import HeroImageWithSkeleton from '../../ui/image-skeleton/HeroImgSkeleton';


const itemLocationNames: string[] = [`Los Angeles`];
const itemServiceNames: string[] = ['Bartender', 'Waiters', 'Cocktails', 'Barbacks', 'Promo Models', 'Event Servers'];
const Hero = () => {
    const { setSelectedTimeId, selectedTimeId, scrollRef, scrollDown, scrollUp, handleAddToBooking, handleTimeSelection, handleServiceClick, availableTimesMap, setDate, date, staff, selectedServiceId } = useBookingContext();
    const [selectedValue, setSelectedValue] = useState('');
    const [imageLoading, setLoadImage] = useState(false)
    const [serviceOpen, setServiceOpen] = useState(false) //to open service 
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | null>(null); //to get selected service

    const [locationOpen, setLocationOpen] = useState(false) //to open service 

    const [dateOpen, setDateOpen] = useState(false) //to open service 
    const [isFilterOpened, setIsFilterOpened] = useState(false) //to open service 
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
        setDateOpen(false)
        setServiceOpen(!serviceOpen)
    }
    const handleLocation = () => {
        setServiceOpen(false)
        setDateOpen(false)
        setLocationOpen(!locationOpen)
    }
    const handleDate = () => {
        setLocationOpen(false)
        setServiceOpen(false)
        setDateOpen(!dateOpen)
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
    const handleClikedFilter = () => {
        setIsFilterOpened(!isFilterOpened)
    }
    return (
        <div>
            <main className="h-screen flex flex-col justify-end items-center ">
            <h2 className="text-center text-[#f5f5f5] md:text-[200px] font-bold uppercase relative top-[80px] 2xl:text-[200px] mx-auto">Workers</h2>
                <ImageWithSkeleton  src="./background.svg" height={550} width={1950} alt="Background" />

                {/* Add your content here */}
                <div className="absolute z-50 flex flex-col items-center justify-center text-white text-lg max-w-[1279px] 2xl:max-w-[1279px] m-auto">
                <h1 className="text-black font-900 md:font-extrabold text-[60px] md:text-[80px]  2xl:text-[100px] leading-[80px] md:leading-[120px] 2xl:leading-[188px] ">
                        <span className='md:block md:w-full md:text-center md:relative md:top-[170px] 2xl:top-[270px]'>BOOK <strong className="text-[#350abc]">EVENT</strong></span> <br /> <strong className="text-[#350abc]">STAFF</strong> IN A SNAP!
                    </h1>

                    <div onClick={handleClikedFilter} style={{ ...heroFilters }} className={`${isFilterOpened ? "w-[100%] transition-all duration-1000" : "w-[79.9%] transition-all duration-1000"}  flex space-x-3 p-1 text-black justify-center items-center text-center`}>
                        <div style={{ width: '18%' }} className=" text-start space-y-1.5">
                            <div className="relative inline-block border-none shadow-none">
                                <span
                                    className="block appearance-none md:w-[90px] 2xl:w-[100px] 2xl:text-[20px] leading-[150%] capitalize font-[500] md:text-[16px] bg-white pr-4 rounded focus:outline-none focus:shadow-outline text-[#0B0B0B]"
                                >Services</span>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                    {!imageLoading && <Loader />}
                                    <Image onLoadingComplete={handleImageLoad} height={13} width={13} src='/images/hero/box.svg' alt='box' />
                                </div>
                            </div>
                            <span onClick={handleService} className='block 2xl:text-[15px] text-start font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858] cursor-pointer'>{selectedService || 'Choose Service'}</span>


                            <CommonDropdown onCloseDropdown={() => setServiceOpen(false)} selectedItem={selectedService} handleSelect={handleServiceSelect} isOpen={serviceOpen} itemNames={itemServiceNames} />

                        </div>
                        <img src="./images/Line 4.png" alt="" />
                        <div style={{ width: '18%', marginLeft: '15px' }} className=" text-start space-y-1.5 relative left-2">
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
                            <span onClick={handleLocation} className='block 2xl:text-[15px] text-start font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858] cursor-pointer'>{selectedLocation || 'Los Angeles'}</span>
                            <CommonDropdown onCloseDropdown={() => setLocationOpen(false)} selectedItem={selectedLocation} handleSelect={handleLocationSelect} isOpen={locationOpen} itemNames={itemLocationNames} isLocation />


                        </div>


                        <img src="./images/Line 4.png" alt="" />
                        <div style={{ width: '29%' }} className=" text-start space-y-1.5">
                            <div className="relative inline-flex border-none shadow-none">
                                {/* SVG icon */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
                                    <Image height={13} width={13} src='/images/hero/star.svg' alt='box' />
                                </div>
                                <span
                                    className="font-[500] block appearance-none w-full transition-all duration-1000  md:text-[16px] 2xl:text-[20px] bg-white pl-[32px] leading-[150%] text-[#0B0B0B] capitalize rounded focus:outline-none focus:shadow-outline"
                                >
                                    Date and Time
                                </span>
                                <CommonDropdown isCalander onCloseDropdown={() => setDateOpen(false)} handleSelect={handleDate} isOpen={dateOpen}>
                                    <TimeAndCalander
                                        date={date}
                                        setDate={setDate}
                                        setSelectedTimeId={setSelectedTimeId}
                                        scrollRef={scrollRef}
                                        availableTimesMap={availableTimesMap}
                                        handleTimeSelection={handleTimeSelection}
                                        isCalander
                                        selectedTimeId={selectedTimeId}
                                        scrollUp={scrollUp}
                                        scrollDown={scrollDown}
                                        isHeroFilterCalander
                                        handleAddToBooking={handleAddToBooking}
                                    />
                                </CommonDropdown >
                            </div>
                            <span className='block 2xl:text-[15px] text-start pl-[10px] font-[400] leading-[150%] capitalize md:text-[14px] text-[#585858] cursor-pointer' onClick={handleDate}>{'July 24, 2024'}</span>

                            {/* <Image height={18} width={124} src='/images/hero/stars.svg' alt='box' /> */}
                        </div>
                        <img src="./images/Line 4.png" alt="" className='relative right-[15px]' />
                        <div style={{ width: '21%' }} className="space-y-1.5 mt-[7px]">

                            <div className='flex justify-center items-center'>
                                <span className='pl-[14px] pr-[2px] py-[0px] text-[#2C2240] text-[14px] relative right-[12.5px] font-[400] rounded-lg '>All</span>
                                <div className="flex items-center">
                                    <StarRating />
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <span className='relative right-[8px] bottom-[1px]'> <Image height={13} width={13} src='/images/hero/hero2.svg' alt='box' /></span>
                                <div className="flex items-center space-x-2.5 text-[10px]  text-[#696969] relative left-[9px]">
                                    <span>02</span>
                                    <span title='sdsd'>07</span>
                                    <span>29</span>
                                    <span>59</span>
                                    <span>73</span>
                                </div>
                            </div>

                        </div>
                        {isFilterOpened ? (
                            <button style={{ boxShadow: "0px 0px 12px 0px rgba(53, 10, 188, 0.22)", margin: '0 0 0 29px' }} className='text-[#FFFFFF] flex justify-center items-center gap-[8px] bg-[#774DFD] rounded-[8px] font-[400] text-[16px] leading-[26px] tracking-[-0.32px] opacity-[0.9] py-[11px] px-[22px] text-center'>
                                Find
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="9" viewBox="0 0 29 9" fill="none">
                                        <path d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM28.3536 4.85356C28.5488 4.65829 28.5488 4.34171 28.3536 4.14645L25.1716 0.964468C24.9763 0.769206 24.6597 0.769206 24.4645 0.964468C24.2692 1.15973 24.2692 1.47631 24.4645 1.67157L27.2929 4.5L24.4645 7.32843C24.2692 7.52369 24.2692 7.84027 24.4645 8.03554C24.6597 8.2308 24.9763 8.2308 25.1716 8.03554L28.3536 4.85356ZM1 5L28 5L28 4L1 4L1 5Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                        ) : null}

                    </div>
                    {/* {imageLoading && <Skeleton width={744} height={1094} style={{borderRadius:'60% 60% 0 0'}} className='rounded-full animate-pulse bg-gray-100' />} */}
                    <HeroImageWithSkeleton isHeroImg  src="/images/hero/hero.png" height={744} width={1094} alt="Background" />
                    {/* <Image loading='eager'onLoadingComplete={handleImageLoad} layout="responsive" objectFit='fill' quality={100} height={744} width={1094} src="/images/hero/hero.png" alt="Hero Image" /> */}
                </div>
            </main>
        </div>
    )
}

export default Hero
