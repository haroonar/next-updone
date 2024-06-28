'use client'
import CalendarWithAvailability from '@/app/components/common/Calander';
import Testimonials from '@/app/components/testimonials';
import HOME_TESTIMONINAL_CONTENT from '@/app/components/testimonials/constants';
import { Staff } from '@/app/types';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { PiLineVerticalThin } from "react-icons/pi";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});
const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [staff, setStaff] = useState<Staff>();

  useEffect(() => {
    const encodedStaff = searchParams.get('staff');
    if (encodedStaff) {
      try {
        const decodedStaff = JSON.parse(atob(encodedStaff));
        setStaff(decodedStaff);
      } catch (error) {
        console.error('Failed to decode staff data', error);
      }
    }
  }, [searchParams]);


  return (
    <>
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


      <div className="max-w-[1276px] mx-auto h-auto pt-3">
        <div className="h-[405px] flex gap-10 mt-4 ">
          <div className="w-[65%]">
            <CalendarWithAvailability />
          </div>
          <div className="w-[35%]">
            <h1 className='text-center font-semibold text-[20px] translate-[-1%] text-[#000000] mb-5'>Cost Breakdown</h1>
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
                        <span className="text-[#9B9B9B] text-[10px] font-normal leading-[26px]">5 hours x $50</span>
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
                <div className='my-8 mb-1 border-b-[1px] border-[#f8f8f8] flex justify-between items-center'>
                  <div className="whitespace-nowrap py-2 md:w-[384px]">
                    <div className="flex justify-between items-center gap-4">
                      <p style={{ letterSpacing: '-2%' }} className=" text-[#2C2240] text-[14px] items-center shrink-0">
                        Total
                      </p>
                  <h1 style={{ letterSpacing: '-1%' }} className="text-right text-[#000000] text-[24px] font-semibold">$250.00</h1>
                    </div>
                  </div>
                </div>
                <button type="button" className=" text-[#F3F0FF] w-full justify-center bg-[#350ABC] tracking-[-2%]  leading-[26px] rounded-[4px] text-[16px] font-normal px-[30px] py-[10px] text-center inline-flex items-center  me-2 ">
                  <span className='mr-2'>
                    <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#F3F0FF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>

                  Hire Now
                </button>

              </div>
            </div>
          </div>
        </div>
        <div className="h-[465px] flex gap-[25px] mt-20 mb-6">
          <div className="w-[55%]">
            <div >
              <div className='flex gap-2 justify-start items-center mb-6'>
                <div className={`${montserrat.className} text-[24px] font-semibold translate-[-1%] text-[#2C2240]`}>Work History</div>
                <div className='mt-[6px]'>
                  <h1 className='text-[#9B9B9B] text-[12px] font-normal translate-[-2%] leading-[26px] relative top-2'>(60 jobs)</h1>
                </div>
              </div>

              <div className='space-y-3'>
                <div className="font-normal  rounded-[8.007px] w-[100%]">
                  <div className="space-y-1">
                    <div className='flex justify-between items-center'>
                      <h6 className={`${montserrat.className} text-[14px] leading-[18px] text-[#000000] font-medium translate-[-1%]`}>
                        The Palm Tree Terrace, Los Angeles, CA <br /> Cocktail Server
                      </h6>
                      <span className='text-[#9B9B9B] text-[12px] font-normal tracking-[-2%] leading-[24px]'>(2023 - 2024)</span>
                    </div>
                    <p className='text-[12px] leading-[26px] text-[#6B6B6B] font-normal translate-[-2%]'>
                      Provided exceptional service to restaurant patrons, ensuring a welcoming and enjoyable dining experience. <br /> Maintained a positive and engaging attitude while handling multiple tables efficiently.
                    </p>
                  </div>
                </div>
                <svg width="626" height="1" viewBox="0 0 626 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="626" y2="0.5" stroke="url(#paint0_linear_453_6379)" />
                  <defs>
                    <linearGradient id="paint0_linear_453_6379" x1="0" y1="1.5" x2="626" y2="1.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D4D4D4" stop-opacity="0" />
                      <stop offset="0.515" stop-color="#D4D4D4" />
                      <stop offset="1" stop-color="#D4D4D4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="font-normal w-[100%]">
                  <div className="space-y-1">
                    <div className='flex justify-between items-center'>
                      <h6 className={`${montserrat.className} text-[14px] leading-[18px] text-[#000000] font-medium translate-[-1%]`}>
                        The Palm Tree Terrace, Los Angeles, CA <br /> Cocktail Server
                      </h6>
                      <span className='text-[#9B9B9B] text-[12px] font-normal tracking-[-2%] leading-[24px]'>(2023 - 2024)</span>
                    </div>
                    <p className='text-[12px] leading-[26px] text-[#6B6B6B] font-normal translate-[-2%]'>
                      Provided exceptional service to restaurant patrons, ensuring a welcoming and enjoyable dining experience. <br /> Maintained a positive and engaging attitude while handling multiple tables efficiently.
                    </p>
                  </div>
                </div>
                <svg width="626" height="1" viewBox="0 0 626 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="626" y2="0.5" stroke="url(#paint0_linear_453_6379)" />
                  <defs>
                    <linearGradient id="paint0_linear_453_6379" x1="0" y1="1.5" x2="626" y2="1.5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#D4D4D4" stop-opacity="0" />
                      <stop offset="0.515" stop-color="#D4D4D4" />
                      <stop offset="1" stop-color="#D4D4D4" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="font-normal w-[100%]">
                  <div className="space-y-1">
                    <div className='flex justify-between items-center'>
                      <h6 className={`${montserrat.className} text-[14px] leading-[18px] text-[#000000] font-medium translate-[-1%]`}>
                        The Palm Tree Terrace, Los Angeles, CA <br /> Cocktail Server
                      </h6>
                      <span className='text-[#9B9B9B] text-[12px] font-normal tracking-[-2%] leading-[24px]'>(2023 - 2024)</span>
                    </div>
                    <p className='text-[12px] leading-[24px] text-[#6B6B6B] font-normal translate-[-2%]'>
                      Provided exceptional service to restaurant patrons, ensuring a welcoming and enjoyable dining experience. <br /> Maintained a positive and engaging attitude while handling multiple tables efficiently.
                    </p>
                  </div>
                  <div className='flex justify-center items-center gap-2 mt-4'>
                    <h1 className='text-center text-[12px] leading-[26px] text-[#6B6B6B] font-normal translate-[-2%]'>Load More</h1>
                    <span><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 3.33325L8.5 12.6666" stroke="#545454" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.1665 8L8.49984 12.6667L3.83317 8" stroke="#545454" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] grid grid-cols-2 grid-rows-2 gap-x-3 relative bottom-[20px]">
            {/* Image Grid */}
            <div className="col-span-1 row-span-1 ">
              <Image
                src="/images/staff-listing/d1.jpg"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover rounded-[4px] relative top-[18px]"
                alt="Staff 1"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/images/staff-listing/d2.jpg"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover rounded-[4px] relative top-[18px]"
                alt="Staff 2"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/images/staff-listing/d3.jpg"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover rounded-[4px]"
                alt="Staff 3"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <Image
                src="/images/staff-listing/d4.jpg"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover rounded-[4px]"
                alt="Staff 4"
              />
            </div>
          </div>

        </div>
        <div>
          <Testimonials isDetailTestonial testimonials={HOME_TESTIMONINAL_CONTENT} />
        </div>
        <div style={{
          position: "absolute",
          bottom: "-15px",
          top: "1580px",
          left: 0,
          right: 0,
          zIndex: -1
        }} className='h-[250px] bg-[#f3f0ff] w-[90vw] m-auto'>
        </div>
      </div>
    </>
  );
}

export default page;
