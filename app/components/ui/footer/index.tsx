'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import FooterList from "../../common/footer-list";
import { ABOUT_ITEMS, LISTING_ITEMS, SOCIAL_ITEMS } from "@/app/libs/Constants";
import { useDispatch } from "react-redux";
import { selectBookingActive, setBookingActive, setBookingInactive } from "@/app/libs/store/features/bookingSlice";
import { useAppSelector } from "@/app/libs/store/hooks";

const Footer = () => {
    const bookingActive = useAppSelector(selectBookingActive);
    const dispatch=useDispatch()
    // useEffect(() => {
    //     // On component mount, check if bookingActive should be true based on localStorage
    //     const storedBookingActive = localStorage?.getItem('bookingActive') === 'true';
    //     if (storedBookingActive) {
    //         dispatch(setBookingActive());
    //     } else {
    //         dispatch(setBookingInactive());
    //     }
    // }, [dispatch]);
    useEffect(() => {
        // On component mount, check if bookingActive should be true based on localStorage
        if (typeof window !== 'undefined') {
            const storedBookingActive = localStorage.getItem('bookingActive') === 'true';
            if (storedBookingActive) {
                dispatch(setBookingActive());
            } else {
                dispatch(setBookingInactive());
            }
        }
    }, [dispatch]);
    return (
       <>
       {!bookingActive && 
        <div className={`bg-[#2c2240] ${bookingActive ? "absolute":'relative'}`}>
            <div className='max-w-[1279px] m-auto'>
                <footer className="relative bg-[#2c2240] text-white pt-[100px] pb-8  footer-image">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex text-left lg:text-left">
                            <div className="w-[70%] space-y-4" >
                                <Image src='/images/footer/footer-updone-logo.svg' alt='footer' width={165} height={48} />
                                <h5 className="text-subheading-3">
                                    Our vision is to provide convenience and help increase <br /> your sales business.
                                </h5>
                                <div className="flex relative right-[18px]">
                                    <Image src='/images/footer/footer-facebook-logo.svg' alt='footer' width={70} height={70} />
                                    <Image src='/images/footer/footer-twitter-logo.svg' alt='footer' width={70} height={70} />
                                    <Image src='/images/footer/footer-linkedin-logo.svg' alt='footer' width={70} height={70} />
                                </div>
                            </div>
                            <div className="w-[70%]">
                                <div className="flex items-top mb-6 gap-x-6 relative left-[75px]">
                                    <FooterList title="About" items={ABOUT_ITEMS} />
                                    <FooterList title="Listings" items={LISTING_ITEMS} />
                                    <FooterList title="Socials" items={SOCIAL_ITEMS} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="mb-6 mt-8 border-[.5px] border-[#807a8c]" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full text-center">
                                    <div className="text-paragraph py-1 flex justify-between items-center">
                                        <div>
                                            Copyright © <span id="get-current-year">2021</span>
                                            <a href="https://www.creative-tim.com/product/notus-js" target="_blank"> Updone. All rights reserved.</a>
                                        </div>
                                        <div className="flex items-center justify-center gap-10">
                                            <div>
                                                <a href="https://www.creative-tim.com/product/notus-js" target="_blank"> Privacy & Policy.</a>
                                            </div>
                                            <div>
                                                Terms & Condition.<a href="https://www.creative-tim.com/product/notus-js" target="_blank"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
       }
       </>
    );
};

export default React.memo(Footer);
