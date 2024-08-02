"use client"

import { Suspense, useEffect, useState } from "react";
import BookingForm from '@/app/components/booking/Form';
import BookingStyles from "@/app/components/booking/booking-styles";
import { montserrat } from "@/app/libs/Fonts";
import Link from "next/link";
import { useAppSelector } from "@/app/libs/store/hooks";
import { selectStaff, setJobData } from "@/app/libs/store/features/staffSlice";
import { apiRequest } from "@/app/libs/services";
import { selectAuth } from "@/app/libs/store/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Page() {
  const [changeActiveColor, setChangeActiveColor] = useState(false)
  const [currentStep, setCurrentStep] = useState<any>(0)
  const [secondFormData, setSecondFormData] = useState<any>()
  console.log('secondFormData', secondFormData)
  const [workingTimes, setWorkingTimes] = useState<any>([]);
  console.log('workingTimes', workingTimes)
  const { inviteCount } = useAppSelector(selectStaff);
  const { auth: storedData } = useAppSelector(selectAuth);
  const dispatch=useDispatch()
  console.log('storedData', storedData)
  const [selectedServiceId, setSelectedServiceId] = useState(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedId = localStorage.getItem('selectedServiceId');
      return storedId ? parseInt(storedId, 10) : 1;
    } else {
      console.log('localStorage is not supported or window is not defined.');
      return 1; // Default value
    }
  });
console.log('selectedServiceId i want to see', selectedServiceId)
  console.log('inviteCount', inviteCount)
  const onThirdSubmit = async () => {
    const body = {
      city_id: Number(secondFormData?.city),
      postal_code: secondFormData?.postalcode,
      event_location:secondFormData?.location,
      address: secondFormData?.address,
      service_id: selectedServiceId,
      title:secondFormData?.message1,
      description: secondFormData?.message2,
      working_times: workingTimes,
      invited_workers: [1]

    };

    try {
      const newData = await apiRequest('/job', {
        method: 'POST',
        body: body,
        headers:{
          ...(storedData && { 'Authorization': `Bearer ${storedData.token}` })
        }
        
      }); // API call
      console.log('newData', newData)
      dispatch(setJobData(newData));
    } catch (error) {
      toast.error('Failed to login. Please check your credentials.');
      // Handle error state or display an error message
    } finally {
    }
    // // Check if workingTimes exists and is not an empty array
    // if (workingTimes && workingTimes.length > 0) {
    //   next(); // Call the next function if the array is not empty
    // } else {
    //   setTimeMessage("Please add start & end time")
    // }
  };
  return (
    <div style={{ overflowX: 'clip' }} className='relative h-screen'>
      {currentStep === 1 &&
        <div className="max-w-[1279px] mx-auto">
          <div  className='show-jobs-shadow flex justify-around items-center shadow- !w-full bg-[#FFFFFF] left-0 py-[20px] fixed z-[9999] bottom-0'>
            <div >
              <h2 className={`${montserrat.className} tracking-[-1%] text-[#2C2240] font-[600] text-[24px] leading-[29.26px]`}><span className="!text-[#350ABC] mr-[8px]">{inviteCount ? inviteCount:"0"}</span>People You have Invited to your Job</h2>
              <p className="tracking-[-1%] text-[#2C2240] font-[400] text-[12px] leading-[18px]">Please click send invite button to invite workers to your job</p>
            </div>
            <Link onClick={onThirdSubmit}  href='/staff/offers' className="!tracking-[-2%] rounded-[4px] !text-[#F3F0FF] !bg-[#774DFD] !font-[400] !text-[14px] !leading-[24px] !py-[18px] !px-[26px]">
              + Post Your Job Now
            </Link>
          </div>
        </div>

      }
      <BookingStyles />

      <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
        <BookingForm workingTimes={workingTimes} setWorkingTimes={setWorkingTimes} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} secondFormData={secondFormData} setSecondFormData={setSecondFormData} currentStep={currentStep} setCurrentStep={setCurrentStep} setChangeActiveColor={setChangeActiveColor} changeActiveColor={changeActiveColor} />
      </Suspense>
    </div>
  );
}
