'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormDataSchema } from '@/app/libs/validations/schema'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from './booking.module.css'
import Link from 'next/link'
import LoginFrom from '../common/login-register'
import { useAuthContext } from '@/app/libs/context/AuthContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import { montserrat } from '@/app/libs/Fonts'


type Inputs = z.infer<typeof FormDataSchema>




export default function Form({ setChangeActiveColor, changeActiveColor }: any) {
    const { setShowLoginForm, showLoginForm, setShowRegisterForm, showRegisterForm, setClose, close } = useAuthContext()
    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)


    const handleShowRegisterForm = (e: any) => {
        e.preventDefault();
        setShowLoginForm(false);
        setShowRegisterForm(false); // Set to true to show the registration form
    };
    const handleClose = (e: any) => {
        e.preventDefault();

        setClose(true)
    }
    const handleOpenLoginPopup = (e: any) => {
        e.preventDefault();

        setClose(false)
    }

    const delta = currentStep - previousStep

    const {
        register,
        handleSubmit,
        watch,
        reset,
        trigger,
        formState: { errors }
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema)
    })

    const processForm: SubmitHandler<Inputs> = data => {
        console.log(data)
        reset()
    }

    type FieldName = keyof Inputs

    const next = async () => {
        // const fields = steps[currentStep].fields
        // const output = await trigger(fields as FieldName[], { shouldFocus: true })

        // if (!output) return
        await handleSubmit(processForm)()
        setPreviousStep(currentStep)
        setCurrentStep(step => step + 1)
        // if (currentStep < steps.length - 1) {
        //     await handleSubmit(processForm)()
        //     if (currentStep === steps.length - 2) {
        //     }
        //     setPreviousStep(currentStep)
        //     setCurrentStep(step => step + 1)
        // }
    }

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
        }
    }
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (e: any) => {
        setSelectedCountry(e.target.value);
    };
    const steps = [
        {
            id: 'Details',
            image: <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/stepBlue2.svg' alt='step-1' />,
            name: 'Event and contact details',
            fields: ['firstName', 'lastName', 'email']
        },
        {
            id: 'Payment',
            name: 'Pay the cost of hiring',
            image: changeActiveColor ? <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/stepBlue2.svg' alt='step-1' /> : <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step2.svg' alt='step-1' />,
            fields: ['country', 'state', 'city', 'street', 'zip']
        },
        {
            id: 'Thank You', name: 'Congratulation!',
            image: changeActiveColor ? <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/stepBlue2.svg' alt='step-1' /> : <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step3.svg' alt='step-1' />,

        }
    ]
    const selectStyles: { [key: string]: string } = {
        border: '1px solid #EFEFEF',
        marginTop: '12px',
        padding: '14px',
        paddingLeft: '27px',
        minHeight: '52px',
        fontWeight: '400',
        lineHeight: '24px',
        width: '100%',
        outline: 'blue',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#9F9F9F',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%239D9D9D' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, // Custom arrow icon
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px top 50%', // Adjust position here
        appearance: 'none', // Hide default arrow in modern browsers
    };

    const loginInputStyles: { [key: string]: string } = {
        borderRadius: "4px",
        background: " #FFF",
        boxShadow: " 0px 4px 16px 0px rgba(0, 0, 0, 0.08)"
    }
    const placeholderOptionStyles: { [key: string]: string } = {
        color: '#9D9D9D',
        fontSize: '5px',
    };


    const countryOptions = [
        { value: '', label: 'City', disabled: true },
        { value: 'usa', label: 'USA' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'canada', label: 'Canada' }
    ];
    return (
        <>
            <section style={{ maxHeight: changeActiveColor ? "430px" : "" }} className='max-w-[1279px] mx-auto max-h-[1000px]'>

                {/* steps */}
                <nav aria-label='Progress' className='relative left-6 z-[1]'>
                    <ol role='list' className='flex space-x-4 justify-center items-center mt-[133px] mx-[224px]'>
                        {/* //active */}
                        {steps.map((step, index) => (
                            <li key={step.name} className='flex-1 gap-4'>
                                {currentStep > index ? (
                                    <div className='flex justify-start items-center gap-4'>

                                        <div className='flex justify-center items-center'>
                                            <span className='relative top-[6px] left-[16px] text-sm font-medium text-sky-600'>
                                                {step.image}
                                            </span>
                                            <div className='flex flex-col'>
                                                <span className='mb-[15px] text-[14px] font-[600] leading-[20.4px] text-[#000000] tracking-[-0.28px]'>
                                                    {step.id}
                                                </span>
                                                <span className='absolute mt-5 text-[#6B6B6B] text-sm mb-[15px] text-[11px] font-[400] leading-[24px]  tracking-[-0.11px]'>{step.name}</span>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                width: changeActiveColor ? "180px" : " 200px",
                                                position: "absolute",
                                                marginLeft: changeActiveColor ? "160px" : step.name === "Event and contact details" ? '150px' : "147px"
                                            }}
                                            className='flex w-full flex-row justify-start items-center border-l-[1px] border-[#000000] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'
                                            aria-current='step'
                                        >

                                        </div>
                                    </div>
                                ) : currentStep === index ? (
                                    <div className='flex justify-start items-center gap-4'>

                                        <div className='flex justify-center items-center'>
                                            <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                                {
                                                    step.name === "Pay the cost of hiring" ?
                                                        <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/stepBlue2.svg' alt='step-1' /> :
                                                        step.name === "Congratulation!" && !changeActiveColor ? (
                                                            <>
                                                                {setChangeActiveColor(true)}
                                                                <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step1.svg' alt='step-1' />
                                                            </>
                                                        ) :
                                                            step.image
                                                }

                                            </span>
                                            <div className='flex flex-col'>
                                                <span className='mb-[15px] text-[14px] font-[600] leading-[20.4px] text-[#000000] tracking-[-0.28px]'>
                                                    {step.id}
                                                </span>
                                                <span className='absolute mt-5 text-[#6B6B6B] text-sm mb-[15px] text-[11px] font-[400] leading-[24px]  tracking-[-0.11px]'>{step.name}</span>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                width: "184px",
                                                position: "absolute",
                                                /* left: 0; */
                                                /* right: 0; */
                                                marginLeft: step.name === "Pay the cost of hiring" ? '162px' : '153px'
                                            }}
                                            className={changeActiveColor ? "" : 'flex w-full flex-row justify-start items-center border-l-[1px] border-[#000000] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'}
                                            aria-current='step'
                                        >

                                        </div>
                                    </div>
                                ) : step.name === 'Congratulation!' ? (
                                    <div onClick={next} className='ml-[25px] flex justify-start items-center'>
                                        <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                            {
                                                step.image
                                            }
                                        </span>
                                        <div className='flex flex-col' >
                                            <span className='mb-[15px] text-[#b0b0b2] text-[14px] font-[600] leading-[20.4px] tracking-[-0.28px]'>
                                                {step.id}
                                            </span>
                                            <span className='absolute mt-5 text-[#cfcfd2] text-[11px] font-[400] leading-[24px] tracking-[-0.1px]'>{step.name}</span>
                                        </div>
                                    </div>
                                ) : <div className='flex justify-start items-center gap-4'>

                                    <div onClick={next} className='flex justify-start items-center'>
                                        <span className='relative top-[6px] left-[16px]  text-sm font-medium text-sky-600'>
                                            {step.image}
                                        </span>
                                        <div className='flex flex-col' >
                                            <span className='mb-[15px] text-[#b0b0b2] text-[14px] font-[600] leading-[20.4px] tracking-[-0.28px]'>
                                                {step.id}
                                            </span>
                                            <span className='absolute mt-5 text-[#cfcfd2] text-[11px] font-[400] leading-[24px] tracking-[-0.1px]'>{step.name}</span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "184px",
                                            position: "absolute",
                                            /* left: 0; */
                                            /* right: 0; */
                                            marginLeft: '171px'
                                        }}
                                        className='flex w-full flex-row justify-start items-center border-l-[1px] border-[#b0b0b2] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'
                                        aria-current='step'
                                    >

                                    </div>
                                </div>}
                            </li>
                        ))}
                    </ol>
                </nav>


                {/* Form */}
                <form className='pb-[160px] pt-[70px]' onSubmit={handleSubmit(processForm)}>
                    {currentStep === 0 && (
                        <motion.div
                            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className='flex gap-[34px] mx-auto max-w-[1064px]  min-h-[638px] mt-[0] mb-[0]'>
                                <div className='w-[44%]  h-[100vh] '>
                                    {/* //card section */}
                                    <div>
                                        <h2 className='px-[10px] pb-[10px] mb-[4px] montserrat-font font-[600] leading-normal text-[32px] tracking-[-0.32px] text-[#000000]'>
                                            Booking Details
                                        </h2>
                                        <div style={{ boxShadow: "0px 12px 28px 0px rgba(0, 0, 0, 0.06)" }} className='relative z-10 bg-white flex gap-[14px] p-[8px] max-w-full min-h-[82px] rounded-[8px] '>
                                            <span className='w-[20%]'>
                                                <Image
                                                    className='mt-[2px] '
                                                    src="/images/booking/card-girl.svg"
                                                    alt="step-1"
                                                    width={400}
                                                    height={400}
                                                    quality={100}  // Ensures the image quality is set to maximum
                                                />
                                            </span>
                                            <div className='w-[80%]'>
                                                <div className='flex justify-between items-center'>
                                                    <h3 className='text-[20px] font-[600] montserrat-font leading-normal tracking-[-0.2px] text-[#000000]'>Sarah Miler</h3>
                                                    <div className="flex items-center justify-center">
                                                        <div className='relative bottom-[1px]'>

                                                            <Image width={15} height={15} className='me-1' src='/images/booking/5.svg' alt='step-1' />
                                                        </div>
                                                        <p className="text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#000000]">5.0/5</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-1">
                                                    <p className=" text-[#350ABC] text-[10px] font-[600] leading-[24px] tracking-[-0.2px] relative bottom-1">Cocktail Server</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <div className='text-start  bg-[#e6e0fa] text-[#350abc] h-[25px] rounded-[2.25px] inline-flex gap-2 py-[4.5px] px-[9px]'>
                                                        <Image width={18} height={18} src='/images/booking/4.svg' alt='step-1' />
                                                        <span className='text-[9px] mt-[1.5px] font-[400] leading-[14.625px] text-center'>$30/hr</span>
                                                    </div>
                                                    <div className='flex justify-center items-center gap-1 bg-[#F9F9F9] px-[12px] py-[6px] rounded-[60px] h-[20px] w-[122px]'>
                                                        <p className='text-[8px] font-[400] leading-[19.2px] tracking-[-0.16px] text-[#6B6B6B]'>
                                                            <span className='text-[11.2px] text-[#6B6B6B] tracking-[-0.224px] leading-[19.2px] font-[400]'>4 </span> days x <span className='text-[11.2px] text-[#6B6B6B] tracking-[-0.224px] leading-[19.2px] font-[400]'>5 </span>hours
                                                        </p>
                                                        <span className='text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#2C2240]'>20h</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-start items-center gap-3'>
                                        <h3 className='mt-[37.8px] mb-[13.25px] leading-[17.784px] translate-[0.282px] font-[500] text-[14px] text-[#000000]'>Booking Times:</h3>
                                        <span> <Image width={15} height={15} src='/images/booking/pancel.svg' alt='step-1' className='relative top-3.5' /></span>
                                    </div>
                                    <div className='min-h-[35px] max-h-auto w-full  mb-[6px]  bg-[#FFF] border-[1px] border-[#EDE9FF] rounded-[3.569px]  flex justify-between items-center' style={{ boxShadow: "0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)" }}>
                                        <div className='pl-[17px] flex justify-center items-center gap-3 text-[#2C2240] font-[400] leading-[24px] tracking-[-0.214px] text-[11px]'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.95602 6.24617C8.09043 6.24617 6.57255 7.76405 6.57255 9.62964C6.57255 11.4843 8.09043 12.9928 9.95602 12.9928C11.8216 12.9928 13.3395 11.4749 13.3395 9.60934C13.3395 7.75468 11.8216 6.24617 9.95602 6.24617ZM9.95602 12.4723C8.37776 12.4723 7.09308 11.197 7.09308 9.62964C7.09308 8.05086 8.37776 6.76671 9.95602 6.76671C11.5343 6.76671 12.819 8.04201 12.819 9.60934C12.819 11.1881 11.5343 12.4723 9.95602 12.4723ZM10.6608 9.94561C10.7623 10.0471 10.7623 10.2121 10.6608 10.3136C10.6098 10.3646 10.5432 10.3896 10.4766 10.3896C10.4099 10.3896 10.3433 10.3641 10.2923 10.3136L9.77175 9.79309C9.72282 9.74416 9.69575 9.67805 9.69575 9.60882V8.56775C9.69575 8.42408 9.81235 8.30749 9.95602 8.30749C10.0997 8.30749 10.2163 8.42408 10.2163 8.56775V9.50107L10.6608 9.94561ZM10.9971 1.54107H10.2163V0.760267C10.2163 0.6166 10.0997 0.5 9.95602 0.5C9.81235 0.5 9.69575 0.6166 9.69575 0.760267V1.54107H4.49042V0.760267C4.49042 0.6166 4.37382 0.5 4.23015 0.5C4.08648 0.5 3.96988 0.6166 3.96988 0.760267V1.54107H3.18908C1.89764 1.54107 0.84668 2.59203 0.84668 3.88347V10.6504C0.84668 11.9419 1.89764 12.9928 3.18908 12.9928H6.31228C6.45595 12.9928 6.57255 12.8762 6.57255 12.7325C6.57255 12.5889 6.45595 12.4723 6.31228 12.4723H3.18908C2.18445 12.4723 1.36721 11.655 1.36721 10.6504V5.1848H12.819V5.9656C12.819 6.10927 12.9356 6.22587 13.0792 6.22587C13.2229 6.22587 13.3395 6.10927 13.3395 5.9656V3.88347C13.3395 2.59203 12.2885 1.54107 10.9971 1.54107ZM1.36721 4.66427V3.88347C1.36721 2.87884 2.18445 2.0616 3.18908 2.0616H10.9971C12.0017 2.0616 12.819 2.87884 12.819 3.88347V4.66427H1.36721Z" fill="#2C2240" />
                                            </svg></span>
                                            April 3, 2024
                                        </div>
                                        <div className='text-[#848486] text-[12px] font-[400] leading-[24px] tracking-[-0.25px]'>
                                            <span>12:00pm - 1:00pm</span>

                                        </div>
                                        <div className='bg-red-100 py-[10px] px-[9px]'>
                                            <RiDeleteBin6Line className='text-[#C20000]' />
                                        </div>
                                    </div>
                                    <div className='min-h-[35px] w-full max-h-auto  mb-[6px]  bg-[#FFF] border-[1px] border-[#EDE9FF] rounded-[3.569px]  flex justify-between items-center' style={{ boxShadow: "0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)" }}>
                                        <div className='pl-[17px] flex justify-center items-center gap-3 text-[#2C2240] font-[400] leading-[24px] tracking-[-0.214px] text-[11px]'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.95602 6.24617C8.09043 6.24617 6.57255 7.76405 6.57255 9.62964C6.57255 11.4843 8.09043 12.9928 9.95602 12.9928C11.8216 12.9928 13.3395 11.4749 13.3395 9.60934C13.3395 7.75468 11.8216 6.24617 9.95602 6.24617ZM9.95602 12.4723C8.37776 12.4723 7.09308 11.197 7.09308 9.62964C7.09308 8.05086 8.37776 6.76671 9.95602 6.76671C11.5343 6.76671 12.819 8.04201 12.819 9.60934C12.819 11.1881 11.5343 12.4723 9.95602 12.4723ZM10.6608 9.94561C10.7623 10.0471 10.7623 10.2121 10.6608 10.3136C10.6098 10.3646 10.5432 10.3896 10.4766 10.3896C10.4099 10.3896 10.3433 10.3641 10.2923 10.3136L9.77175 9.79309C9.72282 9.74416 9.69575 9.67805 9.69575 9.60882V8.56775C9.69575 8.42408 9.81235 8.30749 9.95602 8.30749C10.0997 8.30749 10.2163 8.42408 10.2163 8.56775V9.50107L10.6608 9.94561ZM10.9971 1.54107H10.2163V0.760267C10.2163 0.6166 10.0997 0.5 9.95602 0.5C9.81235 0.5 9.69575 0.6166 9.69575 0.760267V1.54107H4.49042V0.760267C4.49042 0.6166 4.37382 0.5 4.23015 0.5C4.08648 0.5 3.96988 0.6166 3.96988 0.760267V1.54107H3.18908C1.89764 1.54107 0.84668 2.59203 0.84668 3.88347V10.6504C0.84668 11.9419 1.89764 12.9928 3.18908 12.9928H6.31228C6.45595 12.9928 6.57255 12.8762 6.57255 12.7325C6.57255 12.5889 6.45595 12.4723 6.31228 12.4723H3.18908C2.18445 12.4723 1.36721 11.655 1.36721 10.6504V5.1848H12.819V5.9656C12.819 6.10927 12.9356 6.22587 13.0792 6.22587C13.2229 6.22587 13.3395 6.10927 13.3395 5.9656V3.88347C13.3395 2.59203 12.2885 1.54107 10.9971 1.54107ZM1.36721 4.66427V3.88347C1.36721 2.87884 2.18445 2.0616 3.18908 2.0616H10.9971C12.0017 2.0616 12.819 2.87884 12.819 3.88347V4.66427H1.36721Z" fill="#2C2240" />
                                            </svg></span>
                                            April 3, 2024
                                        </div>
                                        <div className='text-[#848486] text-[12px] font-[400] leading-[24px] tracking-[-0.25px]'>
                                            <span>12:00pm - 1:00pm</span>

                                        </div>
                                        <div className='bg-red-100 py-[10px] px-[9px]'>
                                            <RiDeleteBin6Line className='text-[#C20000]' />
                                        </div>
                                    </div>
                                    <div className='min-h-[35px] w-full max-h-auto  mb-[6px]  bg-[#FFF] border-[1px] border-[#EDE9FF] rounded-[3.569px]  flex justify-between items-center' style={{ boxShadow: "0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)" }}>
                                        <div className='pl-[17px] flex justify-center items-center gap-3 text-[#2C2240] font-[400] leading-[24px] tracking-[-0.214px] text-[11px]'>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                <path d="M9.95602 6.24617C8.09043 6.24617 6.57255 7.76405 6.57255 9.62964C6.57255 11.4843 8.09043 12.9928 9.95602 12.9928C11.8216 12.9928 13.3395 11.4749 13.3395 9.60934C13.3395 7.75468 11.8216 6.24617 9.95602 6.24617ZM9.95602 12.4723C8.37776 12.4723 7.09308 11.197 7.09308 9.62964C7.09308 8.05086 8.37776 6.76671 9.95602 6.76671C11.5343 6.76671 12.819 8.04201 12.819 9.60934C12.819 11.1881 11.5343 12.4723 9.95602 12.4723ZM10.6608 9.94561C10.7623 10.0471 10.7623 10.2121 10.6608 10.3136C10.6098 10.3646 10.5432 10.3896 10.4766 10.3896C10.4099 10.3896 10.3433 10.3641 10.2923 10.3136L9.77175 9.79309C9.72282 9.74416 9.69575 9.67805 9.69575 9.60882V8.56775C9.69575 8.42408 9.81235 8.30749 9.95602 8.30749C10.0997 8.30749 10.2163 8.42408 10.2163 8.56775V9.50107L10.6608 9.94561ZM10.9971 1.54107H10.2163V0.760267C10.2163 0.6166 10.0997 0.5 9.95602 0.5C9.81235 0.5 9.69575 0.6166 9.69575 0.760267V1.54107H4.49042V0.760267C4.49042 0.6166 4.37382 0.5 4.23015 0.5C4.08648 0.5 3.96988 0.6166 3.96988 0.760267V1.54107H3.18908C1.89764 1.54107 0.84668 2.59203 0.84668 3.88347V10.6504C0.84668 11.9419 1.89764 12.9928 3.18908 12.9928H6.31228C6.45595 12.9928 6.57255 12.8762 6.57255 12.7325C6.57255 12.5889 6.45595 12.4723 6.31228 12.4723H3.18908C2.18445 12.4723 1.36721 11.655 1.36721 10.6504V5.1848H12.819V5.9656C12.819 6.10927 12.9356 6.22587 13.0792 6.22587C13.2229 6.22587 13.3395 6.10927 13.3395 5.9656V3.88347C13.3395 2.59203 12.2885 1.54107 10.9971 1.54107ZM1.36721 4.66427V3.88347C1.36721 2.87884 2.18445 2.0616 3.18908 2.0616H10.9971C12.0017 2.0616 12.819 2.87884 12.819 3.88347V4.66427H1.36721Z" fill="#2C2240" />
                                            </svg></span>
                                            April 3, 2024
                                        </div>
                                        <div className='text-[#848486] text-[12px] font-[400] leading-[24px] tracking-[-0.25px]'>
                                            <span>12:00pm - 1:00pm</span>

                                        </div>
                                        <div className='bg-red-100 py-[10px] px-[9px]'>
                                            <RiDeleteBin6Line className='text-[#C20000]' />
                                        </div>
                                    </div>
                                    <div style={{
                                        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
                                        backdropFilter: "blur(1.7846870422363281px)"
                                    }} className='text-center w-full bg-red-300 relative bottom-[42px] h-[36px] flex justify-center items-center gap-2 tracking-[-0.214px] text-[10px] font-[400] text-[#350ABC] opacity-[0.9] leading-[21px]'>
                                        Load more <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.4165 3.85974L7.4165 12.1883" stroke="#350ABC" stroke-width="0.892343" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.5806 8.02405L7.4163 12.1883L3.25203 8.02405" stroke="#350ABC" stroke-width="0.892343" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        </span>
                                    </div>

                                    {/* cost break down section */}
                                    <div className='relative bottom-[21px]'>
                                        <h2 className='text-[20px] font-[600] montserrat-font p-[8px] mb-[6px] leading-normal tracking-[-0.2px] text-[#000000]'>Cost Breakdown</h2>
                                        <div className="mx-auto max-w-3xl rounded-[4px] py-[9px] px-[20px]" style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.08)' }}>
                                            <div className="relative overflow-x-auto border-b-2 border-[#f8f8f8]">
                                                <table className="w-full text-left font-medium md:table-fixed">
                                                    <tbody>
                                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                                            <td className="whitespace-nowrap py-1">
                                                                <div className="flex items-center justify-between gap-4">
                                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                                        Worker Fee Per Hour
                                                                    </p>
                                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">$50</td>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                                            <td className="whitespace-nowrap py-[4px] md:w-[384px]">
                                                                <div className="flex justify-between items-center gap-4">
                                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                                        Number of Hours
                                                                    </p>
                                                                    <div className='flex justify-center items-center'>
                                                                        <span className="text-[#6B6B6B] text-[10px] font-normal leading-[26px] mr-2">4 days x 5 hours</span>
                                                                        <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">5 h</td>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className='border-b-[1px] border-[#f8f8f8]'>
                                                            <td className="whitespace-nowrap py-[4px] md:w-[384px]">
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
                                                            <td className="whitespace-nowrap py-[4px] md:w-[384px] pb-[27px]">
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
                                            <div className="whitespace-nowrap mt-[8px] md:w-[384px] " style={{ width: '100%' }}>
                                                <div className="flex justify-between items-center gap-4">
                                                    <p style={{ letterSpacing: '-2%' }} className=" text-[#000000] leading-normal text-[20px] montserrat-font font-[600]">
                                                        Total
                                                    </p>
                                                    <h3 style={{ letterSpacing: '-1%' }} className="text-right leading-normal text-[#000000] text-[32px] font-[600] montserrat-font">$1,000.00</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[56%] h-[100vh] relative z-20'>
                                    <div className={`${styles.contactdetail} absolute z-10 inset-0 flex justify-center items-center`}>
                                        <div style={{ zIndex: '-1' }} className="absolute top-[-273px] left-[-300px]">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="603" height="603" viewBox="0 0 603 603" fill="none">
                                                <g opacity="0.15" filter="url(#filter0_f_530_2275)">
                                                    <circle cx="301.5" cy="301.5" r="101.5" fill="#230ABC" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_f_530_2275" x="0" y="0" width="603" height="603" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_530_2275" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <section>
                                            <div className='flex justify-start p-[10px] gap-[8px] text-[18px] font-[500] leading-[32px] tracking-[-0.36px] text-[#000000] items-center'>
                                                <span><Image width={15} height={15} src='/images/booking/person.svg' alt='user' /></span>   <h3>Contact Details</h3>
                                            </div>
                                            <form action="">
                                                <div>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                <path d="M11.6668 12.25V11.0833C11.6668 10.4645 11.421 9.871 10.9834 9.43342C10.5458 8.99583 9.95233 8.75 9.3335 8.75H4.66683C4.04799 8.75 3.4545 8.99583 3.01691 9.43342C2.57933 9.871 2.3335 10.4645 2.3335 11.0833V12.25" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                            placeholder="Full Name*"

                                                        />

                                                    </div>
                                                    <div className='flex justify-between gap-[8px] items-center'>
                                                        <div className="relative w-full">
                                                            <div className="absolute inset-y-0 mt-[12px] ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                    <path d="M2.33317 2.33337H11.6665C12.3082 2.33337 12.8332 2.85837 12.8332 3.50004V10.5C12.8332 11.1417 12.3082 11.6667 11.6665 11.6667H2.33317C1.6915 11.6667 1.1665 11.1417 1.1665 10.5V3.50004C1.1665 2.85837 1.6915 2.33337 2.33317 2.33337Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M12.8332 3.5L6.99984 7.58333L1.1665 3.5" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <input
                                                                type="search"
                                                                id="default-search"
                                                                className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                placeholder="Email Address *"

                                                            />

                                                        </div>
                                                        <div className="flex items-center w-full">
                                                            <button style={{ borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px' }} id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" className="bg-[#FFFFFF] border border-[#EFEFEF] border-l-[1px] border-t-[1px]   mt-[12px]  flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#9F9F9F] h-[53px]" type="button">
                                                                <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height={14} y=".5" fill="#fff" rx={2} /><mask id="a" style={{ maskType: 'luminance' }} width={20} height={15} x={0} y={0} maskUnits="userSpaceOnUse"><rect width="19.6" height={14} y=".5" fill="#fff" rx={2} /></mask><g mask="url(#a)"><path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd" /><path fill="#46467F" d="M0 .5h8.4v6.533H0z" /><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fillRule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clipRule="evenodd" /></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset={1} stopColor="#F0F0F0" /></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1} /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" /></filter></defs></svg>
                                                                +1 <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" /></svg>
                                                            </button>
                                                            <div id="dropdown-phone" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">

                                                            </div>
                                                            <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Contact Number:</label>
                                                            <div className="relative w-full">
                                                                <input type="text" id="phone-input" className={`${styles.defaultsearch}   mt-[12px] border-[#EFEFEF] py-[14px]  min-h-[52px] bg-[#FFFFFF] w-full focus:outline-blue-200 rounded-[4px]`} placeholder='345-456-2368' />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                                            <Image width={16} height={16} src='/images/booking/company.svg' alt='step-1' />
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                            placeholder="Company Name"

                                                        />

                                                    </div>
                                                </div>
                                                <div className='flex mt-[30px] justify-start p-[10px] gap-[8px] text-[18px] font-[500] leading-[32px] tracking-[-0.36px] text-[#000000] items-center'>
                                                    <span><Image width={18} height={18} src='/images/booking/barglass.svg' alt='user' /></span>   <h3>Event Location</h3>
                                                </div>
                                                <div>
                                                    <div className='flex justify-between gap-[8px] items-center'>
                                                        <div className="relative w-full">

                                                            <div className="relative w-full" style={{ width: '100%' }}>
                                                                <select
                                                                    id="city"
                                                                    style={selectStyles}
                                                                    value={selectedCountry}
                                                                    onChange={handleCountryChange}
                                                                >
                                                                    <option disabled hidden value="" style={placeholderOptionStyles}>City</option>
                                                                    {countryOptions.map((option, index) => (
                                                                        <option key={index} value={option.value}>
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                        </div>
                                                        <div className="flex items-center w-full">
                                                            <input
                                                                type="search"
                                                                id="default-search"
                                                                className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                placeholder="Postal Code *"

                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                                            <Image width={14} height={14} src='/images/booking/location.svg' alt='step-1' />
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                            placeholder="Choose Event Location *"

                                                        />

                                                    </div>

                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">

                                                            <Image width={14} height={14} src='/images/booking/address.svg' alt='step-1' />
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px]  py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                            placeholder="Enter Address *"

                                                        />

                                                    </div>
                                                </div>

                                                <button onClick={handleOpenLoginPopup} className={`${styles.conformdetail}  mt-[42px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                                                    Confirm Details
                                                    <span className={`ml-2`}>
                                                        <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                                                    </span>

                                                </button>

                                                <LoginFrom
                                                    styles={styles}
                                                    //@ts-ignore
                                                    showLoginForm={showLoginForm} close={close} showRegisterForm={showRegisterForm} styles={styles} handleClose={handleClose} setShowLoginForm={setShowLoginForm} handleShowRegisterForm={handleShowRegisterForm}
                                                />

                                            </form>
                                        </section>
                                    </div>
                                    <div className="z-[-1] absolute top-[-225px] right-[-221px]">
                                        <Image width={603} height={603} src='/images/booking/2.svg' alt='step-1' />
                                    </div>
                                </div>
                                <div className="absolute bottom-[-280px] z-[-1] right-[-210px]">
                                    <Image width={603} height={603} src='/images/booking/1.svg' alt='step-1' />
                                </div>

                            </div>
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className='flex gap-[34px] mx-auto max-w-[1064px]  min-h-[796px] mt-[0] mb-[0] '>
                                <div className={`${styles.bookingsummary_section} w-[44.5%]`}>
                                    <div className='flex justify-center flex-col items-center w-full'>
                                        <h2 className={`${styles.bookingsummary_text} ${montserrat.className}`}>Booking Summary</h2>
                                        <Image className='w-[117px] h-[107px]' width={120} height={120} quality={100} src='/images/booking/Frame 1410126315 (1).png' alt='step-2' />
                                        <div className='h-[146px] w-full mt-[36px] flex flex-col justify-start items-center mb-[30px]'>
                                            <div className='flex justify-between items-center w-full'>
                                                <h3 className={`${montserrat.className} text-[12px] font-[500] leading-normal tracking-[-0.12px] text-[#000000]`}>Worker Name</h3>
                                                <div className="flex items-center justify-center">
                                                    <div className='relative bottom-[1px]'>

                                                        <Image width={15} height={15} className='me-1' src='/images/booking/5.svg' alt='step-1' />
                                                    </div>
                                                    <p><span className={`${montserrat.className} text-[14px] font-[600] leading-normal tracking-[-0.14px] text-[#000000]`}>Sarah Miller</span> <span className="text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#000000] ml-[12px]">5.0/5</span> </p>
                                                </div>
                                            </div>
                                            <span className='my-[18px] w-full'>
                                                <svg width="438" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                </svg>
                                            </span>

                                            <div className='flex justify-between items-center w-full'>
                                                <h3 className={`${montserrat.className} text-[12px] font-[500] leading-normal tracking-[-0.12px] text-[#000000]`}>Booked Service</h3>
                                                <div className="flex items-center justify-center">
                                                    <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>Cocktail Server</p>
                                                </div>
                                            </div>
                                            <span className='my-[18px] w-full'>
                                                <svg width="438" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                </svg>
                                            </span>

                                            <div className='flex justify-between items-center w-full'>
                                                <h3 className={`${montserrat.className} text-[12px] font-[500] leading-normal tracking-[-0.12px] text-[#000000]`}>Hourly wage</h3>
                                                <div className="flex items-center justify-center">
                                                    <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>$30</p>
                                                </div>
                                            </div>
                                            <span className='my-[18px] w-full'>
                                                <svg className='w-full' width="238" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                </svg>
                                            </span>

                                            <div className='flex justify-between items-center w-full'>
                                                <h3 className={`${montserrat.className} text-[12px] font-[500] leading-normal tracking-[-0.12px] text-[#000000]`}>Booking Dates & Time</h3>
                                                <div className="flex items-center justify-center">
                                                    <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>June 6th (9:30 - 1:30)</p>
                                                </div>
                                            </div>
                                            <div className='bg-[#F8F7FF] rounded-[4px] w-full min-h-[295px] p-[20px] mt-[32px] overflow-hidden'>
                                                <span className='flex justify-center items-center '>
                                                    <svg className='h-[310px] relative bottom-[22px] opacity-[0.5]' xmlns="http://www.w3.org/2000/svg" width="173" height="276" viewBox="0 0 173 276" fill="none">
                                                        <path d="M172.015 195.522C172.197 170.759 162.408 151.175 142.883 137.345C127.803 126.697 109.502 121.142 91.802 115.804C54.9294 104.626 44.2331 98.7383 44.2331 81.1053C44.2331 61.4641 69.7584 54.4757 91.61 54.4757C107.524 54.4757 125.833 59.4236 137.203 66.7564L159.745 31.8448C144.885 22.2112 124.547 15.6401 104.463 13.6006V-19H62.8799V15.8866C25.9158 24.0181 2.6304 48.1769 2.6304 81.1053C2.6304 104.166 12.2133 122.455 31.0586 135.354C45.3918 145.202 62.8725 150.49 79.7586 155.609C115.926 166.541 130.613 173.203 130.446 195.264L130.445 195.426C130.445 213.943 105.906 220.525 84.8838 220.525C65.0256 220.525 43.4307 211.822 31.1897 198.882L0.980469 227.457C16.4826 243.853 39.0054 255.445 62.879 259.989V294.001H104.463V260.721C145.538 254.841 171.974 230.113 172.015 195.522Z" fill="#F1EEFF" />
                                                    </svg>
                                                </span>
                                                <div className='absolute bottom-0 max-w-[395px] ml-[11px]'>
                                                    <div>
                                                        <div className="mx-auto max-w-[415px] rounded-[4px] relative right-[11.5px] bottom-[28px]">
                                                            <div className="relative overflow-x-auto">
                                                                <table className="w-full text-left font-medium md:table-fixed">
                                                                    <tbody>
                                                                        <tr >
                                                                            <td className="whitespace-nowrap py-1">
                                                                                <div className="flex items-center justify-between gap-4">
                                                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                                                        Worker Fee Per Hour
                                                                                    </p>
                                                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">$50</td>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr >
                                                                            <td className="whitespace-nowrap py-2 md:w-[384px]">
                                                                                <div className="flex justify-between items-center gap-4">
                                                                                    <p style={{ letterSpacing: '-2%' }} className="flex items-center leading-[24px] text-[#6B6B6B] text-[14px] font-normal w-8 h-8 shrink-0">
                                                                                        Number of Hours
                                                                                    </p>
                                                                                    <div className='flex justify-center items-center'>
                                                                                        <span className="text-[#6B6B6B] text-[10px] font-normal leading-[26px] mr-2">4 days x 5 hours</span>
                                                                                        <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">5 h</td>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr >
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
                                                                            <td className="whitespace-nowrap py-2 md:w-[384px]">
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
                                                            <div className='border-b-[1px] border-[#ECECEC] w-full h-2 my-4'></div>
                                                            {/* buttons */}
                                                            <div className="whitespace-nowrap" style={{ width: '100%' }}>
                                                                <div className="flex justify-between items-center gap-4">
                                                                    <h3 style={{ letterSpacing: '-2%' }} className=" text-[#000000] leading-normal text-[20px] montserrat-font font-[600]">
                                                                        Total
                                                                    </h3>
                                                                    <h3 style={{ letterSpacing: '-1%' }} className="text-right leading-normal text-[#000000] text-[32px] font-[600] montserrat-font">$1,000.00</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.checkout_section} w-[58%]`}>

                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <>
                            <motion.div
                                initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <main className="h-screen flex flex-col justify-start items-center">
                                    <div style={{ zIndex: '-1' }} className="absolute top-[-266px] left-[-221px] text-black">
                                        <svg width="708" height="676" viewBox="0 0 608 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.2" filter="url(#filter0_f_944_2074)">
                                                <circle cx="304" cy="272" r="104" fill="navy" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_944_2074" x="0" y="-32" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_944_2074" />
                                                </filter>
                                            </defs>
                                        </svg>

                                    </div>
                                    {/* Add your content here */}
                                    <div className="absolute flex items-start justify-center text-white max-w-[1279px] mx-auto w-full h-auto ">
                                        <div style={{ width: "50%" }} className='h-full'>
                                            <section>
                                                <div>
                                                    <Image layout="intrinsic" src="/images/thankyou/tick.svg" height={100} width={100} alt="tick" />
                                                </div>
                                                <div>
                                                    <h2 className={`${montserrat.className} font-[700] text-[54px] leading-[65.83px] translate-[-2%] text-[#000000] text-start mt-[16px]`}>Booking Confirmed Successfully!</h2>
                                                    <p className={`font-[400] text-[20px] leading-[36px] translate-[-2%] text-[#6B6B6B] text-start mt-[32px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio. Posuere soll.</p>
                                                    <Link href='/' className="text-[#dfdbec] bg-[#350ABC] mt-[42px]  rounded-[4px] text-[14px] font-normal px-[65px] h-[48px] py-[14px] text-center inline-flex items-center ">
                                                        <span className='mr-2'>
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.666 8H3.33268" stroke="#F3F0FF" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8 3.3335L3.33333 8.00016L8 12.6668" stroke="#F3F0FF" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </span>

                                                        Return to Home Page
                                                    </Link>
                                                </div>

                                            </section>
                                        </div>
                                        <div style={{ width: "50%" }} className=' h-[100vh]'>
                                            <div style={{ zIndex: '-1' }} className="absolute top-[-258px] left-[449px] text-black">
                                                <svg width="608" height="576" viewBox="0 0 608 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.2" filter="url(#filter0_f_944_2074)">
                                                        <circle cx="304" cy="272" r="104" fill="#FFF172" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_f_944_2074" x="0" y="-32" width="608" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_944_2074" />
                                                        </filter>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <div className='bg-[#FFFFFF] h-[110px] rounded-[8px] max-w-[460px] m-auto' style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.08)', marginRight: '0' }}>
                                                <div className='flex justify-between  items-start pb-[29px] px-[41.5px] pt-[17px] m-auto'>
                                                    <div>
                                                        <h3 className={`${montserrat.className} text-[40px] leading-[48.76px] tracking-[-2%] text-[#000000] font-[700]`}>$260.00</h3>
                                                        <p className={` text-[11px] leading-[24px] tracking-[-1%] text-[#6B6B6B] font-[400]`}>Payment Successful.</p>
                                                    </div>
                                                    <div>
                                                        <svg width="79" height="78" viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="39.5" cy="39" r="39" fill="#F8F6FF" />
                                                            <circle cx="39" cy="39" r="28" fill="#EBE6FF" />
                                                            <path d="M36.107 50C39.2208 41.2 47.9997 31.6667 52 28C43.6968 30.3294 37.945 38.6765 36.107 42.5588L31.2418 36.4118C28.2949 35.8311 27.0674 38.1163 27.0027 39.5266C26.99 39.8036 27.1811 40.0323 27.4114 40.1867C29.3402 41.4803 34.0965 47.0921 36.107 50Z" fill="#350ABC" />
                                                        </svg>

                                                    </div>
                                                </div>
                                                <div className='w-[103.5%]'>
                                                    <div className='relative right-[6px] z-10'>
                                                        <span className='text-black '>
                                                            <svg width="463" height="425" className='w-full' viewBox="0 0 463 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g filter="url(#filter0_b_944_2088)">
                                                                    <path d="M0 8C0 3.58172 3.58172 0 8 0H455C459.418 0 463 3.58171 463 7.99999V420.151C463 422.829 460.829 425 458.151 425C455.473 425 453.37 422.787 452.631 420.213C450.445 412.595 443.17 407 434.532 407C425.516 407 417.985 413.095 416.175 421.223C415.718 423.275 414.057 425 411.955 425C409.853 425 408.192 423.275 407.735 421.223C405.926 413.095 398.394 407 389.379 407C380.363 407 372.832 413.095 371.022 421.223C370.566 423.275 368.904 425 366.802 425C364.7 425 363.039 423.275 362.582 421.223C360.773 413.095 353.242 407 344.226 407C335.21 407 327.679 413.095 325.869 421.223C325.413 423.275 323.752 425 321.649 425C319.547 425 317.886 423.275 317.429 421.223C315.62 413.095 308.089 407 299.073 407C290.057 407 282.526 413.095 280.717 421.223C280.26 423.275 278.599 425 276.496 425C274.394 425 272.733 423.275 272.276 421.223C270.467 413.095 262.936 407 253.92 407C244.904 407 237.373 413.095 235.564 421.223C235.107 423.275 233.446 425 231.344 425C229.241 425 227.58 423.275 227.124 421.223C225.314 413.095 217.783 407 208.767 407C199.751 407 192.22 413.095 190.411 421.223C189.954 423.275 188.293 425 186.191 425C184.089 425 182.427 423.275 181.971 421.223C180.161 413.095 172.63 407 163.614 407C154.599 407 147.067 413.095 145.258 421.223C144.801 423.275 143.14 425 141.038 425C138.936 425 137.275 423.275 136.818 421.223C135.008 413.095 127.477 407 118.461 407C109.446 407 101.915 413.095 100.105 421.223C99.648 423.275 97.9869 425 95.8848 425C93.7827 425 92.1216 423.275 91.6647 421.223C89.8551 413.095 82.324 407 73.3083 407C64.2927 407 56.7616 413.095 54.9519 421.223C54.4951 423.275 52.834 425 50.7319 425C48.6298 425 46.9687 423.275 46.5118 421.223C44.7021 413.095 37.1711 407 28.1554 407C19.4606 407 12.1466 412.669 10.0138 420.363C9.32145 422.861 7.2842 425 4.69257 425C2.10093 425 0 422.899 0 420.307V8Z" fill="url(#paint0_linear_944_2088)" />
                                                                    <path d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H455C459.142 0.5 462.5 3.85785 462.5 7.99999V420.151C462.5 422.553 460.553 424.5 458.151 424.5C455.772 424.5 453.812 422.517 453.111 420.075C450.862 412.237 443.386 406.5 434.532 406.5C425.291 406.5 417.55 412.749 415.687 421.115C415.267 423.004 413.761 424.5 411.955 424.5C410.149 424.5 408.644 423.004 408.223 421.115C406.361 412.749 398.62 406.5 389.379 406.5C380.138 406.5 372.397 412.749 370.534 421.115C370.114 423.004 368.608 424.5 366.802 424.5C364.996 424.5 363.491 423.004 363.07 421.115C361.208 412.749 353.467 406.5 344.226 406.5C334.985 406.5 327.244 412.749 325.381 421.115C324.961 423.004 323.455 424.5 321.649 424.5C319.844 424.5 318.338 423.004 317.917 421.115C316.055 412.749 308.314 406.5 299.073 406.5C289.832 406.5 282.091 412.749 280.229 421.115C279.808 423.004 278.302 424.5 276.496 424.5C274.691 424.5 273.185 423.004 272.764 421.115C270.902 412.749 263.161 406.5 253.92 406.5C244.679 406.5 236.938 412.749 235.076 421.115C234.655 423.004 233.149 424.5 231.344 424.5C229.538 424.5 228.032 423.004 227.612 421.115C225.749 412.749 218.008 406.5 208.767 406.5C199.526 406.5 191.785 412.749 189.923 421.115C189.502 423.004 187.997 424.5 186.191 424.5C184.385 424.5 182.879 423.004 182.459 421.115C180.596 412.749 172.855 406.5 163.614 406.5C154.373 406.5 146.632 412.749 144.77 421.115C144.349 423.004 142.844 424.5 141.038 424.5C139.232 424.5 137.726 423.004 137.306 421.115C135.443 412.749 127.702 406.5 118.461 406.5C109.22 406.5 101.479 412.749 99.6168 421.115C99.1961 423.004 97.6907 424.5 95.8848 424.5C94.0789 424.5 92.5735 423.004 92.1528 421.115C90.2903 412.749 82.5493 406.5 73.3083 406.5C64.0674 406.5 56.3264 412.749 54.4639 421.115C54.0431 423.004 52.5377 424.5 50.7319 424.5C48.926 424.5 47.4206 423.004 46.9999 421.115C45.1373 412.749 37.3964 406.5 28.1554 406.5C19.2428 406.5 11.7266 412.313 9.53193 420.23C8.87735 422.591 6.98573 424.5 4.69257 424.5C2.37708 424.5 0.5 422.623 0.5 420.307V8Z" stroke="#F7F7F7" />
                                                                </g>
                                                                <defs>
                                                                    <filter id="filter0_b_944_2088" x="-8" y="-8" width="479" height="441" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_944_2088" />
                                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_944_2088" result="shape" />
                                                                    </filter>
                                                                    <linearGradient id="paint0_linear_944_2088" x1="0" y1="0" x2="366.363" y2="496.332" gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="white" stop-opacity="0.88" />
                                                                        <stop offset="0.453985" stop-color="white" stop-opacity="0.6" />
                                                                        <stop offset="0.975" stop-color="white" stop-opacity="0.88" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>

                                                        </span>
                                                        <div className='text-black absolute top-0'>
                                                            <div className='h-[146px] w-full mt-[36px] flex flex-col justify-start items-center mb-[30px] pb-[81px] py-[44px] px-[20px]' style={{ margin: '0px' }}>
                                                                <div className='flex justify-between items-center w-[94%]'>
                                                                    <h3 className={`${montserrat.className} text-[12px] font-[500] leading-[14.63px] tracking-[-1%] text-[#000000]`}>Worker Name:</h3>
                                                                    <div className="flex items-center justify-center">
                                                                        <div className='relative bottom-[1px]'>

                                                                            <Image width={15} height={15} className='me-1' src='/images/booking/5.svg' alt='step-1' />
                                                                        </div>
                                                                        <p><span className={`${montserrat.className} text-[14px] font-[600] leading-normal tracking-[-0.14px] text-[#000000]`}>Sarah Miller</span> <span className="text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#000000] ml-[12px]">5.0/5</span> </p>
                                                                    </div>
                                                                </div>
                                                                <span className='my-[24px] w-full'>
                                                                    <svg width="438" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>

                                                                <div className='flex justify-between items-center w-[94%]'>
                                                                    <h3 className={`${montserrat.className} text-[12px] font-[500] leading-[14.63px] tracking-[-1%] text-[#000000]`}>Booked Service:</h3>
                                                                    <div className="flex items-center justify-center">
                                                                        <p className={` flex justify-center items-center gap-2 text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M10 3.5H2C1.44772 3.5 1 3.94772 1 4.5V9.5C1 10.0523 1.44772 10.5 2 10.5H10C10.5523 10.5 11 10.0523 11 9.5V4.5C11 3.94772 10.5523 3.5 10 3.5Z" stroke="#6B6B6B" stroke-width="0.646154" stroke-linecap="round" stroke-linejoin="round" />
                                                                            <path d="M8 10.5V2.5C8 2.23478 7.89464 1.98043 7.70711 1.79289C7.51957 1.60536 7.26522 1.5 7 1.5H5C4.73478 1.5 4.48043 1.60536 4.29289 1.79289C4.10536 1.98043 4 2.23478 4 2.5V10.5" stroke="#6B6B6B" stroke-width="0.646154" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                        </span> Cocktail Server</p>
                                                                    </div>
                                                                </div>
                                                                <span className='my-[24px] w-full'>
                                                                    <svg width="438" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>

                                                                <div className='flex justify-between items-center w-[94%]'>
                                                                    <h3 className={`${montserrat.className} text-[12px] font-[500] leading-[14.63px] tracking-[-1%] text-[#000000]`}>Total Paid Amount:</h3>
                                                                    <div className="flex items-center justify-center">
                                                                        <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>$260</p>
                                                                    </div>
                                                                </div>
                                                                <span className='my-[24px] w-full'>
                                                                    <svg className='w-full' width="238" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>

                                                                <div className='flex justify-between items-center w-[94%]'>
                                                                    <h3 className={`${montserrat.className} text-[12px] font-[500] leading-[14.63px] tracking-[-1%] text-[#000000]`}>Event Details:</h3>
                                                                    <div className="flex items-center justify-center">
                                                                        <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>3796 Stutler Lane, Altoona, PA, 16601</p>
                                                                    </div>
                                                                </div>
                                                                <span className='my-[24px] w-full'>
                                                                    <svg className='w-full' width="238" height="1" viewBox="0 0 438 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <line x1="0.5" y1="0.5" x2="437.5" y2="0.5" stroke="#DEDEDE" stroke-linecap="round" />
                                                                    </svg>
                                                                </span>
                                                                <div className='flex justify-between items-center w-[94%]'>
                                                                    <h3 className={`${montserrat.className} text-[12px] font-[500] leading-[14.63px] tracking-[-1%] text-[#000000]`}>Contact:</h3>
                                                                    <div className="flex items-center justify-center">
                                                                        <p className={`text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#6B6B6B]`}>3796 Stutler Lane, Altoona, PA, 16601</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-[-53px] z-[0] right-[-300px] text-black">
                                                <svg width="733" height="602" viewBox="0 0 733 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.3" filter="url(#filter0_f_944_2073)">
                                                        <circle cx="366.5" cy="366.5" r="166.5" fill="#FCE1C8" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_f_944_2073" x="0" y="0" width="733" height="733" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_944_2073" />
                                                        </filter>
                                                    </defs>
                                                </svg>

                                            </div>

                                        </div>
                                    </div>
                                </main>
                            </motion.div>
                        </>
                    )}
                </form>

                {/* Navigation */}
                {/* <div className='mt-8 pt-5 relative'>
                    <div className='flex justify-between'>
                        <button
                            type='button'
                            onClick={prev}
                            disabled={currentStep === 0}
                            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M15.75 19.5L8.25 12l7.5-7.5'
                                />
                            </svg>
                        </button>
                        <button
                            type='button'
                            onClick={next}
                            // disabled={currentStep === steps.length - 1}
                            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                                />
                            </svg>
                        </button>
                    </div>
                </div>  */}
            </section>
        </>
    )
}
