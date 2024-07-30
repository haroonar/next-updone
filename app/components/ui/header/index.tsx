"use client"
import React, { SetStateAction, useEffect, useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '../login';
import RegisterForm from '../register';
import Cookies from 'js-cookie';
import { useAppSelector } from '@/app/libs/store/hooks';
import { clearAuth, selectAuth } from '@/app/libs/store/features/authSlice';
import { useDispatch } from 'react-redux';
import { persistor } from '@/app/libs/store/store';
import { NAV_LINKS } from '@/app/libs/Constants';
import { selectBookingActive, setBookingActive, setBookingInactive } from '@/app/libs/store/features/bookingSlice';
import { lato } from '@/app/libs/Fonts';

const Header = () => {
    // State to track the clicked link
    const [activeLink, setActiveLink] = useState<string | null>(null); // Initialize activeLink with null or an appropriate initial value
    const { auth: storedData } = useAppSelector(selectAuth);
    console.log('storedData', storedData)

    // State to track the visibility of login and register menu
    const [loginMenuOpen, setLoginMenuOpen] = useState(false);
    const [registerMenuOpen, setRegisterMenuOpen] = useState(false);
    const dispatch = useDispatch()
    const handleSetActiveLink = (href: string) => {
        setActiveLink(href);
    };
    // Function to toggle login menu visibility
    const toggleLoginMenu = () => {
        setLoginMenuOpen(!loginMenuOpen);
        setRegisterMenuOpen(false)
    };

    // Function to toggle register menu visibility
    const toggleRegisterMenu = () => {
        setRegisterMenuOpen(!registerMenuOpen);
        setLoginMenuOpen(false)
    };
    const handleLogout = () => {
        dispatch(clearAuth())
    }
    const handleRegisterClick = () => {
        setLoginMenuOpen(false)
        setRegisterMenuOpen(true)
    }
    return (
        <>
            {<header className={styles.header}>
                <nav className={`border-gray-200 py-[15px] w-full max-w-[1279px] mx-auto`}>
                    <div className="flex flex-wrap justify-between items-center" style={{ cursor: 'pointer' }}>
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.svg" alt="header-logo" width={130} height={34} quality={100} objectFit='fill' />
                        </Link>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex justify-center items-center flex-col mt-4 text-[#0B0B0B] text-[14px] font-[500] leading-[150%] capitalize lg:flex-row lg:space-x-8 lg:mt-0">
                                {/* {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href}>
                                            <div
                                                className={`${activeLink === link.href ? 'text-[#350ABC]' : ''
                                                    }`}
                                                onClick={() => handleSetActiveLink(link.href)}
                                            >
                                                {link.label}
                                            </div>
                                        </Link>
                                    </li>
                                ))} */}

                                <li>
                                    <Link href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M20.6703 20.0004L16.6203 15.9504M16.6203 15.9504C17.2703 15.3003 17.786 14.5286 18.1378 13.6793C18.4896 12.83 18.6706 11.9197 18.6706 11.0004C18.6706 10.0811 18.4896 9.17076 18.1378 8.32144C17.786 7.47211 17.2703 6.7004 16.6203 6.05036C15.9702 5.40031 15.1985 4.88467 14.3492 4.53287C13.4999 4.18107 12.5896 4 11.6703 4C10.751 4 9.84068 4.18107 8.99136 4.53287C8.14204 4.88467 7.37032 5.40031 6.72028 6.05036C5.40746 7.36318 4.66992 9.14375 4.66992 11.0004C4.66992 12.857 5.40746 14.6375 6.72028 15.9504C8.0331 17.2632 9.81367 18.0007 11.6703 18.0007C13.5269 18.0007 15.3075 17.2632 16.6203 15.9504Z" stroke="#0B0B0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Link>
                                </li>
                                {storedData?.user?.name ? (
                                    <>
                                        <li className={`${lato.className} !ml-[22px] px-[10px] pb-[1px] text-[#0B0B0B] border-b-[1px] border-[#2C2240] text-[14px] font-[600] leading-[150%] capitalize`}>{storedData?.user?.name}</li>
                                        <li>   <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" /></li>
                                        <li> <div onClick={handleLogout} className="bg-[#0b0b0b] text-[#dcd9e7] px-6 py-2 rounded-md">
                                            Logout
                                        </div></li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <div onClick={toggleLoginMenu} className={`${lato.className} text-[#0B0B0B] text-[14px] font-[400] leading-[150%] capitalize`}>
                                                Login
                                            </div>
                                            {loginMenuOpen && (
                                                <div className={styles.menuBox}>
                                                    {/* Your login menu content here */}
                                                    <LoginForm handleRegisterClick={handleRegisterClick} />
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <div onClick={toggleRegisterMenu} className="bg-[#0b0b0b] text-[#dcd9e7] px-6 py-2 rounded-md">
                                                Register
                                            </div>
                                            {registerMenuOpen && (
                                                <div className={styles.menuBox}>
                                                    {/* Your register menu content here */}
                                                    <RegisterForm setLoginMenuOpen={setLoginMenuOpen} setRegisterMenuOpen={setRegisterMenuOpen} />
                                                </div>
                                            )}
                                        </li>
                                    </>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>}
        </>
    );
};



export default Header;
