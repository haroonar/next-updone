'use client'
import Loader from '@/app/components/ui/loader';
import dynamic from 'next/dynamic';
import React from 'react';
const StaffDetail = dynamic(() => import('@/app/components/home/detail'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {
  //this is to get data from store 
  return (
    <>
      <StaffDetail />
    </>
  );
}

export default page;
