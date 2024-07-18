import { useState } from 'react';
import './AccordionForm.css'; // Import custom CSS for styling
import Image from 'next/image';
import { lato } from '@/app/libs/Fonts';
import { CHOOSE_SERVICES } from '@/app/libs/Constants';

const AccordionForm = () => {
    const [isOpenFirst, setIsOpenFirst] = useState(true);
    const [isOpenSecond, setIsOpenSecond] = useState(false);
    const [firstSectionComplete, setFirstSectionComplete] = useState(false);
    const [secondSectionComplete, setSecondSectionComplete] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    const toggleFirstAccordion = () => {
        setIsOpenFirst(!isOpenFirst);
        setIsOpenSecond(false);
    };

    const toggleSecondAccordion = () => {
        setIsOpenSecond(!isOpenSecond);
        setIsOpenFirst(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    const handleContinueFirst = () => {
        // Validate second section inputs here (example: phoneNumber, postalCode)
        // For simplicity, let's assume they are valid if not empty
        const phoneNumber = (document.getElementById('city') as HTMLInputElement)?.value.trim();
        console.log('phoneNumber', phoneNumber)
        const postalPostal = (document.getElementById('postalcode') as HTMLInputElement)?.value.trim();
        console.log('postalPostal', postalPostal)
        const postalLocation = (document.getElementById('location') as HTMLInputElement)?.value.trim();
        console.log('postalLocation', postalLocation)
        const postalAddress = (document.getElementById('address') as HTMLInputElement)?.value.trim();
        console.log('postalAddress', postalAddress)

        if (phoneNumber && postalAddress && postalLocation && postalPostal) {
            setFirstSectionComplete(true);
            toggleSecondAccordion(); // Close the second accordion
        } else {
            alert('Please fill out all fields in the second section.');
        }
    };

    const handleContinueSecond = () => {
        // Validate second section inputs here (example: phoneNumber, postalCode)
        // For simplicity, let's assume they are valid if not empty
        const phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement)?.value.trim();
        const postalCode = (document.getElementById('postalCode') as HTMLInputElement)?.value.trim();

        if (phoneNumber && postalCode) {
            setSecondSectionComplete(true);
            toggleSecondAccordion(); // Close the second accordion
        } else {
            alert('Please fill out all fields in the second section.');
        }
    };

    const handleCountryChange = (e: any) => {
        setSelectedCountry(e.target.value);
    };
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
        backgroundPosition: 'right 25px top 50%', // Adjust position here
        paddingRight: '30px',
        appearance: 'none', // Hide default arrow in modern browsers
    };
    const countryOptions = [
        { value: '', label: 'City', disabled: true },
        { value: 'usa', label: 'USA' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'canada', label: 'Canada' }
    ];
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit}>
                {/* First accordion section */}
                <div style={{ boxShadow: "0px 6px 26px 0px rgba(0, 0, 0, 0.07)" }} className={`${isOpenFirst ? "pb-[24px]" : "pb-[37.5px] !py-[24px]"} pt-[37.5px] px-[40px]  rounded-[8px] bg-[#FFF]  mb-4 ${isOpenFirst ? 'open' : ''}`}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={toggleFirstAccordion}
                    >
                        <div className='flex justify-start items-start flex-col gap-[16px]'>
                            <div className='flex justify-center gap-[12px] items-center'>
                                <Image width={24} height={24} src='/images/booking/barglass.svg' alt='user' />
                                <h2 className={` text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]`}>Event Location</h2>
                            </div>
                            {!isOpenFirst && <span className={`lato-regular text-[#6B6B6B] text-[16px] font-[400] leading-[20.4px] tracking-[-0.32px]`}>11121 York Rd, Cockeysville Maryland, 21030</span>}
                        </div>
                        {firstSectionComplete && (
                            <div className="flex items-center justify-center flex-col gap-[16px]">
                                <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={17} width={24} alt="tick" />
                                <span className="text-[#038C11] tracking-[-0.32px] leading-[20.4px] text-[16px] font-[400]">We are available</span>
                            </div>
                        )}
                    </div>
                    {isOpenFirst && (
                        <div className="accordion-content mt-[22px]">
                            <div className='space-y-[20px] mb-[32px]'>
                                <div className='flex justify-between gap-[20px] items-center'>
                                    <div className="relative w-full">

                                        <div className="relative w-full" style={{ width: '100%' }}>
                                            <select
                                                required
                                                id="city"
                                                name='city'
                                                style={selectStyles}
                                            >
                                                <option disabled hidden value="" >City</option>
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
                                            id="postalcode"
                                            name='postalcode'
                                            className={` defaultsearch border-[1px] border-[#EFEFEF] pr-[10px]  py-[14px] pl-[20px] min-h-[52px] w-full focus:outline-blue-200 mt-[12px] rounded-[4px]`}
                                            placeholder="Postal Code *"
                                            required
                                        />
                                    </div>

                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0  ml-[15px] start-0 flex items-center ps-3 pointer-events-none">
                                        <Image width={14} height={14} src='/images/booking/location.svg' alt='step-1' />
                                    </div>
                                    <input
                                        type="search"
                                        id="location"
                                        name='location'
                                        className={`defaultsearch  border-[1px] border-[#EFEFEF] pr-[10px]  py-[14px] pl-[50px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                        placeholder="Choose Event Location *"
                                        required
                                    />

                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0  ml-[15px] start-0 flex items-center ps-3 pointer-events-none">

                                        <Image width={14} height={14} src='/images/booking/address.svg' alt='step-1' />
                                    </div>
                                    <input
                                        required
                                        type="search"
                                        id="address"
                                        name='address'
                                        className={`defaultsearch border-[1px] border-[#EFEFEF] py-[14px] pl-[50px] pr-[10px] min-h-[52px] w-full focus:outline-blue-200 rounded-[4px]`}
                                        placeholder="Enter Address *"
                                    />


                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="flex justify-center rounded-[4px] opacity-[0.9px] w-[216px] py-2 text-[#F3F0FF] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                    onClick={handleContinueFirst}
                                >
                                    Continue
                                    <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Second accordion section */}
                <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`rounded-[8px] bg-[#FFF]  mb-4  ${isOpenSecond ? "pb-[24px]" : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenSecond ? 'open' : ''}`}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={toggleSecondAccordion}
                    >
                        <div className='flex justify-center gap-[12px] items-center'>
                            <Image width={23} height={23} src='/images/booking/detailTask.svg' alt='user' />
                            <h2 className=" text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">Details about the task</h2>
                        </div>
                        {secondSectionComplete && (
                            <div className="flex items-center justify-center flex-col gap-[16px]">
                                <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={17} width={24} alt="tick" />
                                <span className="text-[#038C11] tracking-[-0.32px] leading-[20.4px] text-[16px] font-[400]">We are available</span>
                            </div>
                        )}
                    </div>
                    {isOpenSecond && (
                        <div className="accordion-content mt-[52px]">
                            <div className='flex justify-center items-start gap-12'>
                                <div className='space-y-[20px] pb-[28px]  w-[18%] capitalize'>
                            <h3 className='font-[500] text-center leading-[19.93px] tracking-[0.316px] text-[16.608px] text-[#000000]'>
                                Choose Service
                            </h3>
                                    {CHOOSE_SERVICES.map((service) => {
                                        return (
                                            <h3
                                                style={{ background: service.id === 2 ? "#20192e" : "F3F0FF" }}
                                                key={service.id}
                                                className={`${service.id === 2 ? "!bg-[#350ABC] text-[#F3F0FF] opacity-[0.9]" : "opacity-[0.9px]"} cursor-pointer text-[14px] w-full leading-[24px] tracking-[-0.28px] font-[400] text-center rounded-[29px] !py-[12px] !px-[42px] bg-[#F3F0FF] !text-[#9F9F9F]'
                                                }`}
                                            >
                                                {service.text}
                                            </h3>
                                        );
                                    })}
                                </div>
                                <div className='w-[82%] text-[#000000] tracking-[-0.32px] leading-[20.4px] font-[400]'>
                                    <h2>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</h2>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="flex justify-center rounded-[4px] opacity-[0.9px] w-[216px] py-2 text-[#F3F0FF] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                    onClick={handleContinueSecond}
                                >
                                    Continue
                                    <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                                </button>
                            </div>
                        </div>
                    )}

                </div>
                {/* Second accordion section */}
                <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`rounded-[8px] bg-[#FFF]  mb-4  ${isOpenSecond ? "pb-[24px]" : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenSecond ? 'open' : ''}`}>
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={toggleSecondAccordion}
                    >
                        <div className='flex justify-center gap-[12px] items-center'>
                            <Image width={24} height={25} src='/images/booking/clock.svg' alt='user' />
                            <h2 className=" text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">Choose Date & Time</h2>

                        </div>
                        {secondSectionComplete && (
                            <div className="flex items-center justify-center flex-col gap-[16px]">
                                <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={17} width={24} alt="tick" />
                                <span className="text-[#038C11] tracking-[-0.32px] leading-[20.4px] text-[16px] font-[400]">We are available</span>
                            </div>
                        )}
                    </div>
                    {isOpenSecond && (
                        <div className="accordion-content mt-[22px]">
                            <div className='w-[192px] h-full'>
                                <h3 className='font-[500] leading-[19.93px] tracking-[0.316px] text-[16.608px] text-[#000000]'>
                                    Choose Service
                                </h3>

                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="flex justify-center rounded-[4px] opacity-[0.9px] w-[216px] py-2 text-[#F3F0FF] text-[16px] font-[400] leading-[26px] tracking-[-0.32px] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"
                                    onClick={handleContinueSecond}
                                >
                                    Continue
                                    <span><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AccordionForm;
