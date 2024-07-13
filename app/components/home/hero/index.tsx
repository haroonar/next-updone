'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { heroFilters } from './hero';
import Loader from '../../ui/loader';
import CommonDropdown from '../../common/Menu';
import TimeAndCalander from '../../ui/booking-calander/calander-time';
import { useBookingContext } from '@/app/libs/context/BookingContext';
import StarRating from '../../ui/star-rating';
import { montserrat } from '@/app/libs/Fonts';


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
    const [image1Loaded, setImage1Loaded] = useState(false);
    const [image2Loaded, setImage2Loaded] = useState(false);
    const [allImagesLoaded, setAllImagesLoaded] = useState(true); // Initially true
    console.log('allImagesLoaded', allImagesLoaded)
    useEffect(() => {
        // Check if both images have finished loading
        if (image1Loaded && image2Loaded) {
            setAllImagesLoaded(false);
        }
    }, [image1Loaded, image2Loaded]);

    const handleImage1Load = () => {
        setImage1Loaded(true);
    };

    const handleImage2Load = () => {
        setImage2Loaded(true);
    };
    return (
        <div>

            <main className="h-screen flex flex-col justify-end items-center relative">
                {allImagesLoaded && (
                    <div className="absolute inset-0 flex items-start justify-start bg-gray-100 bottom-[0px] animate-pulse z-[99999] margin">
                        <div className="loader_hero"></div>
                    </div>
                )}
             
                <Image
                style={{width:'100%'}}
                    onLoadingComplete={handleImage1Load}
                    layout="intrinsic"
                    src="./background.svg"
                    height={580}
                    width={1950}
                    alt="Background"
                />

                {/* Add your content here */}
                <div className="absolute z-50 flex flex-col items-center justify-center text-white text-lg  md:max-w-[900px] 2xl:max-w-[1050px] m-auto">

                    {!allImagesLoaded &&
                    
                    <div className={`${montserrat.className} font-[900] mb-[18px]  flex flex-col text-[#0B0B0B] justify-center items-center uppercase text-center 2xl:text-[110px] 2xl:leading-[100px] md:leading-[60px] md:text-[60px]`}>
                        <h2 className='text-[#f5f5f5] 2xl:text-[210px] md:text-[150px] relative z-[-1] top-[56px]'>WORKERS</h2>
                        <h1>Book <span className='text-[#350ABC]'>Event</span> <br /> <span className='text-[#350ABC]'>Staff</span> in a snap!</h1>
                    </div>
                    }

                    {!allImagesLoaded &&
                        <div onClick={handleClikedFilter} style={{ ...heroFilters }} className={`${isFilterOpened ? "w-[100%] !transition-all !duration-1000 !rounded-[8px]" : "!w-[79.9%] !transition-all !duration-1000"}  flex space-x-3 p-1 text-black justify-center items-center text-center`}>
                            <div style={{ width: '18%' }} className=" text-start space-y-1.5">
                                <div className="relative inline-block border-none shadow-none">
                                    <span
                                        className="block appearance-none md:w-[90px] 2xl:w-[100px] 2xl:text-[20px] leading-[150%] capitalize font-[500] md:text-[16px] bg-white pr-4 rounded focus:outline-none focus:shadow-outline text-[#0B0B0B]"
                                    >Services</span>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
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
                    }
                    <Image onLoadingComplete={handleImage2Load} height={744} width={1294} src="/images/hero/hero.png" alt="Hero Image" />
                </div>
            </main>
        </div>
    )
}

export default Hero
