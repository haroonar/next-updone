'use client'
import React, { Suspense } from 'react'
import Loader from '../../ui/loader';
const Testimonials = dynamic(() => import('../testimonials'), {
    ssr: false, // Do not SSR for this component
    loading: () =><><p className='flex text-center'>Loading...</p></>, // Display loader while loading
});
const CalendarWithAvailability = dynamic(() => import('../../common/Calander'), {
    ssr: false, // Do not SSR for this component
    loading: () =><><p className='flex text-center'>Loading...</p></>, // Display loader while loading
});
const StaffImageGrid = dynamic(() => import('./components/StaffImages'), {
    ssr: false, // Do not SSR for this component
    loading: () =><><p className='flex text-center'>Loading...</p></>, // Display loader while loading

});
const StaffHistory = dynamic(() => import('./components/StaffHistory'), {
    ssr: false, // Do not SSR for this component
    loading: () =><><p className='flex text-center'>Loading...</p></>, // Display loader while loading

});
import Image from 'next/image'
import { PiLineVerticalThin } from 'react-icons/pi'
import { GoDotFill } from 'react-icons/go'
import { useAppSelector } from '@/app/libs/store/hooks'
import { selectStaff } from '@/app/libs/store/features/staff'
import HOME_TESTIMONINAL_CONTENT from '../testimonials/constants'
import dynamic from 'next/dynamic';
import Link from 'next/link';

