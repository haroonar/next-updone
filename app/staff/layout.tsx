'use client'
import React, { ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {

    return (
        <div className='mt-[70px] '>
            {children}
        </div>
    )
}

export default RootLayout
