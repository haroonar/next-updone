"use client"

import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BookingForm from '@/app/components/booking/Form';
import { setBookingActive } from "@/app/libs/store/features/bookingSlice";
import BookingStyles from "@/app/components/booking/booking-styles";
import { montserrat } from "@/app/libs/Fonts";

export default function Page() {
  const [changeActiveColor, setChangeActiveColor] = useState(false)
  const [currentStep, setCurrentStep] = useState<any>(0)
  console.log('currentStep', currentStep)
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch setBookingActive action when entering the booking component
    dispatch(setBookingActive());

  }, [dispatch]); // Runs once on component mount and clean up on unmount

  return (
    <div style={{ overflowX: 'clip' }} className='relative h-screen'>
      {currentStep === 1 &&
        <div className="max-w-[1279px] mx-auto">
          <div  className='show-jobs-shadow flex justify-around items-center shadow- !w-full bg-[#FFFFFF] left-0 py-[20px] fixed z-[9999] bottom-0'>
            <div >
              <h2 className={`${montserrat} tracking-[-1%] text-[#2C2240] font-[600] text-[24px] leading-[29.26px]`}><span className="!text-[#350ABC] mr-[8px]">0</span>People You have Invited to your Job</h2>
              <p className="tracking-[-1%] text-[#2C2240] font-[400] text-[12px] leading-[18px]">Please click send invite button to invite workers to your job</p>
            </div>
            <button className="!tracking-[-2%] rounded-[4px] !text-[#F3F0FF] !bg-[#774DFD] !font-[400] !text-[14px] !leading-[24px] !py-[18px] !px-[26px]">
              + Post Your Job Now
            </button>
          </div>
        </div>

      }
      <BookingStyles />

      <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
        <BookingForm currentStep={currentStep} setCurrentStep={setCurrentStep} setChangeActiveColor={setChangeActiveColor} changeActiveColor={changeActiveColor} />
      </Suspense>
    </div>
  );
}
