"use client"
import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '../ui/loader';
const LazyHero = dynamic(() => import('./hero'), { ssr: false,
  loading: () => <Loader />, // Display loader while loading
 });
const LazyServices = dynamic(() => import('./services'), { ssr: false });
const LazyOurSponsors = dynamic(() => import('./sponsors'), { ssr: false });
const LazyHowWork = dynamic(() => import('./how-work'), { ssr: false });
const LazySecurity = dynamic(() => import('./security'), { ssr: false });
const LazyGalleryContent = dynamic(() => import('./gallery'), { ssr: false });
const LazyTestimonials = dynamic(() => import('./testimonials'), { ssr: false });
const LazyAccordion = dynamic(() => import('./faqs'), { ssr: false });
import HOME_TESTIMONINAL_CONTENT from './testimonials/constants';
import { apiRequest } from '@/app/libs/services';
import { useDispatch } from 'react-redux';
import { setBookingInactive } from '@/app/libs/store/features/bookingSlice';
const Home = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      try {
        const newData = await apiRequest('/testimonials', {
          method: 'GET',
        }); // API call
        setData(newData?.data); // Update state with fetched data
      } catch (error) {
        // Handle error state or display an error message
      } finally {
        setLoading(false); // Hide loading indicator regardless of success or failure
      }
    };
  
    fetchDataIfNeeded(); // Call the function to fetch data
  }, []); // Dependency array ensures useEffect runs when currentPage or selectedCount changes
  const dispatch=useDispatch()
  useEffect(() => {
      // Dispatch setBookingActive action when entering the booking component
      dispatch(setBookingInactive());
    }, [dispatch]); // Runs once on component mount and clean up on unmount
  return (
    <>
      <div className='overflow-hidden'>
        <Suspense fallback={<><Loader/></>}>
          <LazyHero />
          <LazyServices />
          <LazyOurSponsors />
          <LazyHowWork />
          <LazySecurity />
          <LazyGalleryContent />
          <LazyTestimonials testimonials={HOME_TESTIMONINAL_CONTENT} />
          <LazyAccordion />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
