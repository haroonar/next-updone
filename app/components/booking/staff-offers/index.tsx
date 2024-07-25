"use client"
import { lato, montserrat } from '@/app/libs/Fonts';
import Image from 'next/image';
import React, { Suspense, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiLineVerticalThin } from 'react-icons/pi';
import dynamic from 'next/dynamic';
const Faqs = dynamic(() => import('../../home/faqs'), {
  ssr: false, // Do not SSR for this component
});
const OffersTabs = dynamic(() => import('../booking-offers-tabs'), {
  ssr: false, // Do not SSR for this component
});
const StaffOffers = () => {

  const [activeTab, setActiveTab] = useState('a');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  
  return (
    <div className='max-w-[1279px] mx-auto'>
      <section className='mt-[130px] rounded-[29px] gap-[90px] border-[1px] bg-[#FFF] flex  border-[#F0F0F0] !pb-[130px] pt-[60px] px-[40px]'>
        <div className='w-[55%] space-y-[30px] flex justify-center items-center'>
          <div>
            <div className='flex !justify-start !items-start flex-col'>
              <h6 className='flex items-center gap-1 text-[#2C2240] text-[14px] font-[500] leading-[30px]'><GoDotFill />Job Posted</h6>
              <span className='relative bottom-1 left-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="69" height="2" viewBox="0 0 69 2" fill="none">
                  <path d="M1 0.75H68" stroke="#2C2240" stroke-linecap="round" />
                </svg>
              </span>
              <h1 className={`${montserrat.className} mt-[10px] tracking-[-2.16px] leading-normal text-[#000000] !font-[700]  text-[54px]`}>
                Sit tight while we find worker for you.
              </h1>
              <h3 className='text-[20px] leading-[36px] text-[#6B6B6B] mt-[10px]'>We will notify you when new offer comes in.</h3>
            </div>
          </div>
        </div>
        <div className='w-[45%]'>
          <div style={{ borderTopLeftRadius: '16px', borderTopRightRadius: "16px" }} className=' py-[16px] px-[32px] flex justify-between items-center absolute bg-[#F3F0FF] w-[498px] top-[46px]'>
            <div>
              <h2 className={`${montserrat.className} text-[#000000] text-[30px] font-[700] tracking-[-0.6px] leading-normal`}>Bartender</h2>
              <div className='flex justify-start items-center gap-[8px] text-[#2C2240] opacity-[0.9px] font-[400] leading-[26px] tracking-[-0.32px]'>
                <IoEyeOutline className='text-[#2C2240]' />  3 View
              </div>
            </div>
            <div>
              <Image width={42} height={42} alt='verified' src='/images/services/bartander.svg' />
            </div>
          </div>
          <div >
            <Image className='top-[90px] relative' width={500} height={450} src='/images/booking/offers/staff-detail.svg' alt='detail' />
            <div className='absolute top-[45px] !w-[32.6%] !max-w-[495px] mx-auto pb-[43px] pt-[110px] px-[20px]'>
              <div className='flex justify-between items-center border-b border-[#8686860F] py-[25.5px]'>
                <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[14px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} alt='verified' src='/images/staff-listing/map.svg' />Event Location:</div>
                <div className='flex justify-center items-center gap-[6px] !text-[13px] font-[400] tracking-[-0.26px] leading-[26px] text-[#878688]'>3796 Stutler Lane, Altoona, PA, 16601<Image width={16} height={16} alt='verified' src='/images/booking/editPancel.svg' /></div>
              </div>
              <div className='flex justify-between items-center border-b border-[#8686860F] py-[28.5px]'>
                <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[14px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} alt='verified' src='/images/booking/time.svg' />Event Time & Date:</div>
                <div className='flex justify-center items-center gap-[6px] !text-[13px] font-[400] tracking-[-0.26px] leading-[26px] text-[#878688]'>24 July, 2024 11:00 am - 03:00 pm<Image width={16} height={16} alt='verified' src='/images/booking/editPancel.svg' /></div>
              </div>
              <div className='flex flex-col justify-between items-start gap-[18px] border-b border-[#8686860F] py-[28.5px]'>
                <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[14px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} src='/images/booking/detailTask.svg' alt='user' />Task Details</div>
                <div className='flex justify-center items-center gap-[6px] !text-[13px] font-[400] tracking-[-0.26px] leading-[26px] text-[#878688] !w-[101%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor..... </div>
              </div>
              <div className='flex justify-between items-center py-[28.5px]'>
                <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[14px] leading-normal tracking-[-0.28px] font-[500]'>Contact:</div>
                <div className='flex justify-center items-center gap-[6px] !text-[13px] font-[400] tracking-[-0.26px] leading-[26px] text-[#878688]'><FiMapPin className='relative bottom-[1px]' /> +1 456-789-5436  <span><PiLineVerticalThin /></span> <CiMail className='relative bottom-[1px]' /> joejhones1@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-[#DFDFDF] mt-[86px]">
        <button
          onClick={() => handleTabClick('a')}
          className={`px-4 pb-[16px] py-2  ${activeTab === 'a' ? 'text-[16px] font-[600] leading-[30px] border-b border-[#350ABC] text-[#350ABC] ' : ' text-[#6B6B6B] font-[500] leading-[30px] text-[16px]'
            }`}
        >
          Offers
        </button>
        <button
          onClick={() => handleTabClick('b')}
          className={`px-4 pb-[16px] py-2 ${activeTab === 'b' ? 'text-[16px] font-[600] leading-[30px] border-b border-[#350ABC] text-[#350ABC]' : ' text-[#6B6B6B] font-[500] leading-[30px] text-[16px]'
            }`}
        >
          Invites Sent
        </button>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <OffersTabs activeTab={activeTab} />
      </Suspense>
      <div className='py-[32px] px-[40px] mt-[80px] bg-[#FFF] rounded-[8px] mb-[86px]' style={{boxShadow:"0px 6px 26px 0px rgba(0, 0, 0, 0.07)"}}>
        <h2 className='text-[#000000] tracking-[-0.96px] leading-[24px] font-[500] text-[48px] mb-[20px]'>Cancellation Policy</h2>
        <p className='text-[#6B6B6B] tracking-[-0.32px] leading-[30px] font-[400] text-[16px] mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes. Nibh sed pulvinar proin gravida hendrerit. </p>
        <h3 className={`${lato.className} text-[#350ABC] tracking-[-0.32px] leading-[30px] font-[700] text-[16px]`}>Learn More</h3>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Faqs isJobDetailsFaqs/>
      </Suspense>
    </div>
  )
}

export default StaffOffers
