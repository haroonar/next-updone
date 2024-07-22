import { useForm } from 'react-hook-form';
import { Suspense, useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import { CHOOSE_SERVICES } from '@/app/libs/Constants';
import TimeAndCalander from '../booking-calander/calander-time';
import { useBookingContext } from '@/app/libs/context/BookingContext';
import { highlightedDatesAvailable, highlightedDatesNotAvailable } from '../../home/detail';

const AccordionForm = () => {
    const [isOpenFirst, setIsOpenFirst] = useState(true);
    const [isOpenSecond, setIsOpenSecond] = useState(false);
    const [isOpenThird, setIsOpenThird] = useState(false);

    const [firstSectionComplete, setFirstSectionComplete] = useState(false);
    const [secondSectionComplete, setSecondSectionComplete] = useState(false);
    const [thirdSectionComplete, setThirdSectionComplete] = useState(false);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const toggleFirstAccordion = () => {
        setIsOpenFirst(!isOpenFirst);
        setIsOpenSecond(false);
        setIsOpenThird(false)
    };

    const toggleSecondAccordion = () => {
        setIsOpenSecond(!isOpenSecond);
        setIsOpenFirst(false);
        setIsOpenThird(false)
    };

    const toggleThirdAccordion = () => {
        setIsOpenThird(!isOpenThird);
        setIsOpenFirst(false);
        setIsOpenSecond(false);
    };

    const handleContinueFirst = () => {
        // Perform validation using react-hook-form methods
        handleSubmit(onFirstSubmit)(); // Trigger form submission
    };
    const handleContinueSecond = () => {
        // Perform validation using react-hook-form methods
        handleSubmit(onSecondSubmit)(); // Trigger form submission
    };
    const onFirstSubmit = (data: any) => {
        console.log('Form data11:', data);
        // Handle further submission logic here
        if (!errors.city && !errors.postalcode && !errors.location && !errors.address) {
            setFirstSectionComplete(true);
            toggleSecondAccordion(); // Close the first accordion
        }
    };
    const onSecondSubmit = (data: any) => {
        console.log('Form data222:', data);
        // Handle further submission logic here
        if (!errors.message1 && !errors.message1) {
            setSecondSectionComplete(true);
            toggleSecondAccordion(); // Close the second accordion
            toggleThirdAccordion()
        }
    };

    const selectStyles: { [key: string]: string } = {
        border: '1px solid #EFEFEF',
        padding: '10px 30px 10px 27px',
        marginTop: '12px',
        paddingLeft: '27px',
        minHeight: '52px',
        fontWeight: '400',
        lineHeight: '24px',
        width: '100%',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#2C2240',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%239D9D9D' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 25px top 50%',
        paddingRight: '30px',
        appearance: 'none',
    };

    const errorStyles = {
        border: '1px solid red',
        outline: 'red',
    };

    const countryOptions = [
        { value: '', label: 'Choose City *', disabled: true },
        { value: 'usa', label: 'USA' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'canada', label: 'Canada' }
    ];

    const locationOptions = [
        { value: '', label: 'Choose Event Location *', disabled: true },
        { value: 'los angeles', label: 'Los Angeles' },
    ];
    const { isStaffListerFilter, setSelectedTimeId, selectedTimeId, scrollRef, selectedTimes, scrollDown, scrollUp, handleAddToBooking, handleTimeSelection, availableTimesMap, setDate, date, timessss, staff } = useBookingContext();
    return (
        <div className="w-full">
            {/* First accordion section */}
            <div className={`${isOpenFirst ? "pb-[24px]" : "pb-[37.5px] !py-[24px]"} pt-[37.5px] px-[40px] rounded-[8px] bg-[#FFF] mb-4 ${isOpenFirst ? 'open' : ''}`}>
                <div className="flex items-center justify-between cursor-pointer" onClick={toggleFirstAccordion}>
                    <div className='flex justify-start items-start flex-col gap-[16px]'>
                        <div className='flex justify-center gap-[12px] items-center'>
                            <Image width={24} height={24} src='/images/booking/barglass.svg' alt='user' />
                            <h2 className={` !text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]`}>Event Location</h2>
                        </div>
                        {firstSectionComplete && <span className={`${styles.lato_font} text-[#6B6B6B] text-[16px] font-[400] leading-[20.4px] tracking-[-0.32px]`}>11121 York Rd, Cockeysville Maryland, 21030</span>}
                    </div>
                    {firstSectionComplete && (
                        <div className="flex items-center justify-center flex-col gap-[16px]">
                            <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={15} width={22} alt="tick" />
                            <span className="text-[#038C11] tracking-[-0.32px] leading-[20.4px] text-[16px] font-[400]">We are available</span>
                        </div>
                    )}
                </div>
                {isOpenFirst && (
                    <form onSubmit={handleSubmit(onFirstSubmit)}>
                        <div className="accordion-content mt-[22px]">
                            <div className='space-y-[30px] mb-[32px]'>
                                <div className='flex justify-between gap-[20px] items-center'>
                                    <div className="relative w-full flex">
                                        <select
                                            {...register('city', { required: true })}
                                            id="city"
                                            name='city'
                                            style={ selectStyles}
                                            className={`${errors.city ? "outline-[red]":"outline-none"}`}
                                        >
                                            <option disabled hidden value="">City*</option>
                                            {countryOptions.map((option, index) => (
                                                <option key={index} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.city && <span className="error-message absolute  text-red-500 top-[63px]">City is required.</span>}
                                    </div>
                                    <div className="relative w-full flex">
                                        <input
                                            {...register('postalcode', { required: true })}
                                            type="search"
                                            id="postalcode"
                                            name='postalcode'
                                            className={`defaultsearch border-[1px] ${errors.postalcode ? "outline-[red]":"outline-none"}  border-[#EFEFEF] pr-[10px] py-[14px] pl-[20px] min-h-[52px] w-full  mt-[12px] rounded-[4px] `}
                                            placeholder="Postal Code *"
                                        />
                                        {errors.postalcode && <span className="error-message absolute text-red-500 top-[63px]">Postal Code is required.</span>}
                                    </div>
                                </div>
                                <div className="relative w-full flex">
                                    <select
                                        {...register('location', { required: true })}
                                        id="location"
                                        name='location'
                                        className={`!pl-[50px] !m-0 ${errors.location ? "outline-[red]":"outline-none"}`}
                                        style={selectStyles}

                                    >
                                        <option disabled hidden value="">Choose Event Location *</option>
                                        {locationOptions.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.location && <span className="error-message absolute text-red-500 top-[52px]">Event Location is required.</span>}
                                </div>
                                <div className="relative flex">
                                    <input
                                        {...register('address', { required: true })}
                                        type="search"
                                        id="address"
                                        name='address'
                                        className={`defaultsearch border-[1px] ${errors.address ? "outline-[red]":"outline-none"} border-[#EFEFEF] py-[14px] pl-[43px] pr-[10px] min-h-[52px] w-full  rounded-[4px]`}
                                        placeholder="Enter Address *"
                                    />
                                    {errors.address && <span className="error-message absolute text-red-500 top-[52px]">Address is required.</span>}
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button" // Change to type="button" to prevent form submission
                                    onClick={handleContinueFirst} // Call your custom continue handler
                                    className="flex justify-center rounded-[4px] w-[216px] py-2 text-[16px] font-[400] leading-[26px] tracking-[-2%] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                >
                                    <span className='opacity-[90%] text-[#F3F0FF] !text-[16px] leading-[26px]'>Continue</span>
                                    <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                                </button>
                            </div>
                        </div>
                    </form>

                )}
            </div>
            {/* Second accordion section */}
            <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`rounded-[8px] bg-[#FFF]  mb-4  ${isOpenSecond ? "pb-[24px]" : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenSecond ? 'open' : ''}`}>
                <div
                    className="flex items-center justify-between cursor-pointer"
                >
                    <div className='flex justify-center gap-[12px] items-center'>
                        <Image width={23} height={23} src='/images/booking/detailTask.svg' alt='user' />
                        <h2 className=" !text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">Details about the task</h2>
                    </div>
                    {secondSectionComplete && (
                        <div className="flex items-center justify-center flex-col gap-[16px]">
                            <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={17} width={24} alt="tick" />
                        </div>
                    )}
                </div>
                {isOpenSecond && (
                    <form onSubmit={handleSubmit(onSecondSubmit)}>
                        <div className="accordion-content mt-[52px]">
                            <div className='flex justify-center items-start !gap-[48px]'>
                                <div className='space-y-[17px] pb-[28px]  !w-[18%] capitalize ml-[42px]'>
                                    <h3 className='font-[500] text-center leading-[19.93px] tracking-[0.28px] !text-[14.82px] !text-[#000000]'>
                                        Choose Service
                                    </h3>
                                    {CHOOSE_SERVICES.map((service) => {
                                        return (
                                            <h3
                                                style={{ background: service.id === 2 ? "#20192e" : "F3F0FF" }}
                                                key={service.id}
                                                className={`${service.id === 2 ? "!bg-[#350ABC] !text-[#e0d9f8]" : "opacity-[40%] !m-0 !mt-[24.99px]"} cursor-pointer !text-[12.49px] w-full leading-[21.42px] tracking-[-2%] font-[400] text-center rounded-[29px] !py-[10px] !px-[42px] bg-[#F3F0FF] !text-[#9F9F9F]'
                                                }`}
                                            >
                                                {service.text}
                                            </h3>
                                        );
                                    })}
                                </div>

                                <div className={`space-y-[30px] !w-[82%] pr-[42px]`}>
                                    <h2 className={`${styles.lato_font} w-[82% !text-[#000000] text-[16px] tracking-[-2%]  leading-[20.4px] `}>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</h2>
                                    <div className="relative">
                                        <div>
                                            <div className="absolute inset-y-0  start-0 flex items-center ps-[16px] pointer-events-none !pt-[1px]">

                                                <Image width={15} height={15} src='/images/booking/message.svg' alt='step-1' />
                                            </div>
                                            <input
                                                {...register('message1', { required: true })}
                                                type="search"
                                                id="message1"
                                                name='message1'
                                                className={`border-[1px] ${errors.message1 ? "outline-[red]":"outline-none"} !border-[#EFEFEF] !py-[12px] !text-[14px] leading-[24px] tracking-[-2%] !font-[400] pl-[38px] pr-[10px] w-full rounded-[4px] ${errors.message1 ? 'border-red-500 ' : ""}`}
                                                placeholder="Write down a suitable title fo the Job "
                                            />
                                        </div>
                                        {errors.message1 && <span className="error-message absolute text-red-500 top-[49px]">required.</span>}
                                    </div>
                                    <div className="relative">
                                        <div>
                                            <div className="absolute inset-y-0 flox start-0 !mt-[18px] items-center ps-[16px] pointer-events-none !pt-[1px]">

                                                <Image width={15} height={15} src='/images/booking/message.svg' alt='step-1' />
                                            </div>
                                            <textarea
                                                {...register('message2', { required: true })}
                                                id="message2"
                                                name='message2'
                                                className={`!h-[112px] border-[1px] ${errors.message2 ? "outline-[red]":"outline-none"}  !border-[#EFEFEF] !py-[12px] !text-[14px] leading-[24px] tracking-[-2%] !font-[400] pl-[38px] pr-[10px] w-full rounded-[4px] ${errors.message2 ? 'border-red-500 ' : ""}`}
                                                placeholder="Hi! Looking for help updating my 650 sq ft apartment. I’m on the 2nd floor up a short flight of stairs. Please bring an electric drill and ring doorbell number 3. Thanks!"
                                            ></textarea>
                                        </div>

                                        {errors.message2 && <span className="error-message absolute text-red-500 top-[112px]"> required.</span>}

                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={handleContinueSecond}
                                    className="flex justify-center rounded-[4px]  w-[216px] py-2  text-[16px] font-[400] leading-[26px] tracking-[-2%] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                >
                                    <span className='opacity-[90%] text-[#F3F0FF] !text-[16px] leading-[26px]'>Continue</span>
                                    <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                )}

            </div>
             {/* Third accordion section */}
             <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`rounded-[8px] bg-[#FFF]  mb-4  ${isOpenThird ? "pb-[24px]" : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenThird ? 'open' : ''}`}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={toggleThirdAccordion}
                    >
                        <div className='flex justify-center gap-[12px] items-center'>
                            <Image width={24} height={25} src='/images/booking/clock.svg' alt='user' />
                            <h2 className=" !text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">Choose Date & Time</h2>

                        </div>
                    </div>
                    <div className='relative right-[22px]'>
                        {isOpenThird && (
                            <div className="accordion-content mt-[22px] flex justify-start items-start gap-[33px]">
                                <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
                                    <TimeAndCalander
                                        isStepOneCalander
                                        date={date}
                                        setDate={setDate}
                                        setSelectedTimeId={setSelectedTimeId}
                                        scrollRef={scrollRef}
                                        availableTimesMap={availableTimesMap}
                                        handleTimeSelection={handleTimeSelection}
                                        isStaffListerFilter
                                        selectedTimeId={selectedTimeId}
                                        scrollUp={scrollUp}
                                        scrollDown={scrollDown}
                                        handleAddToBooking={handleAddToBooking}
                                        highlightedDatesNotAvailable={highlightedDatesNotAvailable}
                                        highlightedDatesAvailable={highlightedDatesAvailable}
                                    />

                                </Suspense>
                                <div style={{ marginLeft: isOpenThird ? "20px" : "" }} className='w-full flex justify-between items-start flex-col gap-[14.28px]'>
                                    <h2 className='leading-[19.93px] translate-[0.316px] font-[500] text-[16.608px] text-[#000000] '>Booking Times</h2>
                                    {timessss?.length === 0 ? <><div className='w-full h-[50vh] flex justify-center items-center capitalize'>
                                        <div>
                                            <Image width={293} height={207} src='/images/booking/select_time.svg' alt='calander' />
                                            <h2 className='text-center !text-[#000000] font-[600] text-[16.61px] tracking-[-1%] leading-[19.93px] mt-[19px]'>Book Your staff now</h2>
                                        </div>
                                    </div></> :
                                        <div style={{ width: selectedTimes.length > 0 ? '34rem' : "100%" }} className=' h-[47vh] overflow-auto w-full space-y-3'>
                                            {timessss?.map((time: any) => {
                                                return (
                                                    <div className='w-full flex flex-col justify-start items-start text-[14px] font-normal text-[#6B6B6B] leading-[24px] gap-[8px] tracking-[-2%]'>
                                                        <div style={{ boxShadow: '0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)' }} className='bg-[#FFF] flex justify-between  items-center min-h-[50px] max-h-[100px] border-[0.892px] rounded-[3.569px]  border-[#EDE9FF] w-full'>
                                                            <div className='flex items-center gap-[7.14px] pl-[17.85px]'>
                                                                <Image width={14} height={14} color='red' src='/images/detail/calnder.svg' alt='calander' />
                                                                <h3 className='tracking-[-0.214px] leading-[21.416px] min-w-[70px]  font-[400] text-[10.708px] text-[#2C2240] mr-2'>{time.date}</h3>
                                                            </div>
                                                            <div className=' justify-between flex items-center gap-[45px] tracking-[-0.25px]  min-w-[200px] leading-[21.416px]  font-[400] text-[12.493px] text-[#848486]'>
                                                                <div className='flex flex-col'>
                                                                    {time.times.map((singleTime: string, index: number) => (
                                                                        <div key={index} className='flex items-center gap-1 justify-center'>
                                                                            {singleTime}
                                                                            <span>
                                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect x="0.67041" y="0.487305" width="10.7081" height="10.7081" rx="5.35406" fill="#FFB0B0" />
                                                                                    <path d="M3.21558 5.84131H8.42091" stroke="#C70101" stroke-width="0.892344" stroke-linecap="round" stroke-linejoin="round" />
                                                                                </svg>

                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                            </div>
                                                            <div className='flex justify-center items-center gap-2'>
                                                                <span className={`${!isStaffListerFilter ? "left-[10px]" : 'left-[85px]'} relative `}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 13 13" fill="none">
                                                                    <path d="M6.74951 10.604H11.4343" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M9.0919 2.01531C9.29898 1.80823 9.57985 1.69189 9.8727 1.69189C10.0177 1.69189 10.1613 1.72046 10.2953 1.77595C10.4292 1.83144 10.551 1.91278 10.6535 2.01531C10.756 2.11785 10.8374 2.23958 10.8929 2.37355C10.9484 2.50752 10.9769 2.65111 10.9769 2.79611C10.9769 2.94112 10.9484 3.08471 10.8929 3.21868C10.8374 3.35265 10.756 3.47438 10.6535 3.57691L4.14683 10.0836L2.0647 10.6041L2.58523 8.52198L9.0919 2.01531Z" stroke="black" stroke-width="0.520534" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg></span>
                                                                <div className='bg-[#FDD] ml-[15px] flex justify-center items-center min-h-[50px] max-h-[100px]  w-[33.017px] relative left-[0.8px]' style={{ borderTopRightRadius: '3px', borderBottomRightRadius: '3px' }}>
                                                                    <Image width={12} height={15} color='red' src='/images/detail/del.svg' alt='calander' />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                    {isOpenThird &&
                        <div className="text-center">
                            <button
                                type="button"
                                className="flex justify-center rounded-[4px]  w-auto py-2  text-[16px] font-[400] leading-[26px] tracking-[-2%] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                onClick={handleContinueSecond}
                            >
                                <span className='opacity-[90%] text-[#F3F0FF] !text-[16px] leading-[26px]'>See Taskers and Prices</span>
                                <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                            </button>
                        </div>
                    }
                </div>
        </div>
    );
};

export default AccordionForm;
