'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Header from '@/app/components/ui/header';
import Footer from '@/app/components/ui/footer';
import { BookingProvider } from '../context/BookingContext';
import { AuthProvider } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface RootLayoutProps {
    children: ReactNode;
}

const ReduxProvider = ({ children }: RootLayoutProps) => {
    
    return (
        <div className='overflow-hidden'>
            <AuthProvider>
                <Provider store={store}>
                    <Header />
                    <BookingProvider>
                        {children}
                    </BookingProvider>
                    <Footer />
                </Provider>
            </AuthProvider>
            <ToastContainer />
        </div>
    )
}

export default ReduxProvider
