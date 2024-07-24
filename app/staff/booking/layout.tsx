'use client'
import React, { ReactNode } from 'react'

interface BookingLayoutProps {
    children: ReactNode;
}
const BookingLayout = ({ children }: BookingLayoutProps) => {

    return (
        <div className={`${"mt-[68px] relative z-10"}`}>
            {children}
        </div>
    )
}

export default BookingLayout
