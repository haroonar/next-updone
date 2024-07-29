'use client'
import React from 'react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';


interface RootLayoutProps {
    children: React.ReactNode

}

const RootLayout = ({ children }: RootLayoutProps) => {


    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default RootLayout;
