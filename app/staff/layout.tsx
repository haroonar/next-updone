'use client'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { selectBookingActive } from '../libs/store/features/bookingSlice';

interface RootLayoutProps {
    children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
    const bookingActive = useSelector(selectBookingActive);

    return (
        <div className={`${bookingActive ? null : "mt-[68px]"}`}>
            {children}
        </div>
    )
}

export default RootLayout
