"use client"
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Loader from '../components/ui/loader';
const StaffListing = dynamic(() => import('../components/home/staff'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {
  return (
        <StaffListing />
  )
}

export default page
