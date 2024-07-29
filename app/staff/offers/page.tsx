"use client"
import BookingStyles from '@/app/components/booking/booking-styles'
import Header from '@/app/components/ui/header'
import Loader from '@/app/components/ui/loader'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
const StaffOffers = dynamic(() => import('@/app/components/booking/staff-offers'), {
    loading: () => <Loader />, // Display loader while loading
    ssr: false, // Do not SSR for this component
});
const page = () => {
    return (
        <div className='relative z-[-1]'>
            <Header />
            <Suspense>
                <StaffOffers />
            </Suspense>
            <BookingStyles />
        </div>
    )
}

export default page
