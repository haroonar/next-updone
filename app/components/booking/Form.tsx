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
const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});
type Inputs = z.infer<typeof FormDataSchema>

const steps = [
    {
        id: 'Details',
        image: <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step1.svg' alt='step-1' />,
        name: 'Event and contact details',
        fields: ['firstName', 'lastName', 'email']
    },
    {
        id: 'Payment',
        name: 'Pay the cost of hiring',
        image: <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step2.svg' alt='step-1' />,
        fields: ['country', 'state', 'city', 'street', 'zip']
    },
    {
        id: 'Thank You', name: 'Congratulation!',
        image: <Image style={{ maxWidth: "90px" }} width={500} height={500} src='/images/step3.svg' alt='step-1' />,

    }
]


export default function Form() {
    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(true); // Start with registration form hidden
    const [close, setClose] = useState(true)
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
        //   await handleSubmit(processForm)()
        //               setPreviousStep(currentStep)
        //     setCurrentStep(step => step + 1)
        if (currentStep < steps.length - 1) {
            await handleSubmit(processForm)()
            if (currentStep === steps.length - 2) {
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
        }
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

    const selectStyles: any = {
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


    const placeholderOptionStyles: any = {
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
            <section className='max-w-[1279px] mx-auto'>
                {/* steps */}
                <nav aria-label='Progress' className='relative left-6'>
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
                                                width: " 200px",
                                                position: "absolute",
                                                marginLeft: "147px"
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
                                                width: "184px",
                                                position: "absolute",
                                                /* left: 0; */
                                                /* right: 0; */
                                                marginLeft: '153px'
                                            }}
                                            className='flex w-full flex-row justify-start items-center border-l-[1px] border-[#000000] opacity-[0.3px] py-2 pl-4 md:border-l-0 md:border-t-[1px] md:pb-0 md:pl-0 md:pt-4'
                                            aria-current='step'
                                        >

                                        </div>
                                    </div>
                                ) : step.name === 'Congratulation!' ? (
                                    <div className='ml-[25px] flex justify-start items-center'>
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
                                ) : <div className='flex justify-start items-center gap-4'>

                                    <div className='flex justify-start items-center'>
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
                {/* //another form */}
                <motion.div
                    initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                >
                    <form action="">
                        <div className='flex gap-[34px] mx-auto max-w-[1064px]  min-h-[638px] mt-[74px] mb-[248px]'>
                            <div className='w-[44%]  h-[100vh] '>
                                {/* //card section */}
                                <div>
                                    <h2 className='px-[10px] pb-[10px] mb-[22px] montserrat-font font-[600] leading-normal text-[32px] tracking-[-0.32px] text-[#000000]'>
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
                                                <h1 className='text-[20px] font-[600] montserrat-font leading-normal tracking-[-0.2px] text-[#000000]'>Sarah Miler</h1>
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
                                <div className='min-h-[47px] w-full  mb-[24px] mt-[40px] bg-[#FFF] border-[1px] border-[#EDE9FF] rounded-[4px] py-[14px] px-[26px] flex justify-between items-center' style={{ boxShadow: '0px 8px 26px 0px rgba(53, 10, 188, 0.06)' }}>
                                    <div className='flex justify-center items-center '>
                                        <span className='mr-[10px]'><Image width={21} height={21} src='/images/booking/calander.svg' alt='step-1' /></span> <p></p>
                                        <div><div className='text-[20px] font-[400] leading-normal tracking-[-0.2px] text-[#350ABC] flex gap-[10px] justify-center items-center'><div ><h1 className={`${montserrat.className} text-[20px] mt-[1.6px] font-[400] leading-normal tracking-[-1.2px] text-[#350ABC] capitalize`}>june</h1></div><span> 6<sup className='relative top-[.1px] text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#7658D3]'>th</sup></span></div>

                                        </div>
                                        <span><div className='text-[20px] font-[400] leading-normal tracking-[-0.2px] text-[#350ABC] flex gap-[10px] justify-center items-center'><div ><h1 className={`${montserrat.className} text-[20px] font-[400] leading-normal tracking-[-1.2px] text-[#350ABC] capitalize ml-[20px] mt-[1.6px]`}>Time</h1></div><span>10.30<sup className='relative top-[.1px] text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#7658D3]'>pm</sup></span>-<span>1.30<sup className='relative top-[.1px] text-[12px] font-[400] leading-[24px] tracking-[-0.24px] text-[#7658D3]'>am</sup></span></div>

                                        </span>
                                    </div>
                                    <div>
                                        <Image width={21} height={21} src='/images/booking/pancel.svg' alt='step-1' />
                                    </div>
                                </div>
                                {/* cast break down section */}
                                <div>
                                    <h1 className='text-[20px] font-[600] montserrat-font p-[8px] mb-[16px] mt-[24px] leading-normal tracking-[-0.2px] text-[#000000]'>Cost Breakdown</h1>
                                    <div className="mx-auto max-w-3xl rounded-[4px] p-[20px]" style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.08)' }}>
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
                                                                <div className='flex justify-center items-center'>
                                                                    <span className="text-[#6B6B6B] text-[10px] font-normal leading-[26px] mr-2">4 days x 5 hours</span>
                                                                    <td style={{ letterSpacing: '-2%' }} className="text-right leading-[24px] text-[#2C2240] text-[14px] font-normal">5 h</td>
                                                                </div>
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
                                                        <td className="whitespace-nowrap py-2 md:w-[384px] pb-[27px]">
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
                                        <div className="whitespace-nowrap mt-[27px] md:w-[384px] " style={{ width: '100%' }}>
                                            <div className="flex justify-between items-center gap-4">
                                                <p style={{ letterSpacing: '-2%' }} className=" text-[#000000] leading-normal text-[20px] montserrat-font font-[600]">
                                                    Total
                                                </p>
                                                <h1 style={{ letterSpacing: '-1%' }} className="text-right leading-normal text-[#000000] text-[32px] font-[600] montserrat-font">$1000.00</h1>
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
                                            <span><Image width={15} height={15} src='/images/booking/person.svg' alt='user' /></span>   <h1>Contact Details</h1>
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
                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
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
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
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
                                                        <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
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
                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                        placeholder="Company Name"

                                                    />

                                                </div>
                                            </div>
                                            <div className='flex mt-[30px] justify-start p-[10px] gap-[8px] text-[18px] font-[500] leading-[32px] tracking-[-0.36px] text-[#000000] items-center'>
                                                <span><Image width={18} height={18} src='/images/booking/barglass.svg' alt='user' /></span>   <h1>Event Location</h1>
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
                                                            className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
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
                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
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
                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
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

                                            {close ? <></> :
                                                <div style={{ height: showLoginForm ? "257px" : (showRegisterForm ? "430px" : "700px") }} className={`${styles.loginpopup}  w-40 right-0 h-40 z-10 absolute overflow-hidden`}>
                                                    <span className='relative bottom-[21px]'>
                                                        <Image width={98} height={98} src='/images/booking/6.svg' alt='step-1' />
                                                    </span>

                                                    {/* Close button */}
                                                    <button
                                                        className="absolute top-[11px] right-[11px] text-gray-500  hover:text-gray-800 focus:outline-none"
                                                        onClick={handleClose}
                                                    >
                                                        <Image width={12} height={12} src='/images/booking/7.svg' alt='step-1' />
                                                    </button>

                                                    {/* Background section */}
                                                    <div style={{ height: showLoginForm ? "193px" : "300px", bottom: showLoginForm ? '-59.125px' : '-130.125px' }} className='login_backgorund w-[529px] h-[193px] absolute bottom-[-59.125px] z-1 rounded-[56%]'>
                                                        {/* Content on top of background */}

                                                        {showLoginForm ?
                                                            <div className="relative text-center bottom-[-34px]">
                                                                <h1 className={styles.loginpopup_head}>
                                                                    Join Updone
                                                                </h1>
                                                                <p className={styles.loginpopup_body}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                                                                <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[80px]'>
                                                                    <button onClick={() => setShowLoginForm(false)} className={`${styles.login_btn}`}>Login</button>
                                                                    <button onClick={(e) => handleShowRegisterForm(e)} className={`${styles.register_btn}`}>Register</button>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="relative text-center bottom-[25px]">
                                                                {!showRegisterForm ? "" : <>
                                                                    <h1 className={`${styles.loginpopup_heads} bottom-[120px]`}>
                                                                        Welcome Back
                                                                    </h1>
                                                                    <p className={styles.loginpopup_bodys}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                                                                </>}
                                                                {
                                                                    showRegisterForm ? <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[143px] flex-col'>
                                                                        <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                            <div className="relative w-full" style={{ width: '320px' }}>


                                                                                <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                                                                    <Image width={14} height={14} src='/images/booking/8.svg' alt='step-1' />
                                                                                </div>
                                                                                <input
                                                                                    type="search"
                                                                                    id="default-search"
                                                                                    className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                    placeholder="Email address"

                                                                                />

                                                                            </div>
                                                                            <div className="flex items-center w-full" style={{ width: '320px' }}>
                                                                                <div className="absolute inset-y-0 mt-3 ml-[21px] start-0 flex items-center ps-3 pointer-events-none bottom-[20px]">
                                                                                    <Image width={14} height={15} src='/images/booking/9.svg' alt='step-1' />

                                                                                </div>
                                                                                <input
                                                                                    type="search"
                                                                                    id="default-search"
                                                                                    className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                    placeholder="Password"

                                                                                />
                                                                            </div>

                                                                        </div>
                                                                        <button className={`${styles.login_btn_}  mt-[20px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                                                                            Login
                                                                            <span className={`ml-2`}>
                                                                                <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                                                                            </span>

                                                                        </button>
                                                                    </div> :
                                                                        <div className='relative bottom-[412px]'>
                                                                            <div className='flex justify-center items-center gap-[7px] mx-24 relative bottom-[-145px] flex-col'>
                                                                                <h1 className={`${styles.registerpopup_head} bottom-[120px]`}>
                                                                                    Welcome Back
                                                                                </h1>
                                                                                <p className={styles.registerpopup_body}>Sign In or Sign up to updone to book pro event staff in a snap</p>
                                                                            </div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>


                                                                                    <div className="absolute inset-y-0 mt-3 ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                                            <path d="M11.6668 12.25V11.0833C11.6668 10.4645 11.421 9.871 10.9834 9.43342C10.5458 8.99583 9.95233 8.75 9.3335 8.75H4.66683C4.04799 8.75 3.4545 8.99583 3.01691 9.43342C2.57933 9.871 2.3335 10.4645 2.3335 11.0833V12.25" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                                            <path d="M6.99984 6.41667C8.2885 6.41667 9.33317 5.372 9.33317 4.08333C9.33317 2.79467 8.2885 1.75 6.99984 1.75C5.71117 1.75 4.6665 2.79467 4.6665 4.08333C4.6665 5.372 5.71117 6.41667 6.99984 6.41667Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                                        </svg>
                                                                                    </div>
                                                                                    <input
                                                                                        type="search"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                        placeholder="Full Name*"

                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>


                                                                                    <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                                                            <path d="M2.33366 3.20801H11.667C12.3087 3.20801 12.8337 3.73301 12.8337 4.37467V11.3747C12.8337 12.0163 12.3087 12.5413 11.667 12.5413H2.33366C1.69199 12.5413 1.16699 12.0163 1.16699 11.3747V4.37467C1.16699 3.73301 1.69199 3.20801 2.33366 3.20801Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                                            <path d="M12.8337 4.37451L7.00033 8.45784L1.16699 4.37451" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                                        </svg>
                                                                                    </div>
                                                                                    <input
                                                                                        type="search"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                        placeholder="Email address"

                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>


                                                                                    <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                                                                        <Image width={16} height={16} src='/images/booking/company.svg' alt='step-1' />
                                                                                    </div>
                                                                                    <input
                                                                                        type="search"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                        placeholder="Company Name"

                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>


                                                                                    <div className="absolute inset-y-0 mt-3 ml-[12px] start-0 flex items-center ps-3 pointer-events-none">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                                                            <g clip-path="url(#clip0_628_1848)">
                                                                                                <path d="M12.8338 10.7444V12.4944C12.8345 12.6569 12.8012 12.8177 12.7361 12.9665C12.671 13.1154 12.5756 13.249 12.4559 13.3588C12.3362 13.4687 12.1948 13.5523 12.0409 13.6043C11.887 13.6564 11.724 13.6757 11.5622 13.6611C9.76714 13.466 8.04291 12.8527 6.52799 11.8702C5.11856 10.9746 3.9236 9.77967 3.02799 8.37024C2.04214 6.84844 1.42863 5.11582 1.23716 3.31274C1.22258 3.15143 1.24175 2.98885 1.29345 2.83535C1.34515 2.68186 1.42824 2.54081 1.53744 2.42118C1.64663 2.30156 1.77954 2.20599 1.9277 2.14054C2.07586 2.0751 2.23602 2.04122 2.39799 2.04107H4.14799C4.43109 2.03829 4.70554 2.13853 4.92018 2.32313C5.13483 2.50773 5.27503 2.76408 5.31466 3.04441C5.38852 3.60444 5.5255 4.15433 5.72299 4.68357C5.80147 4.89236 5.81846 5.11927 5.77194 5.33742C5.72541 5.55557 5.61733 5.7558 5.46049 5.91441L4.71966 6.65524C5.55006 8.11564 6.75925 9.32483 8.21966 10.1552L8.96049 9.41441C9.11909 9.25757 9.31933 9.14948 9.53748 9.10296C9.75562 9.05644 9.98253 9.07342 10.1913 9.15191C10.7206 9.34939 11.2705 9.48638 11.8305 9.56024C12.1139 9.60021 12.3726 9.74294 12.5576 9.96128C12.7426 10.1796 12.8409 10.4583 12.8338 10.7444Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                                                                                            </g>
                                                                                            <defs>
                                                                                                <clipPath id="clip0_628_1848">
                                                                                                    <rect width="14" height="14" fill="white" transform="translate(0 0.874512)" />
                                                                                                </clipPath>
                                                                                            </defs>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <input
                                                                                        type="search"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[42px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                                                                        placeholder="Company Name"

                                                                                    />

                                                                                </div>
                                                                            </div>
                                                                            {/* Dotted Border */}
                                                                            <div style={{ width: '320px', margin: '14px auto 0px' }} className='border border-b border-dashed'></div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>
                                                                                    <input
                                                                                        type="password"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px] pr-10`} // Adjusted paddingRight to accommodate the icon
                                                                                        placeholder="Password"
                                                                                    />
                                                                                    <div className="absolute inset-y-0 mt-[12px] right-0 flex items-center pr-3 pointer-events-none"> {/* Adjusted right spacing */}
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                                                            <path d="M0.583008 7.87467C0.583008 7.87467 2.91634 3.20801 6.99967 3.20801C11.083 3.20801 13.4163 7.87467 13.4163 7.87467C13.4163 7.87467 11.083 12.5413 6.99967 12.5413C2.91634 12.5413 0.583008 7.87467 0.583008 7.87467Z" stroke="#9F9F9F" strokeWidth="0.583333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                            <path d="M7 9.62451C7.9665 9.62451 8.75 8.84101 8.75 7.87451C8.75 6.90801 7.9665 6.12451 7 6.12451C6.0335 6.12451 5.25 6.90801 5.25 7.87451C5.25 8.84101 6.0335 9.62451 7 9.62451Z" stroke="#9F9F9F" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className='flex justify-between flex-col gap-[8px] items-center'>
                                                                                <div className="relative w-full" style={{ width: '320px' }}>
                                                                                    <input
                                                                                        type="password"
                                                                                        id="default-search"
                                                                                        className={`${styles.defaultsearch} border-[1px] mt-[12px] bg-[#FFFFFF] border-[#EFEFEF] py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px] pr-10`} // Adjusted paddingRight to accommodate the icon
                                                                                        placeholder="Confirm Password"
                                                                                    />
                                                                                    <div className="absolute inset-y-0 mt-[12px] right-0 flex items-center pr-3 pointer-events-none"> {/* Adjusted right spacing */}
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                                                            <path d="M0.583008 7.87467C0.583008 7.87467 2.91634 3.20801 6.99967 3.20801C11.083 3.20801 13.4163 7.87467 13.4163 7.87467C13.4163 7.87467 11.083 12.5413 6.99967 12.5413C2.91634 12.5413 0.583008 7.87467 0.583008 7.87467Z" stroke="#9F9F9F" strokeWidth="0.583333" strokeLinecap="round" strokeLinejoin="round" />
                                                                                            <path d="M7 9.62451C7.9665 9.62451 8.75 8.84101 8.75 7.87451C8.75 6.90801 7.9665 6.12451 7 6.12451C6.0335 6.12451 5.25 6.90801 5.25 7.87451C5.25 8.84101 6.0335 9.62451 7 9.62451Z" stroke="#9F9F9F" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <button style={{ width: '60.5%', margin: '21px auto' }} className={`${styles.login_btn_}  mt-[20px] w-full justify-center bg-[#350ABC] text-[#F3F0FF3] opacity-[0.9] rounded-[4px]  px-[16px] py-[18px] text-center inline-flex items-center`}>
                                                                                Register
                                                                                <span className={`ml-2`}>
                                                                                    <Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' />
                                                                                </span>

                                                                            </button>
                                                                        </div>
                                                                }
                                                            </div>
                                                        }
                                                    </div>

                                                </div>
                                            }

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
                    </form>
                </motion.div>

                {/* Form */}
                {/* <form className='pb-[160px] pt-[70px]' onSubmit={handleSubmit(processForm)}>
                    {currentStep === 0 && (
                        <motion.div
                            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='firstName'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        First name
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='firstName'
                                            {...register('firstName')}
                                            autoComplete='given-name'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.firstName?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='lastName'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Last name
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='lastName'
                                            {...register('lastName')}
                                            autoComplete='family-name'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.lastName?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='sm:col-span-4'>
                                    <label
                                        htmlFor='email'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Email address
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            id='email'
                                            type='email'
                                            {...register('email')}
                                            autoComplete='email'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.email?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
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
                            <h2 className='text-base font-semibold leading-7 text-gray-900'>
                                Address
                            </h2>
                            <p className='mt-1 text-sm leading-6 text-gray-600'>
                                Address where you can receive mail.
                            </p>

                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='country'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Country
                                    </label>
                                    <div className='mt-2'>
                                        <select
                                            id='country'
                                            {...register('country')}
                                            autoComplete='country-name'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                        {errors.country?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.country.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='col-span-full'>
                                    <label
                                        htmlFor='street'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Street address
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='street'
                                            {...register('street')}
                                            autoComplete='street-address'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.street?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.street.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='sm:col-span-2 sm:col-start-1'>
                                    <label
                                        htmlFor='city'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        City
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='city'
                                            {...register('city')}
                                            autoComplete='address-level2'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.city?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.city.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='state'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        State / Province
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='state'
                                            {...register('state')}
                                            autoComplete='address-level1'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.state?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.state.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label
                                        htmlFor='zip'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        ZIP / Postal code
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            type='text'
                                            id='zip'
                                            {...register('zip')}
                                            autoComplete='postal-code'
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                        />
                                        {errors.zip?.message && (
                                            <p className='mt-2 text-sm text-red-400'>
                                                {errors.zip.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <>
                            <h2 className='text-base font-semibold leading-7 text-gray-900'>
                                Complete
                            </h2>
                            <p className='mt-1 text-sm leading-6 text-gray-600'>
                                Thank you for your submission.
                            </p>
                        </>
                    )}
                </form> */}

                {/* Navigation */}
                {/* <div className='mt-8 pt-5'>
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
                </div> */}
            </section>
        </>
    )
}
