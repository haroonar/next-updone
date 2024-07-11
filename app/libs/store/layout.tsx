'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Image from 'next/image';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';
import { BookingProvider } from '../context/BookingContext';
import { AuthProvider } from '../context/AuthContext';
interface RootLayoutProps {
    children: ReactNode;
}

const ReduxProvider = ({ children }: RootLayoutProps) => {
    return (
        <div className='overflow-auto'>
            <AuthProvider>
                <Provider store={store}>
                    <Header />
                    <BookingProvider>
                        {children}
                    </BookingProvider>
                    <Footer />
                </Provider>
            </AuthProvider>
        </div>
    )
}

export default ReduxProvider
