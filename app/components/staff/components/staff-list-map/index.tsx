import { Staff } from '@/app/types'
import Image from 'next/image'
import React from 'react'
type StaffMapProps={
    staff:Staff;
}
const StaffMap = ({staff}:StaffMapProps) => {
    return (
        <div key={staff.id} className="p-5 h-[365px] max-w-[264px] mx-auto rounded-lg overflow-hidden shadow-whiteeee z-10">
            <div className="pointer inline ml-[165px] text-white bg-[#350ABC] rounded-md pl-2 pr-2 py-[2px] text-right text-paragraph">
                {staff.hourRate}$/hr
            </div>
            <div className='flex flex-col h-[94%] items-start relative bottom-[22px]'>
                <Image
                    className="w-32 h-32 rounded-full object-cover"
                    src={staff.img}
                    width={500}
                    height={500}
                    alt=''
                />
                <div className="flex flex-col mt-4 items-start">
                    <div className="text-center font-bold text-lg">
                        {staff.name}
                    </div>
                    <div className="text-center text-paragraph text-[#989898]">
                        ({`${staff.city}, ${staff.country}`})
                    </div>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <div className="flex items-center text-paragraph">
                        <svg className="w-4 h-4 text-[#350ABC] me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-1 text-sm text-black">5.0/5 ({staff.totalJobs} Jobs)</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4 w-full">
                    {staff.services.map((service, index) => (
                        <p key={index} className="py-[6px] px-2 text-xs font-semibold rounded-[100px] ml-2 bg-[#f3f0ff]">
                            {service}
                        </p>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-4 w-full space-x-2">
                    <button className="bg-black border-[.5px] border-black text-white px-3 py-[2px] rounded-md">See More</button>
                    <button className="bg-white border-[.5px] border-black text-black px-3 py-[2px] rounded-md">See More</button>
                </div>
            </div>
        </div>
    )
}

export default StaffMap
