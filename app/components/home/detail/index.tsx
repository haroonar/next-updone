'use client'
import React, { Suspense, useRef, useState } from 'react'
import Loader from '../../ui/loader';
const Testimonials = dynamic(() => import('../testimonials'), {
    ssr: false, // Do not SSR for this component
    loading: () => <><p className='flex text-center'>Loading...</p></>, // Display loader while loading
});
const CalendarWithAvailability = dynamic(() => import('../../common/Calander'), {
    ssr: false, // Do not SSR for this component
    loading: () => <><p className='flex text-center'>Loading...</p></>, // Display loader while loading
});
const StaffImageGrid = dynamic(() => import('./components/StaffImages'), {
    ssr: false, // Do not SSR for this component
    loading: () => <><p className='flex text-center'>Loading...</p></>, // Display loader while loading

});
const StaffHistory = dynamic(() => import('./components/StaffHistory'), {
    ssr: false, // Do not SSR for this component
    loading: () => <><p className='flex text-center'>Loading...</p></>, // Display loader while loading

});
import Image from 'next/image'
import { AiOutlineDelete } from "react-icons/ai";
import { PiLineVerticalThin } from 'react-icons/pi'
import { GoDotFill } from 'react-icons/go'
import { useAppSelector } from '@/app/libs/store/hooks'
import { selectStaff } from '@/app/libs/store/features/staff'
import HOME_TESTIMONINAL_CONTENT from '../testimonials/constants'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { TIMES_DATA } from '@/app/libs/Constants';
import { highlightedDatesAvailable } from '../../common/Calander';
import { Montserrat } from 'next/font/google';
const services = [
    { id: 1, text: "Cocktail Server" },
    { id: 2, text: "Promo Model" },
    { id: 3, text: "Waiter" },
    { id: 4, text: "Bartender" }
]
const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});
const StaffDetail = () => {
    const { staff } = useAppSelector(selectStaff);
    const [selectedServiceId, setSelectedService] = useState<number | null>(3);
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedTimeId, setSelectedTimeId] = useState<string | null>(null);
    const [timessss, setTimessss] = useState<{ date: string; times: string[] }[]>([]); // Initialize as an empty array
    console.log('timessss', timessss)
    const [date, setDate] = useState<Date>(new Date());
    // Define the available times for each highlighted date with unique IDs
    const [availableTimesMap, setAvailableTimesMap] = useState<{ [date: string]: { id: string; time: string; disabled: boolean, isAvailable: boolean }[] }>({
        '2024-07-21': [
            { id: 'time1', time: '4:00 pm', disabled: false, isAvailable: true },
            { id: 'time2', time: '5:00 pm', disabled: false, isAvailable: true },
            { id: 'time3', time: '6:00 pm', disabled: false, isAvailable: false },
            { id: 'time4', time: '7:00 pm', disabled: false, isAvailable: true },
            { id: 'time5', time: '8:00 pm', disabled: false, isAvailable: false },
            { id: 'time6', time: '9:00 pm', disabled: false, isAvailable: true },
            { id: 'time7', time: '10:00 pm', disabled: false, isAvailable: true },
            { id: 'time8', time: '11:00 pm', disabled: false, isAvailable: true },
            { id: 'time9', time: '12:00 pm', disabled: false, isAvailable: true },
            { id: 'time10', time: '2:00 pm', disabled: false, isAvailable: true },

        ],
        '2024-07-24': [
            { id: 'time6', time: '3:00 pm', disabled: false, isAvailable: true },
            { id: 'time7', time: '4:00 pm', disabled: false, isAvailable: true },
            { id: 'time8', time: '5:00 pm', disabled: false, isAvailable: true },
            { id: 'time9', time: '6:00 pm', disabled: false, isAvailable: true },
            { id: 'time10', time: '7:00 pm', disabled: false, isAvailable: true },
        ],
        // Add more dates and corresponding times as needed
    });
    const handleServiceClick = (id: number) => {
        setSelectedService(id);
    };

    const handleTimeSelection = (timeId: string, disabled: boolean) => {
        if (!disabled) {
            setSelectedTimeId(timeId === selectedTimeId ? null : timeId); // Toggle selection
        }
    };

    const handleAddToBooking = () => {
        if (selectedTimeId) {
            const selectedDate = date.toISOString().split('T')[0];
            const selectedTimeObj = availableTimesMap[selectedDate].find(time => time.id === selectedTimeId);
            if (selectedTimeObj) {
                const { time, id } = selectedTimeObj;
                console.log('Selected date:', selectedDate);
                console.log('Selected time:', time);

                // Check if there is already an entry for the selected date in timessss
                const existingDateIndex = timessss.findIndex((item) => item.date === selectedDate);

                if (existingDateIndex !== -1) {
                    // Date already exists, update the times array
                    const updatedTimes = [...timessss[existingDateIndex].times, time];
                    const updatedItem = { ...timessss[existingDateIndex], times: updatedTimes };
                    setTimessss((prevTimes) => [
                        ...prevTimes.slice(0, existingDateIndex),
                        updatedItem,
                        ...prevTimes.slice(existingDateIndex + 1),
                    ]);
                } else {
                    // Date doesn't exist, add a new entry
                    setTimessss((prevTimes) => [...prevTimes, { date: selectedDate, times: [time] }]);
                }

                // Mark the selected time as disabled in availableTimesMap
                const updatedAvailableTimesMap = { ...availableTimesMap };
                updatedAvailableTimesMap[selectedDate] = updatedAvailableTimesMap[selectedDate].map(timeObj =>
                    timeObj.id === id ? { ...timeObj, disabled: true } : timeObj
                );
                // Update state
                setAvailableTimesMap(updatedAvailableTimesMap);

                // Reset selectedTimeId after adding to booking
                setSelectedTimeId(null);
            }
        } else {
            console.log('No time selected.');
        }
    };

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
        }
    };
    return (
        <div>
            {/* upper section */}
            <div className='h-[225px] bg-[#f3f0ff] flex justify-center items-end'>
                <div className='h-[152px] w-full max-w-[1276px]  flex'>
                    <div className='w-[16%]'>
                        {/* <!-- Content for the left side --> */}
                        <div className='absolute top-[215px]'>
                            <GoDotFill className='text-[40px] absolute right-0 top-[-70px] z-[1] left-[4px]  text-[#350ABC]' />
                            <Image
                                className="relative bottom-[100px] border-solid border-8 border-white object-cover w-34 h-34 mt-3 mr-3 rounded-full"
                                //@ts-ignore
                                src={staff?.img} // Fallback to a default image if staff?.img is undefined
                                //@ts-ignore
                                alt={staff?.name}
                                width={180}
                                height={180}
                                objectFit="cover"
                                quality={100} // This ensures the highest quality
                            />

                        </div>
                    </div>
                    <div className='w-[84%] flex justify-center items-center gap-[64px] mb-[27px]'>
                        <div className='w-2/5 space-y-4'>
                            <div className="text-center mb-[21px] flex justify-between w-full items-center font-bold text-lg">
                                <h1 style={{ letterSpacing: '-2%' }} className='text-[44px] text-[#000000] font-semibold '>{staff?.name}</h1>
                                <div className="flex items-center ">
                                    <span className='mb-[4px] mr-1'>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0002 0.833374L12.8327 6.57171L19.1668 7.49754L14.5835 11.9617L15.6652 18.2684L10.0002 15.2892L4.33516 18.2684L5.41683 11.9617L0.833496 7.49754L7.16766 6.57171L10.0002 0.833374Z" fill="#F79809" stroke="#F79809" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>

                                    <p style={{ letterSpacing: '-2%' }} className="ms-1 text-[16px] leading-[26px] font-normal text-[#000000]">5.0/5</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center text-start w-full space-x-1 mb-2 ">
                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>
                                <span><PiLineVerticalThin /></span>

                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>
                                <span>  <PiLineVerticalThin /></span>

                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>

                            </div>
                            <div className="text-center text-[16px] font-normal  text-[#2C2240] flex gap-2">
                                <span>
                                    <Image width={16} height={16} alt='verified' src='/images/staff-listing/map.svg' />
                                </span>
                                <div className='relative bottom-[5px] text-[16px] font-normal leading-[26px] tracking-[-2%] text-[#2C2240]'>
                                    {`${staff?.city}`}
                                </div>
                            </div>
                            <div className="flex justify-start items-center text-start w-full space-x-3 mb-2 ">
                                <span className='relative bottom-[5px]'>
                                    <Image width={14} height={14} alt='verified' src='/images/staff-listing/phone.svg' />
                                </span>
                                <div style={{ letterSpacing: '-2%' }} className='relative bottom-[5px] text-[14px] font-normal flex justify-center items-center gap-2 text-[#000000]'>
                                    {`Contact Number`}
                                    <Image width={58} height={12} alt='verified' src='/images/staff-listing/vertified.svg' />
                                </div>

                                <span className='relative bottom-[6px]'>
                                    <Image width={16} height={16} alt='verified' src='/images/staff-listing/person.svg' />
                                </span>
                                <div style={{ letterSpacing: '-2%' }} className='relative bottom-[5px] text-[14px] font-normal flex justify-center items-center gap-2 text-[#000000]'>
                                    {`ID`}
                                    <Image width={82} height={16} alt='verified' src='/images/staff-listing/not-verfied.svg' />

                                </div>


                            </div>
                        </div>

                        <div className='w-3/5'>
                            <h1 style={{ letterSpacing: '-1%', lineHeight: 'auto' }} className=' text-[#2C2240] text-[24px] font-semibold'>
                                About Me
                            </h1>
                            <p style={{ letterSpacing: '-2%' }} className='text-[#6B6B6B] text-[14px] font-normal leading-[24px]'>
                                I'm Sarah Miller, a vibrant and outgoing individual passionate about creating memorable experiences. As a cocktail server, I ensure guests feel welcome and enjoy their time.  As a promo model, I bring brands to life with high energy and a captivating smile.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            {/* booking checkout */}

            <div className="max-w-[1276px] mx-auto h-auto pt-[80px]">
                <div>
                    <div className='w-full h-[348px] mb-[60px] flex gap-[33px] justify-start items-start'>
                        <div className='w-[192px] h-full'>
                            <h1 className='font-[500] leading-[19.93px] tracking-[0.316px] text-[16.608px] text-[#000000]'>
                                Choose Service
                            </h1>
                            <div className='space-y-[20px] pb-[28px] pt-[20px] capitalize'>
                                {services.map((service) => {
                                    const isSelected = service.id === selectedServiceId;
                                    return (
                                        <h1
                                            key={service.id}
                                            onClick={() => handleServiceClick(service.id)}
                                            className={`cursor-pointer w-[192px] text-[14px] leading-[24px] tracking-[-0.28px] font-[400] text-center rounded-[29px] py-[6px] px-[20px] ${isSelected ? 'bg-[#2C2240] text-[#F3F0FF]' : 'bg-[#F3F0FF] text-[#2C2240] line-through opacity-[0.6]'
                                                }`}
                                        >
                                            {service.text}
                                        </h1>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='flex justify-start items-start gap-[21px]'>
                            <div className='w-[26rem] h-[348px] '>
                                <div className=' w-full h-auto p-[10px] bg-[#fff] rounded-[8px]' style={{ boxShadow: "0px 8px 26px 0px rgba(0, 0, 0, 0.07)" }}>
                                    <CalendarWithAvailability
                                        setSelectedTimeId={setSelectedTimeId} setDate={setDate} date={date}
                                    />
                                </div>
                                <div className='flex justify-start gap-[10px] items-center mt-[18px] ml-[10px] tracking-[-0.2px] leading-[24px] font-[400] text-[#6B6B6B] text-[10px]'>
                                    <h1 className='flex justify-center items-center gap-1'>
                                        <span>
                                            <Image height={10} width={10} alt='not available' src='/images/detail/notavail.svg' />
                                        </span>
                                        <span className='mt-[1.6px]'>Not Available</span>
                                    </h1>
                                    <h1 className='flex justify-center items-center gap-1'>
                                        <span>
                                            <Image height={10} width={10} alt='not available' src='/images/detail/current.svg' />

                                        </span><span className='mt-[1.6px]'>Current Selection</span></h1>
                                    <h1 className='flex justify-center items-center gap-1'><span>
                                        <Image height={10} width={10} alt='not available' src='/images/detail/available.svg' />

                                    </span><span className=''>Added to Booking</span></h1>
                                </div>
                            </div>
                            {highlightedDatesAvailable.includes(date.toISOString().split('T')[0]) && (
                                <div className='w-[12rem] h-full'>
                                    <div  className='relative bottom-[50px]'>
                                        <h2 className="invisible absolute">Sarah's Availability</h2>
                                        <div className='relative right-[64px] top-[2.4rem]'>
                                            <svg height="40" width='260' viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="260" height="70" transform="matrix(1 0 0 -1 0 40)" fill="url(#paint0_linear_483_1294)" />
                                                <rect width="260" height="70" transform="matrix(1 0 0 -1 0 40)" fill="url(#paint1_linear_483_1294)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_483_1294" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0" />
                                                        <stop offset="1" stop-color="white" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_483_1294" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0" />
                                                        <stop offset="1" stop-color="white" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                        <div
                                            ref={scrollRef}
                                            style={{ height: '363px', overflow: 'auto' }}
                                            className='time-scroll space-y-2'
                                        >
                                            {availableTimesMap[date.toISOString().split('T')[0]]?.map((timeObj) => (
                                                <div
                                                    key={timeObj.id}
                                                    className={`time-slot cursor-pointer border-[0.892px] border-[#F5F5F5]  ${timeObj.id === selectedTimeId ? 'bg-[#350ABC] text-[#F3F0FF]' : timeObj.disabled ? 'bg-[#F7FCFF]  text-[#4694C2] border-[#EAF8FF] border-[0.892px] cursor-not-allowed' : timeObj.isAvailable === false ? 'bg-[#F9F9F9] opacity-5 line-through border-none text-[#d5d3d9]' : ''
                                                        }`}
                                                    onClick={() => handleTimeSelection(timeObj.id, timeObj.disabled)}
                                                    style={{
                                                        padding: '8px',
                                                        marginBottom: '12px',
                                                        fontSize: '11px',
                                                        fontWeight: 400,
                                                        lineHeight: '24px',
                                                        textAlign: 'center',
                                                        borderRadius: '4px',
                                                        opacity: timeObj.disabled ? 1 : 1, // Reduce opacity for disabled times
                                                    }}
                                                >
                                                    <div className='flex justify-around items-center'>
                                                        {timeObj.time}
                                                        {timeObj.disabled && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 10" fill="none">
                                                            <path d="M7.67698 2.36572L3.58708 6.45563L1.72803 4.59658" stroke="#2BCC02" stroke-width="0.62464" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div  className='relative bottom-[60px]'>
                                            <svg width="210" height="70" viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="210" height="70" fill="url(#paint0_linear_1041_2726)" />
                                                <rect width="210" height="70" fill="url(#paint1_linear_1041_2726)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1041_2726" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0" />
                                                        <stop offset="1" stop-color="white" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1041_2726" x1="74" y1="0" x2="74" y2="40" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0" />
                                                        <stop offset="1" stop-color="white" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                        {selectedTimeId && (
                                            <>
                                                <button
                                                    onClick={scrollUp}
                                                    className='absolute top-[123px] right-[-16px] border-none ad-half cursor-pointer'
                                                >
                                                    <Image height={120} width={10} src='/images/detail/arrowTop.svg' alt='' />
                                                </button>
                                                <button
                                                    onClick={scrollDown}
                                                    className='absolute bottom-[50px] right-[-16px] border-none rounded-half cursor-pointer'
                                                >
                                                    <Image height={120} width={10} src='/images/detail/arrowDown.svg' alt='' />
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    <button
                                        onClick={handleAddToBooking}
                                        className='text-[#350ABC] relative bottom-[105px] text-sm flex justify-center items-center w-full py-[8px] px-[16px] border border-[#DED6FF] bg-[#F3F0FF] rounded-[4px] h-[40px]'
                                    >
                                        <span className='text-lg mr-2'>+</span> Add to Booking
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className='w-full flex justify-between items-start flex-col gap-[14.28px]'>
                            <h1 className='leading-[19.93px] translate-[0.316px] font-[500] text-[16.608px] text-[#000000] '>Booking Times</h1>
                            {timessss?.length === 0 ? <><div className='w-full h-[50vh] flex justify-center items-center capitalize'>Please Add a time to Booking</div></> :
                                <div style={{ width: selectedTimes.length > 0 ? '34rem' : "100%" }} className=' h-[47vh] overflow-auto w-full space-y-3'>
                                    {timessss?.map((time) => {
                                        return (
                                            <div className='w-full flex flex-col justify-start items-start text-[14px] font-normal text-[#6B6B6B] leading-[24px] gap-[8px] tracking-[-2%]'>
                                                <div style={{ boxShadow: '0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)' }} className='bg-[#FFF] flex justify-between  items-center min-h-[50px] max-h-[100px] border-[0.892px] rounded-[3.569px]  border-[#EDE9FF] w-full'>
                                                    <div className='flex items-center gap-[7.14px] pl-[17.85px]'>
                                                        <Image width={14} height={14} color='red' src='/images/detail/calnder.svg' alt='calander' />
                                                        <h1 className='tracking-[-0.214px] leading-[21.416px]  font-[400] text-[10.708px] text-[#2C2240]'>{time.date}</h1>
                                                    </div>
                                                    <div className='ml-[105px] justify-between flex items-center gap-[45px] tracking-[-0.25px] leading-[21.416px]  font-[400] text-[12.493px] text-[#848486]'>
                                                        <div className='flex flex-col'>
                                                            {time.times.map((singleTime, index) => (
                                                                <div key={index} className='flex items-center gap-1 justify-center'>
                                                                    {singleTime}
                                                                    <span>
                                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect x="0.67041" y="0.487305" width="10.7081" height="10.7081" rx="5.35406" fill="#FFB0B0" />
                                                                            <path d="M3.21558 5.84131H8.42091" stroke="#C70101" stroke-width="0.892344" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>

                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
                                                            <path d="M6.74951 10.604H11.4343" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M9.0919 2.01531C9.29898 1.80823 9.57985 1.69189 9.8727 1.69189C10.0177 1.69189 10.1613 1.72046 10.2953 1.77595C10.4292 1.83144 10.551 1.91278 10.6535 2.01531C10.756 2.11785 10.8374 2.23958 10.8929 2.37355C10.9484 2.50752 10.9769 2.65111 10.9769 2.79611C10.9769 2.94112 10.9484 3.08471 10.8929 3.21868C10.8374 3.35265 10.756 3.47438 10.6535 3.57691L4.14683 10.0836L2.0647 10.6041L2.58523 8.52198L9.0919 2.01531Z" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg></span>
                                                    </div>
                                                    <div className='bg-[#FDD] flex items-center justify-center min-h-[50px] max-h-[100px]  w-[33.017px] relative left-[0.8px]' style={{ borderTopRightRadius: '3px', borderBottomRightRadius: '3px' }} >
                                                        <Image width={12} height={15} color='red' src='/images/detail/del.svg' alt='calander' />
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                    <div className='w-full bg-[#FFF] rounded-[8px] p-[24px] mt-[80px]' style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.08)' }}>
                        <h1 className={`${montserrat.className} text-start text-[#000000] text-[20px] font-[600] leading-normal tracking-[-0.2px] py-[8px] border-b-[1px] border-[#F1F1F1]`}>Cast Breakdown</h1>
                        <div className='flex justify-start items-center w-full gap-[61px] mt-[16px]'>
                            <div className='w-[75%] py-[20px]'>
                                <div className='gap-[28px] flex justify-start items-center w-full' >
                                    <div className='w-[50%] flex flex-col gap-[4px]'>
                                        <div className='flex justify-between items-start py-[16px] px-[4px]  border-b-[1px] border-[#F1F1F1]'>
                                            <div className='text-[#6B6B6B] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>
                                                Worker Fee Per Hour
                                            </div>
                                            <div className='text-[#2C2240] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>30$</div>
                                        </div>
                                        <div className='flex justify-between items-start py-[16px] px-[4px]'>
                                            <div className='text-[#6B6B6B] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>
                                                Worker Fee Per Hour
                                            </div>
                                            <div className='text-[#2C2240] text-base font-normal tracking-wide leading-6'>
                                                <span className=' text-[#C2C2C2] text-[11px] font-normal leading-4 mr-[1.9px]'>5</span>
                                                <span className='text-[8px] text-[#C2C2C2] font-normal leading-4 mr-1'>Days</span>
                                                <span className=' text-[#C2C2C2] text-[11px] font-normal leading-4 mr-[1.9px]'>9</span>
                                                <span className='text-[8px] text-[#C2C2C2] font-normal leading-4 mr-2'>hours</span>
                                                <span className='text-[#2C2240] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>54h</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='w-[50%]'>
                                        <div className='w-[50%] flex flex-col gap-[4px]' style={{ width: '100%' }}>
                                            <div className='flex justify-between items-start py-[16px] px-[4px]  border-b-[1px] border-[#F1F1F1]'>
                                                <div className='text-[#6B6B6B] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>
                                                    Worker Fee Per Hour
                                                </div>
                                                <div className='text-[#2C2240] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>
                                                <div className='text-[#2C2240] text-base font-normal tracking-wide leading-6'>
                                                <span className=' text-[#C2C2C2] text-[11px] font-normal leading-4 mr-[1.9px]'>5</span>
                                                <span className='text-[8px] text-[#C2C2C2] font-normal leading-4 mr-1'>Days</span>
                                                <span className=' text-[#C2C2C2] text-[11px] font-normal leading-4 mr-[1.9px]'>9</span>
                                                <span className='text-[8px] text-[#C2C2C2] font-normal leading-4 mr-2'>hours</span>
                                                <span className='text-[#2C2240] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>40$</span>
                                            </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between items-start py-[16px] px-[4px]'>
                                                <div className='text-[#6B6B6B] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>
                                                    Worker Fee Per Hour
                                                </div>
                                                <div className='text-[#2C2240] text-[14px] font-[400] tracking-[-0.28px] leading-[24px]'>10$</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[25%] h-[100%] bg-[#F3F0FF] py-[10px] px-[20px]'>
                                <div className='flex justify-between items-center pb-[14px]'>
                                    <h6 className={`${montserrat.className} tracking-[-0.2px] leading-normal font-[600] text-[20px] text-[#6B6B6B]`}>Total</h6>
                                    <h1 className={`${montserrat.className} tracking-[-0.32px] leading-normal font-[600] text-[32px] text-[#000000]`}>$2,700.00</h1>
                                </div>
                                <Link href='/staff/booking' className="text-[#dfdbec] bg-[#350ABC] justify-center rounded-[4px] text-[14px] font-normal px-[20px] w-[100%] opacity-[0.9] h-[48px] py-[16px] text-center inline-flex items-center ">
                                    <span className='mr-2 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M13.8332 4L6.49984 11.3333L3.1665 8" stroke="#F3F0FF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>

                                    Hire Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* staff history section */}
                <div className="h-[465px] flex gap-[25px] mt-[100px] mb-6">
                    <StaffHistory />
                    <StaffImageGrid />
                </div>

            </div>
            <div>
                <Testimonials isDetailTestonial testimonials={HOME_TESTIMONINAL_CONTENT} />
            </div>

        </div>
    )
}

export default StaffDetail
