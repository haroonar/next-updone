'use client'
import React, { ReactNode } from 'react'
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
interface RootLayoutProps {
    children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className='mt-[64px] '>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default RootLayout
