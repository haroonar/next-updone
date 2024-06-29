'use client'
import React, { ReactNode, Suspense } from 'react'
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import Loader from '../components/ui/loader';
interface RootLayoutProps {
    children: ReactNode;
}
const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <div className='mt-[64px] '>
            <Header />
            <Suspense fallback={<Loader/>}>
            {children}
            </Suspense>
            <Footer />
        </div>
    )
}

export default RootLayout
