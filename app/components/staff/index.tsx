'use client'
import React, { useEffect, useState } from 'react';
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
    router.push(`/detail?staff=${query}`);
  };
  
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const svgStyle = {
    top: `-${scrollY}px`,
    transition: 'top 0.2s ease-out',
  };

  return (
    <>
      <div className="fixed z-[-1] left-0" style={svgStyle}>
        <svg width="100vw" height="472" viewBox="0 0 1915 472" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1915 0H-3V472C705.5 136 1709.95 342.138 1915 472V0Z" fill="#F3F0FF" />
        </svg>
      </div>
      <div className="max-w-[1279px] mx-auto">
        <StaffFilters scrollY={scrollY} handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} />
        <div className="relative md:top-10 2xl:top-22 grid gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 justify-center items-center z-10">
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
        <div className='h-10 mb-16 mt-24 w-full absolute '>
        <div className='flex justify-between items-center max-w-[1279px]'>
        <div>
            View Per Page:
            <CommonSelect
              options={PAGINATION_LIMIT}
              valueKey="value"
              labelKey="label"
              defaultValue="0"
              onChange={() => { }}
              className='w-14 h-8 border-none bg-white rounded-md focus:border-none p-1 ml-2'
              isLimit
            />
          </div>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-sm py-[8px] px-[24px]">
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-white  bg-[#350abc] hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
      <div className='h-[250px] bg-[#f3f0ff] w-[90vw] m-auto'>
      </div>
    </>
  );
}

export default StaffListing;
