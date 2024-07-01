'use client'
// RootLayout.js
import React from 'react';


interface RootLayoutProps {
    children: React.ReactNode

}

const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <div className='mt-[54px]'>
            {children}
        </div>
    );
};

export default RootLayout;
