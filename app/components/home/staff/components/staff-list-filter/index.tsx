'use client'
import CommonSelect from '@/app/components/common/select-option'
import { HERO_FILTER_STAFF, LOCATION, TIMES_CONST } from '@/app/libs/Constants'
import Image from 'next/image'
import React from 'react'
type StaffFiltersProps = {
    handleTimeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    handleLocationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    scrollY: number;
    modalOpen?:boolean;
}

const StaffFilters = ({ handleTimeChange, handleLocationChange, scrollY=0 ,modalOpen}: StaffFiltersProps) => {
    return (
        <div className='w-full h-40 flex justify-center items-start'>
            {modalOpen ? "":   
           <div className={scrollY
            ? '!transition-all !delay-500 w-full h-44 bg-[#FFF]  flex justify-center fixed z-50 items-start bottom-0 top-10 left-0 right-0'
            : 'w-full flex justify-center !transition-all !duration-500 !ease-in fixed z-50 items-start'}>

                <div style={{
                    boxShadow: scrollY
                        ? '0px -1px 10px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        : ''
                }}
                    className={` filter-section ${scrollY ? 'scrolled mt-[150px] filter-section' : ''} fixed z-50 mb-[65px] font-normal pt-4 pl-4 pb-0 pr-4 bg-white rounded-lg mt-[2.5%] shadow-sm`}>
                    <div className={`flex justify-center items-center w-full space-x-3 ${scrollY ? "mb-[20px]":"mb-2.5"}`}>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#F9F8FF] font-normal  !transition-all !duration-1000 !ease-in text-[#2C2240] px-[20px] py-[6px] rounded-md">Cocktail Server</button>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#F9F8FF] font-normal  !transition-all !duration-1000 !ease-in text-[#2C2240] px-[20px] py-[6px] rounded-md">Promo Model</button>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#2C2240] font-normal  !transition-all !duration-1000 !ease-in text-[#F3F0FF] px-[20px] py-[6px] rounded-md">Bar Back</button>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#F9F8FF] font-normal  !transition-all !duration-1000 !ease-in text-[#2C2240] px-[20px] py-[6px] rounded-md">Event Helper</button>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#F9F8FF] font-normal  !transition-all !duration-1000 !ease-in text-[#2C2240] px-[20px] py-[6px] rounded-md">Waiter</button>
                        <button style={{fontSize:scrollY ? "10px":"14px"}} className="bg-[#F9F8FF] font-normal  !transition-all !duration-1000 !ease-in text-[#2C2240] px-[20px] py-[6px] rounded-md">Bartender</button>
                    </div>
                    <div style={{ ...HERO_FILTER_STAFF,height:scrollY ? "50px":"77px",paddingBottom:scrollY ? "10px":"0px" }} className="flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
                        <div style={{ width: '28%' }} className="text-start space-y-2">
                            <CommonSelect
                                options={LOCATION}
                                style={{fontSize:scrollY ? "12px":"16px"}}
                                valueKey="value"
                                labelKey="label"
                                defaultValue="0"
                                onChange={handleLocationChange}
                                className="text-[#2C2240] md:text-[16px] font-normal 2xl:text-[20px] !transition-all !duration-1000 !ease-in"
                                icon={<Image src='/images/gallery/location.svg' alt='location-svg' width={15} height={15} />}
                            />
                            <span style={{fontSize:scrollY ? "12px":"14px"}} className='block 2xl:text-[15px] text-start pl-[10px] md:text-[14px] font-normal text-[#696969]'>{'Manhattan, New York'}</span>
                        </div>
                        <Image style={{ margin: 0 }} src="/images/Line 4.png" alt="" width={2.5} height={2.5} />
                        <div style={{ width: '36%' }} className=" text-start space-y-2">
                            <CommonSelect
                                options={TIMES_CONST}
                                style={{fontSize:scrollY ? "12px":"16px"}}
                                valueKey="value"
                                labelKey="label"
                                defaultValue="0"
                                onChange={handleTimeChange}
                                className="text-[#2C2240] md:text-[16px] font-normal 2xl:text-[20px] !transition-all !duration-1000 !ease-in"
                                icon={<Image src='/images/gallery/date-time.svg' alt='location-svg' width={15} height={15} />}
                            />
                            <span   style={{fontSize:scrollY ? "12px":"14px"}} className='!transition-all !duration-1000 !ease-in block 2xl:text-[15px] text-start pl-[10px] md:text-[14px] font-normal text-[#696969]'>{'July, 22, 2024 - July 24, 2024'}</span>
                        </div>
                        <Image src="/images/Line 4.png" alt="" width={2.5} height={2.5} />
                        <div className={`${scrollY ? "space-y-2 ":"space-y-3"} !transition-all !duration-1000 !ease-in`}  style={{ width: '36%' }}>
                            <div className='flex justify-center items-center space-x-6'>
                                <span className='px-[14px] py-[2px] text-white text-[12px] bg-[#f79809] rounded-lg font-normal'>All</span>
                                <div className="flex items-center">
                                
                                    <Image src="/images/staff-listing/staff-star.svg" alt="" width={120} height={18} />
                                </div>
                            </div>
                            <div className='flex justify-center items-center space-x-6'>
                                <span className=''>
                                    <Image src='/images/gallery/person.svg' alt='cocktail' className='relative bottom-[2px] right-[1px]' width={13.4} height={13.4} />
                                </span>
                                <div className="flex items-center space-x-2.5 text-[12px] text-[#696969] relative left-[16px]">
                                    <span>02</span>
                                    <span>07</span>
                                    <span>29</span>
                                    <span>59</span>
                                    <span>73</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default StaffFilters
