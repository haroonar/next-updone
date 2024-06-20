'use client'
import Image from 'next/image';
import { useState } from 'react';
import ResponsiveImage from './components/Image';
import Services from './components/Services';
import HowWork from './components/HowWork';
import OurSponsors from './components/sponsors';
import Security from './components/security';
import Accordion from './components/accordian';

const Home = () => {
  const [selectedValue, setSelectedValue] = useState('Bartenders');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    setSelectedValue(selectedText)
    event.target.value = '0'; // Reset the dropdown to show "Services"
  };
  return (
    <>
      <main className="h-screen flex flex-col justify-end items-center mt-10">
        <div className="text-center text-[#f5f5f5] md:text-[200px] font-bold uppercase relative top-[55px] 2xl:text-[250px]">Workers</div>
        <Image layout="intrinsic" src="./background.svg" height={100} width={100} alt="Background" className="w-full h-auto" />
        {/* Add your content here */}
        <div className="absolute flex flex-col items-center justify-center text-white text-lg">
          <span className="text-black font-bold md:font-extrabold text-[60px] md:text-[80px] 2xl:text-[130px] leading-[80px] md:leading-[120px] 2xl:leading-[188px] ">
            BOOK <strong className="text-[#350abc]">EVENT</strong>
          </span>
          <span className="text-black font-bold md:font-extrabold text-[60px] md:text-[80px] 2xl:text-[130px] mb-[75px] 2xl:mb-[55px]">
            <strong className="text-[#350abc]">STAFF</strong> IN A SNAP!
          </span>

          <div className="hero-filters flex space-x-3 w-full p-1 text-black justify-center items-center text-center">
            <div className="w-1/5">
              <div className="relative inline-block border-none shadow-none px-[14px]">
                <select
                  className="block appearance-none md:w-[90px] 2xl:w-[100px] 2xl:text-[20px] font-[500] md:text-[15px] bg-white pr-4 rounded focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                  defaultValue="0"
                >
                  <option value="0">Services</option>
                  <option value="Audi">Waiters</option>
                  <option value="BMW">Cocktail Servers</option>
                  <option value="Citroen">Bar Backs</option>
                  <option value="Ford">Promo Models</option>
                  <option value="Honda">Event Helper</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3H3V10H10V3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 3H14V10H21V3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 14H14V21H21V14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 14H3V21H10V14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <span className='block md:text-[10px] 2xl:text-[15px]  text-[#696969] mr-[30px]'>{selectedValue}</span>
            </div>
            <img src="./images/Line 4.png" alt="" />
            <div className="w-1/4">
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
                  className="font-[500] block appearance-none w-full  md:text-[15px] 2xl:text-[20px] bg-white pl-10 rounded focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
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
            <div className="w-1/4">
              <div className="relative inline-flex border-none shadow-none">
                {/* SVG icon */}
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-black">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11.039C13.916 11.039 11 13.955 11 17.539C11 21.102 13.916 24 17.5 24C21.084 24 24 21.084 24 17.5C24 13.937 21.084 11.039 17.5 11.039ZM17.5 23C14.468 23 12 20.55 12 17.539C12 14.506 14.468 12.039 17.5 12.039C20.532 12.039 23 14.489 23 17.5C23 20.533 20.532 23 17.5 23ZM18.854 18.146C19.049 18.341 19.049 18.658 18.854 18.853C18.756 18.951 18.628 18.999 18.5 18.999C18.372 18.999 18.244 18.95 18.146 18.853L17.146 17.853C17.052 17.759 17 17.632 17 17.499V15.499C17 15.223 17.224 14.999 17.5 14.999C17.776 14.999 18 15.223 18 15.499V17.292L18.854 18.146ZM19.5 2H18V0.5C18 0.224 17.776 0 17.5 0C17.224 0 17 0.224 17 0.5V2H7V0.5C7 0.224 6.776 0 6.5 0C6.224 0 6 0.224 6 0.5V2H4.5C2.019 2 0 4.019 0 6.5V19.5C0 21.981 2.019 24 4.5 24H10.5C10.776 24 11 23.776 11 23.5C11 23.224 10.776 23 10.5 23H4.5C2.57 23 1 21.43 1 19.5V9H23V10.5C23 10.776 23.224 11 23.5 11C23.776 11 24 10.776 24 10.5V6.5C24 4.019 21.981 2 19.5 2ZM1 8V6.5C1 4.57 2.57 3 4.5 3H19.5C21.43 3 23 4.57 23 6.5V8H1Z" fill="black" />
                  </svg>
                </div>

                {/* Dropdown */}
                <select
                  className="font-[500] block appearance-none w-full 2xl:text-[20px] 2xl:pr-0 text-[15px] bg-white pl-10  rounded focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
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
            <div className="w-2/5 space-y-1.5">
              <div className='flex justify-center items-center space-x-6'>
                <span className='px-[14px] py-[0px] text-white text-[14px] bg-black rounded-lg font-[200]'>All</span>
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
          <ResponsiveImage src="/images/hero/hero.png" alt="Hero Image" />
        </div>
      </main>
      <div className='overflow-hidden'>
        <Services />
        <OurSponsors />
        <HowWork />
        <Security />
        <Accordion/>
      </div>
    </>

  );
};

export default Home;
