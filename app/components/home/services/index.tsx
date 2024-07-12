'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import FormDecoration from '../../common/form-decoration';
import Link from 'next/link';
import ServicesContent from './components/ServicesContent';
import ServiceImageWithSkeleton from '../../ui/image-skeleton/ServicesImageSkeleton';

const services = [
  {
    name: "Bartenders",
    description: "Certified professionals crafting delicious drinks and keeping the party flowing.",
    serviceSrc: '/images/services/bartander.svg',
    imgSrc: '/images/services/bartander.jpg',
    alt: 'Bartender',
  },
  {
    name: "Waiters",
    description: "Attentive wait staff delivering food efficiently and adding a touch of elegance.",
    serviceSrc: '/images/services/waiter.svg',
    imgSrc: '/images/services/waiters.jpg',
    alt: 'Waiters',
  },
  {
    name: "Cocktail",
    description: "Experienced crew ensuring bartenders have everything they need for smooth service.",
    serviceSrc: '/images/services/cocktail.svg',
    imgSrc: '/images/services/cocktail.jpg',
    alt: 'Cocktail',
  },
  {
    name: "Promo Models",
    description: "Engaging models bringing your brand to life and captivating your audience.",
    serviceSrc: '/images/services/model.svg',
    imgSrc: '/images/services/barbacks.jpg',
    alt: 'Barbacks',
  },
  {
    name: "Event Helper",
    description: "Versatile helpers tackling setup, breakdown, and guest assistance for a seamless event.",
    serviceSrc: '/images/services/helper.svg',
    imgSrc: '/images/services/promomodel.jpg',
    alt: 'Promo Model',
  },
  {
    name: "Barbacks",
    description: "Experienced crew ensuring bartenders have everything they need for smooth service.",
    serviceSrc: '/images/services/barback.svg',
    imgSrc: '/images/services/eventhelper.jpg',
    alt: 'Event Helper',
  },
];

const Services = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);

  return (
    <>
    
      <div>
        <div className='py-[100px] bg-[FFFFFF]'>
          <h2 className='service-text mb-[70px]'>What <strong className='text-[#350ABC]'>services</strong> are <br /> you looking for?</h2>
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
              <FormDecoration position={{ position: 'absolute', top: "-395px", left: "-364px" }} />
              <div className="-m-1 flex flex-wrap md:gap-y-[135px] 2xl:gap-y-[30px]">
                {services.map((service, index) => (
                  <div key={index} className="w-1/3 p-2">
                    <div className="w-full min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                      <ServiceImageWithSkeleton
                      setIsServiceLoaded={setIsServiceLoaded}
                      isServiceLoaded={isServiceLoaded}
                        src={service.imgSrc}
                        alt={service.alt}
                        width={413}
                        height={240}
                      />
                      <ServicesContent 
                      setIsLoaded={setIsLoaded}
                      isLoaded={isLoaded}
                        name={service.name} 
                        description={service.description} 
                        serviceSrc={service.serviceSrc} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full text-center md:mt-[64px] 2xl:mt-[-40px] mb-[26px] cursor-pointer'>
        <Link href={'/staff'} className="text-[#F3F0FF] justify-center bg-[#2C2240] rounded-[4px] text-[16px] font-normal px-[50px] py-[18px] text-center inline-flex items-center me-2">
          Hire Required Staff Now!
        </Link>
      </div>
    </>
  );
};

export default Services;
