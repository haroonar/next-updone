'use client'
import Image from 'next/image'
import React from 'react'
import FormDecoration from '../../common/form-decoration'
import Link from 'next/link'
import ServicesContent from './components/ServicesContent'

const Services = () => {
    return (
        <>
            <div >
                <div className='py-[56px]' style={{ background: "radial-gradient(#eeecec85, transparent)" }}>
                    <h1 className='service-text mb-[60px]'>What <strong className='text-[#350ABC]'>services</strong> are <br /> you looking for?</h1>
                    <div className="relative pb-4">
                        <div className="absolute top-[-285px]  z-[-1] left-[-145px]" style={{ transform: 'rotate(86deg)' }}>
                            <svg width="500" height="500" viewBox="0 0 601 1096" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M601 548C601 850.652 355.652 1096 53 1096C-249.652 1096 -495 850.652 -495 548C-495 245.348 -249.652 0 53 0C355.652 0 601 245.348 601 548ZM-491.004 548C-491.004 848.445 -247.445 1092 53 1092C353.445 1092 597.004 848.445 597.004 548C597.004 247.555 353.445 3.99622 53 3.99622C-247.445 3.99622 -491.004 247.555 -491.004 548Z" fill="#350ABC" />
                            </svg>

                        </div>
                        <div className="absolute bottom-[-97px] right-[-9px]">
                            <svg width="180" height="324" viewBox="0 0 280 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.03" d="M424 212C424 329.084 329.084 424 212 424C94.9156 424 0 329.084 0 212C0 94.9156 94.9156 0 212 0C329.084 0 424 94.9156 424 212ZM8.52023 212C8.52023 324.379 99.6212 415.48 212 415.48C324.379 415.48 415.48 324.379 415.48 212C415.48 99.6212 324.379 8.52023 212 8.52023C99.6212 8.52023 8.52023 99.6212 8.52023 212Z" fill="#350ABC" />
                            </svg>
                        </div>
                        <div className='relative max-w-[1279px] m-auto'>
                            <FormDecoration position={{
                                position: 'absolute', top: "-395px",
                                left: "-364px"
                            }} />
                            <div className="-m-1 flex flex-wrap md:gap-y-[135px] 2xl:gap-y-[30px]">
                                <div className="w-1/3 p-2">
                                    <div className="w-full  min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/bartander.jpg"
                                            alt="Bartender"
                                            width={400} // Adjusted width
                                            height={240} // Adjusted height
                                            className=' shadow-stone-300'
                                            layout="responsive"
                                        />
                                        <ServicesContent 
                                        name={"Bartenders"} description={"Certified professionals crafting delicious drinks and keeping the party flowing."} serviceSrc='/images/services/bartander.svg' 
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="w-full md:p-2 min-h-[280px] md:max-h-[200px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/waiters.jpg"
                                            alt="Waiters"
                                            width={400} // Adjusted width
                                            height={240} // Adjusted height
                                            layout="responsive"
                                            className=' shadow-stone-300 '
                                        />
                                        <ServicesContent 
                                        name={"Waiters"} description={"Attentive wait staff delivering food efficiently and adding a touch of elegance."} serviceSrc='/images/services/waiter.svg' 
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 p-2">
                                    <div className="w-full  min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/cocktail.jpg"
                                            alt="Waiters"
                                            width={400} // Adjusted width
                                            height={240} // Adjusted height
                                            layout="responsive"
                                            className='shadow-stone-300'
                                        />
                                        <ServicesContent 
                                        name={"Cocktail"} description={"Experienced crew ensuring bartenders have everything they need for smooth service."} serviceSrc='/images/services/cocktail.svg' 
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 p-2">
                                    <div className="w-full  min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/barbacks.jpg"
                                            alt="Barbacks"
                                            width={400} // Adjusted width
                                            height={240} // Adjusted height
                                            layout="responsive"
                                            className=' shadow-stone-300'
                                        />
                                         <ServicesContent 
                                        name={"Promo Models"} description={"Engaging models bringing your brand to life and captivating your audience."} serviceSrc='/images/services/model.svg' 
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 p-2">
                                    <div className="w-full  min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/promomodel.jpg"
                                            alt="Promo Model"
                                            width={400} // Adjusted width
                                            height={240} // Adjusted height
                                            layout="responsive"
                                            className=' shadow-stone-300'
                                        />
                                       <ServicesContent 
                                        name={"Event Helper"} description={"Versatile helpers tackling setup, breakdown, and guest assistance for a seamless event."} serviceSrc='/images/services/helper.svg' 
                                        />
                                    </div>
                                </div>
                                <div className="w-1/3 p-2">
                                    <div className="w-full  min-h-[280px] max-h-[320px] 2xl:max-h-[420px]">
                                        <Image
                                            src="/images/services/eventhelper.jpg"
                                            alt="Event Helper"
                                            width={240} // Adjusted width
                                            height={240} // Adjusted height
                                            layout="responsive"
                                            className=' shadow-stone-300'
                                        />
                                       <ServicesContent 
                                        name={"Barbacks"} description={"Experienced crew ensuring bartenders have everything they need for smooth service."} serviceSrc='/images/services/barback.svg' 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full text-center md:mt-[64px] 2xl:mt-[-40px] mb-[26px]'>
                <Link href={'/staff'} className=" text-[#F3F0FF] justify-center bg-[#2C2240] rounded-[4px] text-[16px] font-normal px-[50px] py-[8px] text-center inline-flex items-center  me-2 ">
                    Hire Required Staff Now!
                </Link>
            </div>
        </>
    )
}
export default Services;
