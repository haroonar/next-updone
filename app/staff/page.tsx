"use client"
import React from 'react'
import dynamic from 'next/dynamic';
import Loader from '../components/ui/loader';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
const StaffListing = dynamic(() => import('../components/home/staff'), {
  loading: () => <Loader />, // Display loader while loading
  ssr: false, // Do not SSR for this component
});
const page = () => {

  return (
        <div>
          <Header/>
          <StaffListing />
          <Footer/>
        </div>
  )
}

export default page