const StaffDetail = () => {
    const { staff } = useAppSelector(selectStaff);

    return (
        <div>
            <div className='h-[225px] bg-[#f3f0ff] flex justify-center items-end'>
                <div className='h-[152px] w-full max-w-[1276px]  flex'>
                    <div className='w-[16%]'>
                        {/* <!-- Content for the left side --> */}
                        <div className='absolute top-[215px]'>
                            <GoDotFill className='text-[40px] absolute right-0 top-[-70px] z-[1] left-[4px]  text-[#350ABC]' />
                            <Image
                                className="relative bottom-[100px] border-solid border-8 border-white object-cover w-34 h-34 mt-3 mr-3 rounded-full"
                                //@ts-ignore
                                src={staff?.img} // Fallback to a default image if staff?.img is undefined
                                //@ts-ignore
                                alt={staff?.name}
                                width={180}
                                height={180}
                                objectFit="cover"
                                quality={100} // This ensures the highest quality
                            />

                        </div>
                    </div>
                    <div className='w-[84%] flex justify-center items-center gap-[64px] mb-[27px]'>
                        <div className='w-2/5 space-y-4'>
                            <div className="text-center mb-[21px] flex justify-between w-full items-center font-bold text-lg">
                                <h1 style={{ letterSpacing: '-2%' }} className='text-[44px] text-[#000000] font-semibold '>{staff?.name}</h1>
                                <div className="flex items-center ">
                                    <span className='mb-[4px] mr-1'>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0002 0.833374L12.8327 6.57171L19.1668 7.49754L14.5835 11.9617L15.6652 18.2684L10.0002 15.2892L4.33516 18.2684L5.41683 11.9617L0.833496 7.49754L7.16766 6.57171L10.0002 0.833374Z" fill="#F79809" stroke="#F79809" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>

                                    <p style={{ letterSpacing: '-2%' }} className="ms-1 text-[16px] leading-[26px] font-normal text-[#000000]">5.0/5</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center text-start w-full space-x-1 mb-2 ">
                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>
                                <span><PiLineVerticalThin /></span>

                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>
                                <span>  <PiLineVerticalThin /></span>

                                <p className='text-[14px] font-normal text-[#6B6B6B] leading-[24px] tracking-[-2%]'>Cocktail Server</p>

                            </div>
                            <div className="text-center text-[16px] font-normal  text-[#2C2240] flex gap-2">
                                <span>
                                    <Image width={16} height={16} alt='verified' src='/images/staff-listing/map.svg' />
                                </span>
                                <div className='relative bottom-[5px] text-[16px] font-normal leading-[26px] tracking-[-2%] text-[#2C2240]'>
                                    {`${staff?.city}`}
                                </div>
                            </div>
                            <div className="flex justify-start items-center text-start w-full space-x-3 mb-2 ">
                                <span className='relative bottom-[5px]'>
                                    <Image width={14} height={14} alt='verified' src='/images/staff-listing/phone.svg' />
                                </span>
                                <div style={{ letterSpacing: '-2%' }} className='relative bottom-[5px] text-[14px] font-normal flex justify-center items-center gap-2 text-[#000000]'>
                                    {`Phone Number`}
                                    <Image width={58} height={12} alt='verified' src='/images/staff-listing/vertified.svg' />
                                </div>

                                <span className='relative bottom-[6px]'>
                                    <Image width={16} height={16} alt='verified' src='/images/staff-listing/person.svg' />
                                </span>
                                <div style={{ letterSpacing: '-2%' }} className='relative bottom-[5px] text-[14px] font-normal flex justify-center items-center gap-2 text-[#000000]'>
                                    {`ID`}
                                    <Image width={58} height={12} alt='verified' src='/images/staff-listing/vertified.svg' />

                                </div>


                            </div>
                        </div>

                        <div className='w-3/5'>
                            <h1 style={{ letterSpacing: '-1%', lineHeight: 'auto' }} className=' text-[#2C2240] text-[24px] font-semibold'>
                                About Me
                            </h1>
                            <p style={{ letterSpacing: '-2%' }} className='text-[#6B6B6B] text-[14px] font-normal leading-[24px]'>
                                I'm Sarah Miller, a vibrant and outgoing individual passionate about creating memorable experiences. As a cocktail server, I ensure guests feel welcome and enjoy their time.  As a promo model, I bring brands to life with high energy and a captivating smile.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="max-w-[1276px] mx-auto h-auto pt-[46px]">
                <div className="h-[405px] flex gap-[45px]">
                    <div className="w-[65%]">
                            <CalendarWithAvailability />
                    </div>
                    <div className="w-[35%]">
                        <h1 className='text-center font-semibold text-[20px] translate-[-1%] text-[#000000] mb-4'>Cost Breakdown</h1>
                        <div className="mx-auto max-w-3xl pb-4 pt-3 px-5" style={{ boxShadow: '0px -1px 10px -3px rgb(0 0 0 / 4%), 3px 1px 20px -2px rgb(0 0 0 / 5%)' }}>
                            <div className="relative overflow-x-auto border-b-2 border-[#f8f8f8]">
                                <table className="w-full text-left font-medium md:table-fixed">
                                    <tbody>
                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                            <td className="whitespace-nowrap py-2 md:w-[384px]">
                                                <div className="flex items-center justify-between gap-4">
                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                        Worker Fee Per Hour
                                                    </p>
                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">$50</td>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                            <td className="whitespace-nowrap py-2 md:w-[384px]">
                                                <div className="flex justify-between items-center gap-4">
                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                        Number of Hours
                                                    </p>
                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">5 h</td>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                            <td className="whitespace-nowrap py-2 md:w-[384px]">
                                                <div className="flex justify-between items-center gap-4">
                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                        Worker Fee Calculation
                                                    </p>
                                                    <td className="flex justify-between items-center gap-1">
                                                        <span className="text-[#9B9B9B] text-[10px] font-normal leading-[26px] mr-2">5 hours x $50</span>
                                                        <span style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">$250</span>
                                                    </td>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap py-2 md:w-[384px] pb-8">
                                                <div className="flex justify-between items-center gap-4">
                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                        Platform Fee
                                                    </p>
                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">$10</td>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* buttons */}
                            <div>
                                <div className='my-7 mb-1 border-b-[1px] border-[#f8f8f8] flex justify-between items-center'>
                                    <div className="whitespace-nowrap py-2 md:w-[384px]">
                                        <div className="flex justify-between items-center gap-4">
                                            <p style={{ letterSpacing: '-2%' }} className=" text-[#2C2240] text-[14px] items-center shrink-0">
                                                Total
                                            </p>
                                            <h1 style={{ letterSpacing: '-1%' }} className="text-right text-[#000000] text-[24px] font-semibold">$250.00</h1>
                                        </div>
                                    </div>
                                </div>
                                <Link href='/staff/booking' className=" text-[#F3F0FF] w-full justify-center bg-[#350ABC] tracking-[-2%]  leading-[26px] rounded-[4px] text-[16px] font-normal px-[30px] py-[10px] text-center inline-flex items-center  me-2 ">
                                    <span className='mr-2'>
                                        <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#F3F0FF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>

                                    Book Now
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[465px] flex gap-[25px] mt-[100px] mb-6">
                        <StaffHistory />
                        <StaffImageGrid />
                </div>
                <div>
                        <Testimonials isDetailTestonial testimonials={HOME_TESTIMONINAL_CONTENT} />
                </div>
                <div className='h-[323px] bg-[#f3f0ff] w-[90vw] m-auto mt-0 z-[-1] right-0 left-0 top-[1580px] bottom-[-15px] absolute'>
                </div>
            </div>
        </div>
    )
}

export default StaffDetail
