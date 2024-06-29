'use client'
// RootLayout.js
import React from 'react';


interface RootLayoutProps {
    home: React.ReactNode
    children: React.ReactNode

}

const RootLayout = ({ home,children }: RootLayoutProps) => {


    return (
        <div className='mt-[64px]'>
            {home}
            {children}
        </div>
    );
};

export default RootLayout;
