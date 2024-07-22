"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import Loader from '../components/ui/loader';
import { useDispatch } from 'react-redux';
import { setBookingInactive } from '../libs/store/features/bookingSlice';
const StaffListing = dynamic(() => import('../components/home/staff'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch setBookingActive action when entering the booking component
    dispatch(setBookingInactive());
  
  }, [dispatch]); // Runs once on component mount and clean up on unmount
  return (
        <StaffListing />
  )
}

export default page
