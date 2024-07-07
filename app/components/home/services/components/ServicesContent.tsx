import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});
const ServicesContent = ({name,description,serviceSrc}:any) => {
    return (
        <div className='w-[100%] m-auto relative bottom-[95px] right-[23.5px]'>
            <Image src="/images/services/serivceContent.svg" alt="service" className='max-w-[452px]' width={800} height={685} />
            <div className='flex justify-between items-start h-full gap-4 flex-col'>
                <div className='w-[80%] relative bottom-[266px] left-[64px]'>
                    <div className='flex justify-end items-end w-full relative right-[-15px] bottom-[-12px]'>
                    <Image src={serviceSrc}  alt="service" width={name==="Barbacks"?42:36} height={36} />
                    </div>
                    <h1 className={`${montserrat.className} text-[24px] font-[600] leading-normal translate-[-0.24px] text-[#000000]`}>{name}</h1>
                    <p className='text-[#6B6B6B] text-[16px] bold-[400] leading-[26px] translate-[-0.32px]'>{description}</p>
                </div>
               <div>
               <Link href={'/staff'} style={{
  marginTop: name === "Bartenders" || name === "Promo Models" ? "25.5px" : "",
  bottom:name === "Barbacks" ? "260px" : "252px"
}}
className={`text-[14px] font-semibold text-[#2C2240] leading-[24px] tracking-[-0.28px] flex justify-start relative left-[4.25rem] gap-2 items-center w-full`}
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
    )
}

export default ServicesContent
