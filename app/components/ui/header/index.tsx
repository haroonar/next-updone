"use client"
import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '../login';
import RegisterForm from '../register';
import { useAppSelector } from '@/app/libs/store/hooks';
import { clearAuth, selectAuth } from '@/app/libs/store/features/authSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    // State to track the clicked link
    const [activeLink, setActiveLink] = useState<string | null>(null); // Initialize activeLink with null or an appropriate initial value
    const { auth: storedData } = useAppSelector(selectAuth);

    // State to track the visibility of login and register menu
    const [loginMenuOpen, setLoginMenuOpen] = useState(false);
    const [registerMenuOpen, setRegisterMenuOpen] = useState(false);
    const dispatch = useDispatch()

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
                                {storedData?.user?.name ? (
                                    <>
                                        <li className={`!ml-[22px] px-[10px] pb-[1px] text-[#0B0B0B] border-b-[1px] border-[#2C2240] text-[14px] font-[600] leading-[150%] capitalize`}>{storedData?.user?.name}</li>
                                        <li>   <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" /></li>
                                        <li> <div onClick={handleLogout} className="bg-[#0b0b0b] text-[#dcd9e7] px-6 py-2 rounded-md">
                                            Logout
                                        </div></li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <div onClick={toggleLoginMenu} className={`text-[#0B0B0B] text-[14px] font-[400] leading-[150%] capitalize`}>
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
                                            <div onClick={toggleRegisterMenu} className={` bg-[#0b0b0b] text-[#F3F0FF] text-[14px] font-[400] px-6 py-2 rounded-md`}>
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
