import React from 'react'
import Image from 'next/image'
import TimeAndCalander from './calander-time'
import { BookingCalanderProps } from '@/app/libs/types'
import { montserrat, services } from '../../home/detail'
import Link from 'next/link'


const BookingCalander = ({ highlightedDatesNotAvailable,highlightedDatesAvailable,handleServiceClick,selectedServiceId,isCalander, isStaffListerFilter, date, setDate, setSelectedTimeId, scrollRef, availableTimesMap, handleTimeSelection, selectedTimeId, scrollUp, scrollDown, timessss, handleAddToBooking, selectedTimes }: BookingCalanderProps) => {
    return (
        <>
            {!isStaffListerFilter ?
                <>
                    <TimeAndCalander
                        date={date}
                        setDate={setDate}
                        setSelectedTimeId={setSelectedTimeId}
                        scrollRef={scrollRef}
                        availableTimesMap={availableTimesMap}
                        handleTimeSelection={handleTimeSelection}
                        isStaffListerFilter
                        selectedTimeId={selectedTimeId}
                        scrollUp={scrollUp}
                        scrollDown={scrollDown}
                        handleAddToBooking={handleAddToBooking}
                        highlightedDatesNotAvailable={highlightedDatesNotAvailable}
                            highlightedDatesAvailable={highlightedDatesAvailable}
                    />
                    <div className='w-full flex justify-between items-start flex-col gap-[14.28px]'>
                        <h2 className='leading-[19.93px] translate-[0.316px] font-[500] text-[16.608px] text-[#000000] '>Booking Times</h2>
                        {timessss?.length === 0 ? <><div className='w-full h-[50vh] flex justify-center items-center capitalize'>Please Add a time to Booking</div></> :
                            <div style={{ width: selectedTimes.length > 0 ? '34rem' : "100%" }} className=' h-[47vh] overflow-auto w-full space-y-3'>
                                {timessss?.map((time) => {
                                    return (
                                        <div className='w-full flex flex-col justify-start items-start text-[14px] font-normal text-[#6B6B6B] leading-[24px] gap-[8px] tracking-[-2%]'>
                                            <div style={{ boxShadow: '0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)' }} className='bg-[#FFF] flex justify-between  items-center min-h-[50px] max-h-[100px] border-[0.892px] rounded-[3.569px]  border-[#EDE9FF] w-full'>
                                                <div className='flex items-center gap-[7.14px] pl-[17.85px]'>
                                                    <Image width={14} height={14} color='red' src='/images/detail/calnder.svg' alt='calander' />
                                                    <h3 className='tracking-[-0.214px] leading-[21.416px] min-w-[70px]  font-[400] text-[10.708px] text-[#2C2240] mr-2'>{time.date}</h3>
                                                </div>
                                                <div className=' justify-between flex items-center gap-[45px] tracking-[-0.25px]  min-w-[200px] leading-[21.416px]  font-[400] text-[12.493px] text-[#848486]'>
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

                                                    <span className={`${!isStaffListerFilter ? "left-[10px]":'left-[85px]'} relative `}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
                                                        <path d="M6.74951 10.604H11.4343" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M9.0919 2.01531C9.29898 1.80823 9.57985 1.69189 9.8727 1.69189C10.0177 1.69189 10.1613 1.72046 10.2953 1.77595C10.4292 1.83144 10.551 1.91278 10.6535 2.01531C10.756 2.11785 10.8374 2.23958 10.8929 2.37355C10.9484 2.50752 10.9769 2.65111 10.9769 2.79611C10.9769 2.94112 10.9484 3.08471 10.8929 3.21868C10.8374 3.35265 10.756 3.47438 10.6535 3.57691L4.14683 10.0836L2.0647 10.6041L2.58523 8.52198L9.0919 2.01531Z" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg></span>
                                                </div>
                                                <div className='bg-[#FDD] ml-[15px] flex items-center justify-center min-h-[50px] max-h-[100px]  w-[33.017px] relative left-[0.8px]' style={{ borderTopRightRadius: '3px', borderBottomRightRadius: '3px' }} >
                                                    <Image width={12} height={15} color='red' src='/images/detail/del.svg' alt='calander' />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </>
                :
                <div>
                    <div className='w-full h-[348px] mb-[60px] flex gap-[33px] justify-start items-start'>
                        <div className='w-[192px] h-full'>
                            <h3 className='font-[500] leading-[19.93px] tracking-[0.316px] text-[16.608px] text-[#000000]'>
                                Choose Service
                            </h3>
                            <div className='space-y-[20px] pb-[28px] pt-[20px] capitalize'>
                                {services.map((service) => {
                                    const isSelected = service.id === selectedServiceId;
                                    return (
                                        <h3
                                            key={service.id}
                                            onClick={() => handleServiceClick(service.id)}
                                            className={`${service.id === 2 ?"bg-[#20192e] text-[#F3F0FF] opacity-[0.9]":"opacity-[0.7]" } cursor-pointer w-[192px] text-[14px] leading-[24px] tracking-[-0.28px] font-[400] text-center rounded-[29px] py-[6px] px-[20px] ${isSelected ? 'bg-[#2C2240] text-[#F3F0FF]' : 'bg-[#F3F0FF] text-[#2C2240]'
                                                }`}
                                        >
                                            {service.text}
                                        </h3>
                                    );
                                })}
                            </div>
                        </div>
                        <BookingCalander
                            date={date}
                            setDate={setDate}
                            setSelectedTimeId={setSelectedTimeId}
                            scrollRef={scrollRef}
                            availableTimesMap={availableTimesMap}
                            handleTimeSelection={handleTimeSelection}
                            highlightedDatesNotAvailable={highlightedDatesNotAvailable}
                            highlightedDatesAvailable={highlightedDatesAvailable}
                            selectedTimeId={selectedTimeId}
                            scrollUp={scrollUp}
                            scrollDown={scrollDown}
                            timessss={timessss}
                            handleAddToBooking={handleAddToBooking}
                            selectedTimes={selectedTimes}
                        />
                    </div>
                     <div className='w-full bg-[#FFF] rounded-[8px] p-[24px] mt-[110px]' style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.08)' }}>
                        <h2 className={`${montserrat.className} text-start text-[#000000] text-[20px] font-[600] leading-normal tracking-[-0.2px] py-[8px] border-b-[1px] border-[#F1F1F1]`}>Cost Breakdown</h2>
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
                                    <h3 className={`${montserrat.className} tracking-[-0.32px] leading-normal font-[600] text-[32px] text-[#000000]`}>$2,700.00</h3>
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
            }


        </>
    )
}

export default React.memo(BookingCalander);
