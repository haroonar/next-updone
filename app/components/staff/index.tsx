'use client'
import React from 'react';
import People from '../dummy-data';
import Image from 'next/image';
import { Staff } from '@/app/types';
import CommonSelect from '../common/select-option';
import { PAGINATION_LIMIT } from '@/app/libs/Constants';
import StaffFilters from './components/staff-list-filter';
import StaffMap from './components/staff-list-map';


const StaffListing = () => {
  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className="fixed top-[-186px] z-[-1] left-0" style={{ transform: 'rotate(50deg)' }}>
        <Image src='/images/gallery/top-left-corner.svg' alt='top-left-corner' width={500} height={500} />
      </div>
      <div className="container mx-auto md:px-[315px] 2xl:px-[310px]">
        <StaffFilters handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} />
        <div className="relative grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-center items-center z-10">
          {People.length === 0 ? (
            <p className="text-center text-xl mt-20">No staff found, sorry.</p>
          ) : (
            People.map((staff: Staff) => (
              <StaffMap staff={staff} />
            ))
          )}
        </div>
        {/* pagination */}
        <div className='h-10 my-4 w-full'>
          <div>
            View Per Page:
            <CommonSelect
              options={PAGINATION_LIMIT}
              valueKey="value"
              labelKey="label"
              defaultValue="0"
              onChange={() => { }}
              className='w-14 h-8 border-none bg-[#f3f0ff] rounded-md focus:border-none p-1'
              isLimit
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default StaffListing
