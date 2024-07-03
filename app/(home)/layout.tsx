'use client'
// RootLayout.js
import React from 'react';


interface RootLayoutProps {
    children: React.ReactNode

}

const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <div className='mt-[60px]'>
            {children}
        </div>
    );
};

export default RootLayout;
