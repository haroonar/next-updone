"use client"

import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BookingForm from '@/app/components/booking/Form';
import { setBookingActive } from "@/app/libs/store/features/bookingSlice";
import BookingStyles from "@/app/components/booking/booking-styles";

export default function Page() {
  const [changeActiveColor, setChangeActiveColor] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch setBookingActive action when entering the booking component
    dispatch(setBookingActive());

  }, [dispatch]); // Runs once on component mount and clean up on unmount

  return (
    <div style={{ overflowX: 'clip' }} className='relative'>
      <BookingStyles />

      <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
        <BookingForm setChangeActiveColor={setChangeActiveColor} changeActiveColor={changeActiveColor}/>
      </Suspense>
    </div>
  );
}
