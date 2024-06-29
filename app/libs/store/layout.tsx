'use client'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Image from 'next/image';
interface RootLayoutProps {
    children: ReactNode;
}

const ReduxProvider = ({ children }: RootLayoutProps) => {
    return (
        <div>
            <Provider store={store}>
            {children}
            </Provider>
        </div>
    )
}

export default ReduxProvider
