import Image from "next/image";
import React from "react";
import FooterList from "../../common/footer-list";
import { ABOUT_ITEMS, LISTING_ITEMS, SOCIAL_ITEMS } from "@/app/libs/Constants";

const Footer = () => {

    return (
        <div className="bg-[#2c2240]">
            <div style={{ margin: '0 100px' }}>
                <footer className="relative bg-[#2c2240] text-white pt-8 pb-6 footer-image">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <div className="flex text-left lg:text-left">
                            <div className="w-full space-y-4 lg:w-6/12 px-4 pl-[90px]">
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
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6 ">
                                    <FooterList title="About" items={ABOUT_ITEMS} />
                                    <FooterList title="Listings" items={LISTING_ITEMS} />
                                    <FooterList title="Socials" items={SOCIAL_ITEMS} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-[50px] mx-20'>
                            <hr className="my-6 border-[.5px] border-[#807a8c]" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full px-4 text-center mx-[74px]">
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
                                                Terms & Condition<a href="https://www.creative-tim.com/product/notus-js" target="_blank"></a>
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
    );
};

export default React.memo(Footer);
