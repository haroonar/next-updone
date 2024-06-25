import People from '@/app/components/dummy-data';
import Image from 'next/image';
import React from 'react';

// Define types for the staff data
export interface Staff {
  id: number;
  name: string;
  city: string;
  country: string;
  hourRate: number;
  totalJobs: number;
  services: string[];
  img: string;
}
const heroFilters: any = {
  gap: '0px',
  borderRadius: '8px',
  borderWidth: '0.6px 0 0 0',
  position: 'relative',
  top: '0px',
  left: '6.5px',
  width: '80%',
  height: '77px',
  margin: 'auto',
  backgroundColor: '#ffffff',
  borderStyle: 'solid',
  borderColor: '#464646',
  border: '0.6px solid #464646'
};

const StaffListing: React.FC = () => {
  return (
    <div className="container mx-auto md:px-[315px] 2xl:px-[310px]">
      
      <div className='mt-[130px] mb-[65px]'>
        <div className="flex justify-center items-center mt-4 w-full space-x-2 mb-4">
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Cocktail Server</button>
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Promo Model</button>
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Bar Back</button>
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Event Helper</button>
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Waiter</button>
          <button className="bg-[#F9F8FF] text-black px-3 py-[2px] rounded-md">Bartender</button>

        </div>
        <div style={{ ...heroFilters }} className="flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
          <div className="w-1/4 text-start space-y-2">
            <div className="relative inline-flex border-none shadow-none">
              {/* SVG icon */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              {/* Dropdown */}
              <select
                className="font-[500] block appearance-none w-full  md:text-[12px] 2xl:text-[20px] bg-white pl-10 rounded focus:outline-none focus:shadow-outline"
                defaultValue="0"
              >
                <option value="0">Location</option>
                <option value="Audi">Waiters</option>
                <option value="BMW">Cocktail Servers</option>
                <option value="Citroen">Bar Backs</option>
                <option value="Ford">Promo Models</option>
                <option value="Honda">Event Helper</option>
              </select>
            </div>
            <span className='block 2xl:text-[15px] text-start pl-[9px] md:text-[10px] text-[#696969]'>{'Manhattan, New York'}</span>

          </div>


          <img src="./images/Line 4.png" alt="" />
          <div className="w-1/4 text-start space-y-2">
            <div className="relative inline-flex border-none shadow-none">
              {/* SVG icon */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 11.039C13.916 11.039 11 13.955 11 17.539C11 21.102 13.916 24 17.5 24C21.084 24 24 21.084 24 17.5C24 13.937 21.084 11.039 17.5 11.039ZM17.5 23C14.468 23 12 20.55 12 17.539C12 14.506 14.468 12.039 17.5 12.039C20.532 12.039 23 14.489 23 17.5C23 20.533 20.532 23 17.5 23ZM18.854 18.146C19.049 18.341 19.049 18.658 18.854 18.853C18.756 18.951 18.628 18.999 18.5 18.999C18.372 18.999 18.244 18.95 18.146 18.853L17.146 17.853C17.052 17.759 17 17.632 17 17.499V15.499C17 15.223 17.224 14.999 17.5 14.999C17.776 14.999 18 15.223 18 15.499V17.292L18.854 18.146ZM19.5 2H18V0.5C18 0.224 17.776 0 17.5 0C17.224 0 17 0.224 17 0.5V2H7V0.5C7 0.224 6.776 0 6.5 0C6.224 0 6 0.224 6 0.5V2H4.5C2.019 2 0 4.019 0 6.5V19.5C0 21.981 2.019 24 4.5 24H10.5C10.776 24 11 23.776 11 23.5C11 23.224 10.776 23 10.5 23H4.5C2.57 23 1 21.43 1 19.5V9H23V10.5C23 10.776 23.224 11 23.5 11C23.776 11 24 10.776 24 10.5V6.5C24 4.019 21.981 2 19.5 2ZM1 8V6.5C1 4.57 2.57 3 4.5 3H19.5C21.43 3 23 4.57 23 6.5V8H1Z" fill="black" />
                </svg>
              </div>

              {/* Dropdown */}
              <select
                className="font-[500] block appearance-none w-full 2xl:text-[20px] 2xl:pr-0 md:text-[12px] bg-white pl-10  rounded focus:outline-none focus:shadow-outline"
                defaultValue="0"
              >
                <option value="0">Day & Time</option>
                <option value="Audi">Waiters</option>
                <option value="BMW">Cocktail Servers</option>
                <option value="Citroen">Bar Backs</option>
                <option value="Ford">Promo Models</option>
                <option value="Honda">Event Helper</option>
              </select>
            </div>
            <span className='block 2xl:text-[15px] text-start pl-[10px]  md:text-[10px] text-[#696969]'>{'July 24, 2024'}</span>

          </div>
          <img src="./images/Line 4.png" alt="" />
          <div className="w 2/5 space-y-1.5">
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
              <span className='relative right-[10px]'><svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
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
      <div className="relative grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 justify-center items-center z-10">
        {People.length === 0 ? (
          <p className="text-center text-xl mt-20">No staff found, sorry.</p>
        ) : (
          People.map((staff: Staff) => (
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
          ))
        )}
      </div>
      {/* pagination */}
      <div className='h-10 my-4 w-full'>
        <div>
          View Per Page:       <select
          className='w-14 h-8 border-none bg-[#f3f0ff] rounded-md focus:border-none p-1'
            defaultValue="0"
          >
            <option value="0">09</option>
            <option value="Audi">06</option>
            <option value="Audi">06</option>
            <option value="Audi">06</option>

          </select>
        </div>
      </div>
    </div>
  );
};

export default StaffListing;
