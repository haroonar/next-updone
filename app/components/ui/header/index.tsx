import React from 'react'
import styles from './header.module.css'
import Link from 'next/link';
import Image from 'next/image';
// Specify the supported weights you want to include

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full">

                <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Image src='./logo.svg' alt='header-logo' width={150} height={44} />
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="#">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/staff-list">
                                    Hire a Staff
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header
