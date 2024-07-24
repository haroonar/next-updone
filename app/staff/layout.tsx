'use client'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { selectBookingActive } from '../libs/store/features/bookingSlice';
import BookingLayout from './booking/layout';

interface RootLayoutProps {
    children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
    const bookingActive = useSelector(selectBookingActive);

    return (
        <div className={`${"mt-[68px] relative z-10"}`}>
            <BookingLayout>
            {children}
            </BookingLayout>
        </div>
    )
}

export default RootLayout
