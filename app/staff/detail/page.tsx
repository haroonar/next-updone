'use client'
import Loader from '@/app/components/ui/loader';
import { setBookingInactive } from '@/app/libs/store/features/bookingSlice';
import dynamic from 'next/dynamic';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
const StaffDetail = dynamic(() => import('@/app/components/home/detail'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {
  //this is to get data from store 
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch setBookingActive action when entering the booking component
    dispatch(setBookingInactive());

  }, [dispatch]); // Runs once on component mount and clean up on unmount
  return (
    <>
    <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading.....</p>}>
      <StaffDetail />
    </Suspense>
    </>
  );
}

export default page;
