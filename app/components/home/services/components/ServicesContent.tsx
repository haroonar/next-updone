"use client";
import { montserrat } from '@/app/libs/Fonts';
import { apiRequest } from '@/app/libs/services';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ServicesContent = ({ name, description, serviceSrc, id }: any) => {
    const [selectedService, setSelectedService] = useState<{id: string ,name:string} | null>(null);
    const handleClick = () => {
        // Store the selected service ID in localStorage
        localStorage.setItem('selectedServiceId', id);
        localStorage.setItem('selectedServiceName', name);
        // Update the state to reflect the selected service
        setSelectedService({name,  id });
    };


    return (
        <div className='w-[100%] m-auto relative z-10 bottom-[95px] right-[19.5px]'>
            <Image src="/images/services/serivceContent.svg" alt="service" className='max-w-[452px]' quality={100} width={810} height={692} />
            <Image src="/images/services/contentShadow.svg" alt="service" className='absolute bottom-[202px]' quality={100} width={810} height={692} />
            <div className='flex justify-between items-start h-full gap-4 flex-col'>
                <div className='w-[80%] relative bottom-[224px] left-[64px]'>
                    <div className='flex justify-end items-end w-full relative right-[-15px] bottom-[-12px]'>
                        <Image quality={100} src={serviceSrc} alt="service" width={name === "Barbacks" ? 42 : 36} height={36} />
                    </div>
                    <h2 
                        className={`${montserrat.className} text-[24px] font-[600] leading-normal pb-2 translate-[-0.24px] text-[#000000] cursor-pointer`}
                        
                    >
                        {name}
                    </h2>
                    <p className='text-[#6B6B6B] text-[14px] bold-[400] leading-[24px] translate-[-0.32px]'>{description}</p>
                </div>
                <div>
                    <Link
                    href='/staff/booking' 
                        onClick={handleClick}
                        style={{
                            marginTop: name === "Bartenders" || name === "Promo Models" ? "0px" : "",
                            bottom: name === "Barbacks" ? "225px" : "219px"
                        }}
                        className={`text-[14px] font-[500] text-[#2C2240] leading-[24px] tracking-[-0.28px] flex justify-start relative left-[4.25rem] gap-2 items-center w-full`}
                    >
                        Book Now
                        <span>
                            <svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM1 4.5H34V3.5H1V4.5Z" fill="#2C2240" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;
