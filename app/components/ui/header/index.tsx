// Import necessary modules and components
import React, { SetStateAction, useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LoginRegister from '../../login-register';
import { useAuthContext } from '@/app/libs/context/AuthContext';

const Header = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(true); // Start with registration form hidden
    const [close, setClose] = useState(true)
    const [getStyles,getGetStyles]=useState()
    // Define your navigation links
    const navLinks = [
        { href: '/staff', label: 'Workers' },
        { href: '/faqs', label: 'Contact' },
        { href: '/community', label: 'About Us' },
        { href: '/contact', label: 'Blogs' },
        // Add more links as needed
    ];

    // State to track the clicked link
    const [activeLink, setActiveLink] = useState<string | null>(null); // Initialize activeLink with null or an appropriate initial value

    const handleSetActiveLink = (href: string) => {
        setActiveLink(href);
    };
    const handleClose = (e: any) => {
        e.preventDefault();

        setClose(true)
    }
    const handleShowRegisterForm = (e: any) => {
        e.preventDefault();
        setShowLoginForm(false);
        setShowRegisterForm(false); // Set to true to show the registration form
    };
    const handleOpenLoginPopup = (e: any) => {
        e.preventDefault();
        setShowLoginForm(!showLoginForm);
        setClose(false)
        
    }
    
    return (
        <header className={styles.header}>
            <nav className="border-gray-200 py-[15px] w-full max-w-[1279px] mx-auto">
                <div className="flex flex-wrap justify-between items-center" style={{ cursor: 'pointer' }}>
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.svg" alt="header-logo" width={130} height={34} quality={100}  objectFit='fill'/>
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 text-[#0B0B0B] text-[14px] font-[500] leading-[150%] capitalize lg:flex-row lg:space-x-8 lg:mt-0">
                            {navLinks.map((link) => (
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
                            ))}

                            <li>
                                <Link href="#">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 19 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.67 17L13.62 12.95M13.62 12.95C14.2701 12.2999 14.7857 11.5282 15.1375 10.6789C15.4893 9.82959 15.6704 8.91929 15.6704 7.99999C15.6704 7.08069 15.4893 6.17039 15.1375 5.32107C14.7857 4.47175 14.2701 3.70003 13.62 3.04999C12.97 2.39995 12.1983 1.8843 11.349 1.5325C10.4996 1.1807 9.58933 0.999634 8.67003 0.999634C7.75073 0.999634 6.84044 1.1807 5.99111 1.5325C5.14179 1.8843 4.37008 2.39995 3.72004 3.04999C2.40721 4.36281 1.66968 6.14338 1.66968 7.99999C1.66968 9.8566 2.40721 11.6372 3.72004 12.95C5.03286 14.2628 6.81342 15.0003 8.67003 15.0003C10.5266 15.0003 12.3072 14.2628 13.62 12.95Z"
                                            stroke="#350ABC"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={handleOpenLoginPopup} href="#" className=" text-[#0B0B0B] text-[14px] font-[400] leading-[150%] capitalize">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link  onClick={handleShowRegisterForm} href="#" className="bg-[#0b0b0b] text-[#dcd9e7] px-6 py-2 rounded-md">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <LoginRegister
            isHeaderLogin
            style={styles}
                showLoginForm={showLoginForm} close={close} showRegisterForm={showRegisterForm} styles={styles} handleClose={handleClose} setShowLoginForm={setShowLoginForm} handleShowRegisterForm={handleShowRegisterForm}
            />
        </header>
    );
};



export default Header;
