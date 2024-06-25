import CommonSelect from '@/app/components/common/select-option'
import { HERO_FILTER_STAFF, LOCATION, TIMES_CONST } from '@/app/libs/Constants'
import Image from 'next/image'
import React from 'react'
type StaffFiltersProps={
    handleTimeChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
    handleLocationChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}
const StaffFilters = ({handleTimeChange,handleLocationChange}:StaffFiltersProps) => {
    return (
        <div className='mt-[130px] mb-[65px]'>
            <div className="flex justify-center items-center mt-4 w-full space-x-2 mb-4">
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Cocktail Server</button>
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Promo Model</button>
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Bar Back</button>
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Event Helper</button>
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Waiter</button>
                <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Bartender</button>
            </div>
            <div style={{ ...HERO_FILTER_STAFF }} className="flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
                <div className="w-1/4 text-start space-y-2">
                    <CommonSelect
                        options={LOCATION}
                        valueKey="value"
                        labelKey="label"
                        defaultValue="0"
                        onChange={handleLocationChange}
                        className="md:text-[12px] 2xl:text-[20px]"
                        icon={<Image src='/images/gallery/location.svg' alt='location-svg' width={15} height={15} />}
                    />
                    <span className='block 2xl:text-[15px] text-start pl-[9px] md:text-[10px] text-[#696969]'>{'Manhattan, New York'}</span>
                </div>
                <Image src="/images/Line 4.png" alt="" width={2.5} height={2.5} />
                <div className="w-1/4 text-start space-y-2">
                    <CommonSelect
                        options={TIMES_CONST}
                        valueKey="value"
                        labelKey="label"
                        defaultValue="0"
                        onChange={handleTimeChange}
                        className="2xl:text-[20px] 2xl:pr-0 md:text-[12px]"
                        icon={<Image src='/images/gallery/date-time.svg' alt='location-svg' width={15} height={15} />}
                    />
                    <span className='block 2xl:text-[15px] text-start pl-[10px] md:text-[10px] text-[#696969]'>{'July 24, 2024'}</span>
                </div>
                <Image src="/images/Line 4.png" alt="" width={2.5} height={2.5} />
                <div className="w-2/5 space-y-1.5">
                    <div className='flex justify-center items-center space-x-6'>
                        <span className='px-[14px] py-[0px] text-white text-[14px] bg-black rounded-lg font-[400]'>All</span>
                        <div className="flex items-center">
                            <svg width="144" height="18" viewBox="0 0 149 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4625 1.76758L14.1937 7.30075L20.3014 8.19349L15.8819 12.4981L16.9249 18.5792L11.4625 15.7066L6.00001 18.5792L7.043 12.4981L2.62354 8.19349L8.73124 7.30075L11.4625 1.76758Z" stroke="#2C2240" stroke-width="0.94282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M42.9703 1.76758L45.7015 7.30075L51.8092 8.19349L47.3898 12.4981L48.4328 18.5792L42.9703 15.7066L37.5078 18.5792L38.5508 12.4981L34.1313 8.19349L40.2391 7.30075L42.9703 1.76758Z" stroke="#2C2240" stroke-width="0.94282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M74.4786 1.76758L77.2098 7.30075L83.3175 8.19349L78.8981 12.4981L79.9411 18.5792L74.4786 15.7066L69.0161 18.5792L70.0591 12.4981L65.6396 8.19349L71.7474 7.30075L74.4786 1.76758Z" stroke="#2C2240" stroke-width="0.94282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M105.986 1.76758L108.718 7.30075L114.825 8.19349L110.406 12.4981L111.449 18.5792L105.986 15.7066L100.524 18.5792L101.567 12.4981L97.1475 8.19349L103.255 7.30075L105.986 1.76758Z" stroke="#2C2240" stroke-width="0.94282" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M137.495 1.76758L140.226 7.30075L146.334 8.19349L141.914 12.4981L142.957 18.5792L137.495 15.7066L132.032 18.5792L133.075 12.4981L128.656 8.19349L134.763 7.30075L137.495 1.76758Z" stroke="#2C2240" stroke-width="0.94282" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-6'>
                        <span className='relative right-[10px]'>
                            <Image src='/images/gallery/person.svg' alt='cocktail' width={13.4} height={13.4} />
                        </span>
                        <div className="flex items-center space-x-2.5 text-[13.5px] text-[#696969] relative left-[16px]">
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
    )
}

export default StaffFilters
