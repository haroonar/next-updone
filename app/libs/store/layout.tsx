'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Image from 'next/image';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';
interface RootLayoutProps {
    children: ReactNode;
}

const ReduxProvider = ({ children }: RootLayoutProps) => {
    return (
        <div className='overflow-auto'>
            <Provider store={store}>
                <Header />
                {children}
                <Footer />
            </Provider>
        </div>
    )
}

export default ReduxProvider
