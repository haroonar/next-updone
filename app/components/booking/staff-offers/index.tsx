"use client"
import { lato, montserrat } from '@/app/libs/Fonts';
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiLineVerticalThin } from 'react-icons/pi';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/app/libs/store/hooks';
import { selectStaff } from '@/app/libs/store/features/staffSlice';
import { apiRequest } from '@/app/libs/services';
import { selectAuth } from '@/app/libs/store/features/authSlice';
import { useRouter } from 'next/navigation';
const Faqs = dynamic(() => import('../../home/faqs'), {
  ssr: false, // Do not SSR for this component
});
const OffersTabs = dynamic(() => import('../booking-offers-tabs'), {
  ssr: false, // Do not SSR for this component
});
const StaffOffers = () => {
  const { jobData } = useAppSelector(selectStaff);
  const [jobDetailData, setData] = useState<any>([])
  console.log('jobData yes its pewrsisted in StaffOffersStaffOffersStaffOffersStaffOffersStaffOffersStaffOffers', jobDetailData)
  const [activeTab, setActiveTab] = useState('a');
  const { auth: storedData } = useAppSelector(selectAuth);
  const router=useRouter()
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      try {
        const newData = await apiRequest(`/job/${jobData?.id}`, {
          method: 'GET',
          headers: {
            ...(storedData && { 'Authorization': `Bearer ${storedData.token}` })
          }
        }); // API call
        console.log('newData fetchDataIfNeeded', newData)
        router.refresh()
        setData(newData); // Update state with fetched data
      } catch (error) {
        // Handle error state or display an error message
      } finally {
        router.refresh()
      }
    };

    fetchDataIfNeeded(); // Call the function to fetch data
  }, [router,jobDetailData]);

  return (
    <div className='max-w-[1279px] mx-auto'>
      <section className='mt-[130px] min-h-[309px] max-h-[600px] rounded-[29px] border-[1px] bg-[#FFF] flex  border-[#F0F0F0] !py-[40px] px-[40px]'>
        <div className='w-[35%] space-y-[30px] flex justify-start items-center'>
          <div>
            <div className='flex !justify-start !items-start flex-col'>
              <h6 className='flex items-center gap-1 text-[#2C2240] text-[14px] font-[500] leading-[30px]'><GoDotFill />Open</h6>
              <span className='relative bottom-1 left-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="69" height="2" viewBox="0 0 69 2" fill="none">
                  <path d="M1 0.75H68" stroke="#2C2240" stroke-linecap="round" />
                </svg>
              </span>
              <h2 className={`${montserrat.className} mt-[10px] tracking-[-1.6px] leading-normal text-[#000000] !font-[700]  text-[40px]`}>
                {jobDetailData?.title}
              </h2>
              <h3 className='text-[16px] leading-[26px]  py-[4px] px-[20px] text-[#2C2240] bg-[#F3F0FF] rounded-[32px] mt-[20px]'>Bartender</h3>
            </div>
          </div>
        </div>
        <div className='w-[65%]'>
          <div className='absolute top-[45px] !w-[100%] !max-w-[799px] mx-auto pb-[43px] px-[20px]'>
            <div className='flex justify-between items-center border-b border-[#8686860F] pb-[15px]'>
              <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[20px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} alt='verified' src='/images/staff-listing/map.svg' />Event Location:</div>
              <div className='flex justify-center items-center gap-[6px] !text-[16px] font-[400] tracking-[-0.32px] leading-[24px] text-[#878688]'>{jobDetailData?.event_location}<Image width={16} height={16} alt='verified' src='/images/booking/editPancel.svg' /></div>
            </div>
            <div className='flex justify-between items-center border-b border-[#8686860F] py-[15px]'>
              <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[20px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} alt='verified' src='/images/booking/time.svg' />Event Time & Date:</div>
              <div className='flex justify-center items-center gap-[6px] !text-[16px] font-[400] tracking-[-0.32px] leading-[24px] text-[#878688]'>24 July, 2024 11:00 am - 03:00 pm<Image width={16} height={16} alt='verified' src='/images/booking/editPancel.svg' /></div>
            </div>
            <div className='flex flex-col justify-between items-start gap-[18px] py-[15px]'>
              <div className='flex justify-center items-center gap-[6px] text-[#000000] text-[20px] leading-normal tracking-[-0.28px] font-[500]'><Image width={16} height={16} src='/images/booking/detailTask.svg' alt='user' />Task Details</div>
              <div className='flex justify-center items-center gap-[6px] !text-[16px] font-[400] tracking-[-0.32px] leading-[24px] text-[#878688] !w-[101%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor..... </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-[#DFDFDF] mt-[79px]">
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
      <div className='py-[32px] px-[40px] mt-[75px] bg-[#FFF] rounded-[8px] mb-[86px]' style={{ boxShadow: "0px 6px 26px 0px rgba(0, 0, 0, 0.07)" }}>
        <h2 className='text-[#000000] tracking-[-0.96px] leading-[24px] font-[500] text-[48px] mb-[20px]'>Cancellation Policy</h2>
        <p className='text-[#6B6B6B] tracking-[-0.32px] leading-[30px] font-[400] text-[16px] mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis parturient montes. Nibh sed pulvinar proin gravida hendrerit. </p>
        <h3 className={`${lato.className} text-[#350ABC] tracking-[-0.32px] leading-[30px] font-[700] text-[16px]`}>Learn More</h3>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Faqs isJobDetailsFaqs />
      </Suspense>
    </div>
  )
}

export default StaffOffers
