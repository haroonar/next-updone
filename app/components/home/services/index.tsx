"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import FormDecoration from '../../common/form-decoration';
import Link from 'next/link';
import ServicesContent from './components/ServicesContent';
import { services } from '@/app/libs/Constants';
import { apiRequest } from '@/app/libs/services';
import { useRouter } from 'next/navigation';



const Services = () => {
  const [imageLoaded, setImageLoaded] = useState(Array(services.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(true);
  const router = useRouter()

  useEffect(() => {
    // Check if all images have loaded
    if (imageLoaded.includes(false)) {
      setAllImagesLoaded(false);
    } else {
      setAllImagesLoaded(true);
    }
  }, [imageLoaded]);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = false;
      return newLoaded;
    });
  };
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      try {
        const newData = await apiRequest('/services', {
          method: 'GET',
        }); // API call
        setData(newData?.data); // Update state with fetched data
      } catch (error) {
        // Handle error state or display an error message
      } finally {
        setLoading(false); // Hide loading indicator regardless of success or failure
      }
    };

    fetchDataIfNeeded(); // Call the function to fetch data
  }, []); // Dependency array ensures useEffect runs when currentPage or selectedCount changes
  const handleHireNowClick = () => {
    localStorage?.removeItem('selectedServiceId');
    localStorage?.removeItem('selectedServiceName');
    router.push('/staff/booking');
  };
  return (
    <>
      <div className='py-[100px] bg-[FFFFFF]'>
        <h2 className='service-text mb-[65px]'>What <strong className='text-[#350ABC]'>services</strong> are <br /> you looking for?</h2>
        <div className="relative pb-4">
          <div className="absolute top-[-337px] z-[-1] left-[-231px]" style={{ transform: 'rotate(86deg)' }}>
            <svg width="700" height="700" viewBox="0 0 601 1096" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M601 548C601 850.652 355.652 1096 53 1096C-249.652 1096 -495 850.652 -495 548C-495 245.348 -249.652 0 53 0C355.652 0 601 245.348 601 548ZM-491.004 548C-491.004 848.445 -247.445 1092 53 1092C353.445 1092 597.004 848.445 597.004 548C597.004 247.555 353.445 3.99622 53 3.99622C-247.445 3.99622 -491.004 247.555 -491.004 548Z" fill="#350ABC" />
            </svg>
          </div>
          <div className="absolute bottom-[-381px] right-[-6px]">
            <svg width="180" height="324" viewBox="0 0 280 424" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.03" d="M424 212C424 329.084 329.084 424 212 424C94.9156 424 0 329.084 0 212C0 94.9156 94.9156 0 212 0C329.084 0 424 94.9156 424 212ZM8.52023 212C8.52023 324.379 99.6212 415.48 212 415.48C324.379 415.48 415.48 324.379 415.48 212C415.48 99.6212 324.379 8.52023 212 8.52023C99.6212 8.52023 8.52023 99.6212 8.52023 212Z" fill="#350ABC" />
            </svg>
          </div>
          <div className='relative max-w-[1279px] m-auto'>
            <div className={`-m-1 flex flex-wrap  lg:gap-y-[80px] 2xl:gap-0`}>
              {services.map((service, index) => (
                <div key={index} className="w-1/3 p-2">
                  <div className="w-full min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                    {imageLoaded[index] && (
                      <div className="w-full min-h-[290px] max-h-[330px] animate-pulse bg-gray-300" />
                    )}
                    <div className={imageLoaded[index] ? "" : "bg-gray-300"}>
                      <Image
                        src={service.imgSrc}
                        alt={service.alt}
                        width={413}
                        height={240}
                        onLoad={() => handleImageLoad(index)}
                      />
                      {/* Other content related to the image */}
                    </div>
                    {!imageLoaded[index] && (
                      <ServicesContent
                        name={service.name}
                        description={service.description}
                        serviceSrc={service.serviceSrc}
                        id={service.id}
                      />

                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full text-center relative z-50 md:mt-[40px] 2xl:mt-[-40px] mb-[26px] cursor-pointer'>
        <button onClick={handleHireNowClick} className="text-[#F3F0FF] justify-center bg-[#2C2240] rounded-[4px] text-[16px] font-normal px-[50px] py-[18px] text-center inline-flex items-center me-2">
          Hire Required Staff Now!
        </button>
      </div>
    </>
  );
};

export default Services;