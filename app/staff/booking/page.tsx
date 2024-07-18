"use client"
import Loader from "@/app/components/ui/loader";
import dynamic from "next/dynamic";
import Image from "next/image";
const Form = dynamic(() => import('@/app/components/booking/Form'), {
  loading: () => <Loader />,
  ssr: false, // Do not SSR for this component
});
import { Suspense, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function page() {
  const [changeActiveColor, setChangeActiveColor] = useState(false)
  console.log('changeActiveColor', changeActiveColor)
  return (
    <div style={{ overflowX: 'clip' }} className='relative'>
      {/* Top Left */}
      <div className='absolute top-[-103px] left-[-67px]'>
        <Image width={878} height={825} src='/images/booking/topLeft.svg' alt='step-1' />
      </div>
      {/* Top Right */}
      <div className='absolute top-[-262px] right-[-82px]'>
        <Image width={950} height={889} src='/images/booking/topRight.svg' alt='step-1' />
      </div>
      {/* Bottom Left */}
      <div className='absolute bottom-[-115px] left-[-72px] '>
      <Image width={920} height={652} src='/images/booking/bottomLeft.svg' alt='step-1' />
      </div>

      {/* Bottom Center */}
      <div className='absolute bottom-[-72px] left-1/2 transform -translate-x-1/2 '>
      <Image width={997} height={933} src='/images/booking/bottomCenter.svg' alt='step-1' />
      </div>
      <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
        <Form setChangeActiveColor={setChangeActiveColor} changeActiveColor={changeActiveColor} />
      </Suspense>
      {/* {changeActiveColor &&
        <div className="m-auto">
          <svg width="100vw" height="481" viewBox="0 0 1920 481" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="959.17" cy="665" rx="1222.5" ry="665" fill="#F3F0FF" />
          </svg>
        </div>
      } */}
    </div>
  )
}
