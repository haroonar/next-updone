"use client"
import CalendarWithAvailability from '@/app/components/common/Calander'
import { BookingCalanderProps } from '@/app/libs/types'
import Image from 'next/image'
import React from 'react'

const TimeAndCalander = ({ highlightedDatesAvailable,highlightedDatesNotAvailable,isCalander, date, setDate, setSelectedTimeId, scrollRef, availableTimesMap, handleTimeSelection, selectedTimeId, scrollUp, scrollDown, handleAddToBooking,isStaffListerFilter }: BookingCalanderProps) => {
    return (
        <div className='flex justify-start items-start gap-[21px]'>
         
            <div style={{width:isStaffListerFilter ? "22rem":"26rem"}} className={`"h-[348px] `}>
                <div className=' w-full h-auto p-[10px] bg-[#fff] rounded-[8px]' style={{
  boxShadow: isCalander ? "" : "0px 8px 26px 0px rgba(0, 0, 0, 0.07)",
  border: isCalander ? "1px solid #f7f7f7" : "none"
}}
>
                    <CalendarWithAvailability
                    highlightedDatesAvailable={highlightedDatesAvailable}
                    highlightedDatesNotAvailable={highlightedDatesNotAvailable}
                        setSelectedTimeId={setSelectedTimeId} setDate={setDate} date={date}
                    />
                </div>
                {!isCalander && 
                <div className='flex justify-start gap-[10px] items-center mt-[18px] ml-[10px] tracking-[-0.2px] leading-[24px] font-[400] text-[#6B6B6B] text-[10px]'>
                    <h3 className='flex justify-center items-center gap-1'>
                        <span>
                            <Image height={10} width={10} alt='not available' src='/images/detail/notavail.svg' />
                        </span>
                        <span className='mt-[1.6px]'>Not Available</span>
                    </h3>
                    <h3 className='flex justify-center items-center gap-1'>
                        <span>
                            <Image height={10} width={10} alt='not available' src='/images/detail/current.svg' />

                        </span><span className='mt-[1.6px]'>Current Selection</span></h3>
                    <h3 className='flex justify-center items-center gap-1'><span>
                        <Image height={10} width={10} alt='not available' src='/images/detail/available.svg' />

                    </span><span className=''>Added to Booking</span></h3>
                </div>
        }
            </div>
            {highlightedDatesAvailable?.includes(date.toISOString().split('T')[0]) && (
                <div className='w-[12rem] h-full'>
                    <div className='relative bottom-[41px]'>
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
                            style={{ height: '355px', overflow: 'auto' }}
                            className='time-scroll space-y-2 pr-[20px]'
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
                        <div className='relative bottom-[60px]'>
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
                        { (
                            <>
                                <button
                                    onClick={scrollUp}
                                    className='absolute top-[145px] right-[-5px] border-none ad-half cursor-pointer'
                                >
                                    <Image height={120} width={10} src='/images/detail/arrowTop.svg' alt='' />
                                </button>
                                <button
                                    onClick={scrollDown}
                                    style={{bottom:'172px'}}
                                    className='absolute right-[-5px] border-none rounded-half cursor-pointer'
                                >
                                    <Image height={120} width={10} src='/images/detail/arrowDown.svg' alt='' />
                                </button>
                            </>
                        )}
                    </div>
                   {!isCalander &&  <button
                        onClick={handleAddToBooking}
                        className='text-[#350ABC] relative bottom-[93px] text-sm flex justify-center items-center w-[91%] py-[8px] px-[16px] border border-[#DED6FF] bg-[#F3F0FF] rounded-[4px] h-[40px]'
                    >
                        <span className='text-lg mr-2'>+</span> Add to Booking
                    </button>}
                </div>
            )}
        </div>
    )
}

export default TimeAndCalander
