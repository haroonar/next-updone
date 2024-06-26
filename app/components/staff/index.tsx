'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import People from '../dummy-data';
import { Staff } from '@/app/types';
import CommonSelect from '../common/select-option';
import { PAGINATION_LIMIT } from '@/app/libs/Constants';
import StaffFilters from './components/staff-list-filter';
import StaffMap from './components/staff-list-map';

const StaffListing = () => {
  const router = useRouter();

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const handleStaffClick = (staff: Staff) => {
    const query = btoa(JSON.stringify(staff)); // base64 encode the staff object
    router.push(`/staff-list/detail?staff=${query}`);
  };

  return (
    <>
      <div className="fixed  z-[-1] left-0 top-0">
        <svg width="100vw" height="472" viewBox="0 0 1915 472" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1915 0H-3V472C705.5 136 1709.95 342.138 1915 472V0Z" fill="#F3F0FF" />
        </svg>

      </div>
      <div  className="max-w-[1279px] mx-auto">
        <StaffFilters handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} />
        <div className="relative md:top-10 2xl:top-22 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 justify-center items-center z-10">
          {People.length === 0 ? (
            <p className="text-center text-xl mt-20">No staff found, sorry.</p>
          ) : (
            People.map((staff: Staff) => (
              <div key={staff.id} onClick={() => handleStaffClick(staff)}>
                <StaffMap staff={staff} />
              </div>
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
  );
}

export default StaffListing;
