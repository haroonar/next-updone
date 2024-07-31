import { useForm } from 'react-hook-form';
import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';
import { CHOOSE_SERVICES, locationOptions, services } from '@/app/libs/Constants';
import TimeAndCalander from '../booking-calander/calander-time';
import { useBookingContext } from '@/app/libs/context/BookingContext';
import './AccordionForm.css'
import { apiRequest } from '@/app/libs/services';
import { toast } from 'react-toastify';

const AccordionForm = ({ next }: any) => {
  const [jobData, setData] = useState<any>([])
  const [selectedServiceId, setSelectedServiceId] = useState(() => {
    const storedId = localStorage.getItem('selectedServiceId');
    return storedId ? parseInt(storedId, 10) : 1;
  });
  const [selectedServiceName, setSelectedServiceName] = useState(() => {
    const storedName = localStorage.getItem('selectedServiceName');
    return storedName;
  });
  const [timeMessage, setTimeMessage] = useState<string | null>(null);
  console.log('timeMessage', timeMessage)
  const [selectedService, setSelectedService] = useState<any>()
  const [secondFormData, setSecondFormData] = useState<any>()
  console.log('secondFormData', secondFormData)
  const [firstFormData, setFirstFormData] = useState<any>()
  const [isOpenFirst, setIsOpenFirst] = useState(true);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);
  const [workingTimes, setWorkingTimes] = useState<any>([]);
  const [firstSectionComplete, setFirstSectionComplete] = useState(false);
  const [secondSectionComplete, setSecondSectionComplete] = useState(false);
  const [thirdSectionComplete, setThirdSectionComplete] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { isStaffListerFilter, setSelectedTimeId, selectedTimeId, scrollRef, selectedTimes, scrollDown, scrollUp, handleAddToBooking, handleTimeSelection, availableTimesMap, setDate, date, timessss, staff } = useBookingContext();

  const toggleFirstAccordion = () => {
    if (!firstFormData?.message1 && !firstFormData?.message2) {
      setIsOpenFirst(isOpenFirst);
    } else {
      setIsOpenFirst(!isOpenFirst);
    }
    setIsOpenSecond(false);
    setIsOpenThird(false)
  };

  const toggleSecondAccordion = () => {

    if (firstFormData?.message1 && firstFormData?.message2) {
      setIsOpenSecond(!isOpenSecond);
    }
    if (!firstSectionComplete) {
      return
    }
    setIsOpenFirst(false);
    setIsOpenThird(false)
  };

  const toggleThirdAccordion = () => {
    // Check if firstFormData is defined and has message1 or message2, and selectedServiceId is present
    if (firstFormData?.message1 && firstFormData?.message2) {
      // Toggle the third accordion if conditions are met
      setIsOpenThird(!isOpenThird);
    }

    // Close the first and second accordions regardless of the conditions
    setIsOpenFirst(false);
    setIsOpenSecond(false);
  };


  const handleContinueFirst = () => {
    toggleSecondAccordion()
    // Perform validation using react-hook-form methods
    handleSubmit(onFirstSubmit)(); // Trigger form submission
  };
  const handleContinueSecond = () => {
    // Perform validation using react-hook-form methods
    handleSubmit(onSecondSubmit)(); // Trigger form submission
  };
  const onFirstSubmit = (data: any) => {
    setFirstSectionComplete(true);
    setFirstFormData(data)
    // Handle further submission logic here
  };
  // Use effect to react to the firstSectionComplete change
  useEffect(() => {
    if (firstSectionComplete) {
      toggleSecondAccordion(); // Toggle the second accordion when firstSectionComplete changes
    }
  }, [firstSectionComplete]);



  const onSecondSubmit = (data: any) => {
    setSecondFormData(data)
    // Handle further submission logic here
    setSecondSectionComplete(true);
    toggleSecondAccordion(); // Close the second accordion
    toggleThirdAccordion()
  };
  const onThirdSubmit = async () => {
    const body = {
      city_id: 1,
      postal_code: "1234",
      event_location: "Lahore",
      address: "Punjab Lahore 123",
      service_id: 4,
      title: "Corporate event",
      description: "this is corporate event",
      working_times: [],
      invited_workers: [34, 35, 42]

    };

    try {
      const newData = await apiRequest('/job', {
        method: 'POST',
        body: body
      }); // API call
      setData(newData?.data); // Update state with fetched data
    } catch (error) {
      toast.error('Failed to login. Please check your credentials.');
      // Handle error state or display an error message
    } finally {
    }
    // Check if workingTimes exists and is not an empty array
    if (workingTimes && workingTimes.length > 0) {
      next(); // Call the next function if the array is not empty
    } else {
      setTimeMessage("Please add start & end time")
    }
  };


  const handleServiceClick = (id: number, text: string) => {
    setSelectedServiceId(id);
    //@ts-ignore
    localStorage.setItem("post-job-persist-service-id", id)
    setSelectedService(text)
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
    color: '#000000',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%239D9D9D' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 25px top 50%',
    paddingRight: '30px',
    appearance: 'none',
  };


  const cityOptions = [
    { value: '', label: 'Choose City *', disabled: true },
    { id: 1, value: 'los angeles', label: 'Los Angeles' }
  ];


  const highlightedDatesAvailable = ['2024-07-21', '2024-07-26'];
  return (
    <div className="w-full">
      {/* First accordion section */}
      <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`rounded-[8px] bg-[#FFF]  mb-4  ${isOpenFirst ? "pb-[24px]" : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenFirst ? 'open' : ''}`}>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleFirstAccordion}
        >
          <div className='flex justify-center gap-[12px] items-center'>
            <div className='flex flex-col gap-[18px]'>
              <div className='flex gap-[6px]'>
                <Image width={23} height={23} src='/images/booking/detailTask.svg' alt='user' />
                <h2 className=" !text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]">Details about the task</h2>
              </div>
              {firstSectionComplete && <div className='bg-[#F3F0FF] rounded-[25.878px] py-[8px] px-[15px]  text-center text-[#2C2240] min-w-[160px] max-w-[200px] tracking-[-0.25px] leading-[21.416px] font-[400] text-[12.493px] capitalize'>{selectedServiceName ? selectedServiceName : selectedService ? selectedService : "Bartenders"}</div>}
            </div>
          </div>
          {firstSectionComplete && (
            <div className="flex items-center justify-center flex-col gap-[16px]">
              <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={17} width={24} alt="tick" />
            </div>
          )}
        </div>
        {isOpenFirst && (
          <form onSubmit={handleSubmit(onFirstSubmit)}>
            <div className="accordion-content mt-[52px]">
              <div className='flex justify-center items-start !gap-[48px]'>
                <div className='space-y-[17px] pb-[28px] !w-[18%] capitalize ml-[42px]'>
                  <h3 className='font-[500] text-center leading-[19.93px] tracking-[0.28px] !text-[14.82px] !text-[#000000]'>
                    Choose Service
                  </h3>
                  {services.map((service) => (
                    <h3
                      key={service.id}
                      onClick={() => handleServiceClick(service.id, service.name)}
                      style={{
                        background: service.id === selectedServiceId ? "#20192e" : "#F3F0FF",
                        color: service.id === selectedServiceId ? "#e0d9f8" : "#2C2240",
                        opacity: service.id === selectedServiceId ? 1 : .9
                      }}
                      className='cursor-pointer  !text-[12.49px] w-full leading-[21.42px] tracking-[-2%] font-[400] text-center rounded-[29px] !py-[10px] !px-[42px]'
                    >
                      {service.name}
                    </h3>
                  ))}
                </div>
                <div className={`space-y-[30px] !w-[82%] pr-[42px]`}>
                  <h2 className={`${styles.lato_font} w-[82% !text-[#000000] text-[16px] tracking-[-2%]  leading-[20.4px] `}>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</h2>
                  <div className="relative">
                    <div>
                      <div className="absolute inset-y-0 start-0 flex items-center ps-[16px] pointer-events-none !pt-[1px]">
                        <Image width={15} height={15} src='/images/booking/message.svg' alt='step-1' />
                      </div>
                      <input
                        {...register('message1', {
                          required: "Title is required.",
                          minLength: {
                            value: 20,
                            message: "Title must be at least 20 characters."
                          },
                          maxLength: {
                            value: 100,
                            message: "Title must not exceed 100 characters."
                          }
                        })}
                        type="search"
                        id="message1"
                        name='message1'
                        className={`border-[1px] text-[#000000] ${errors.message1 ? "outline-[red] outline-[.5px]" : "outline-none"} !border-[#EFEFEF] !py-[12px] !text-[14px] leading-[24px] tracking-[-2%] !font-[400] pl-[38px] pr-[10px] w-full rounded-[4px] ${errors.message1 ? 'border-red-500 ' : ""} defaultsearch`}
                        placeholder="Write down a suitable title for the Job"
                      />
                    </div>
                    {errors.message1 && <span className="text-[12px] error-message absolute text-red-500 top-[50px]">{(errors as any).message1.message}</span>}
                  </div>

                  <div className="relative">
                    <div>
                      <div className="absolute inset-y-0 flox start-0 !mt-[18px] items-center ps-[16px] pointer-events-none !pt-[1px]">

                        <Image width={15} height={15} src='/images/booking/message.svg' alt='step-1' />
                      </div>
                      <textarea
                        {...register('message2', {
                          required: "Description is required.",
                          minLength: {
                            value: 20,
                            message: "Description must be at least 20 characters."
                          },
                          maxLength: {
                            value: 400, // Example maximum length; adjust as needed
                            message: "Description must not exceed 400 characters."
                          }
                        })}
                        id="message2"
                        name='message2'
                        className={`!h-[210px] border-[1px] text-[#000000] ${errors.message2 ? "outline-[red] outline-[.5px]" : "outline-none"} !border-[#EFEFEF] !py-[12px] !text-[14px] leading-[24px] tracking-[-2%] !font-[400] pl-[38px] pr-[10px] w-full rounded-[4px] ${errors.message2 ? 'border-red-500 ' : ""} defaultsearch`}
                        placeholder="Hi! Looking for help updating my 650 sq ft apartment. I’m on the 2nd floor up a short flight of stairs. Please bring an electric drill and ring doorbell number 3. Thanks!"
                      ></textarea>
                    </div>

                    {errors.message2 && <span className="text-[12px] error-message absolute text-red-500 top-[210px]">{(errors as any).message2.message}</span>}

                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleContinueFirst}
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
      {/* Second accordion section */}
      <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)' }} className={`${isOpenSecond ? "pb-[24px]" : "pb-[37.5px] !py-[24px]"} pt-[37.5px] px-[40px] rounded-[8px] bg-[#FFF] mb-4 ${isOpenSecond ? 'open' : ''}`}>
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleSecondAccordion}>
          <div className='flex justify-start items-start flex-col gap-[16px]'>
            <div className='flex justify-center gap-[12px] items-center'>
              <Image width={24} height={24} src='/images/booking/barglass.svg' alt='user' />
              <h2 className={` !text-[#000000] text-[18px] font-[500] leading-[24px] tracking-[-0.36px]`}>Event Location</h2>
            </div>
            {firstSectionComplete && secondSectionComplete && <span className={`${styles.lato_font} text-[#6B6B6B] text-[16px] font-[400] leading-[20.4px] tracking-[-0.32px]`}>{secondFormData?.city === "1" ? " Los anglos " : ""}, {secondFormData?.location}</span>}
          </div>
          {isOpenThird && (
            <div className="flex items-center justify-center flex-col gap-[16px]">
              <Image className='ml-[90px]' layout="intrinsic" src="/images/booking/done.svg" height={15} width={22} alt="tick" />
            </div>
          )}
        </div>
        {isOpenSecond && (
          <form onSubmit={handleSubmit(onSecondSubmit)}>
            <div className="accordion-content mt-[22px]">
              <div className='space-y-[30px] mb-[32px]'>
                <div className='flex justify-between gap-[20px] items-center'>
                  <div className="relative w-full flex">
                    <select
                      {...register('city', { required: true })}
                      id="city"
                      name='city'
                      style={selectStyles}
                      className={`${errors.city ? "outline-[red] outline-[.5px]" : "outline-none"} text-[#000000] `}
                    >
                      <option disabled hidden value="">City*</option>
                      {cityOptions.map((option, index) => (
                        <option key={index} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.city && <span className="text-[12px] error-message absolute  text-red-500 top-[63px]">City is required.</span>}
                  </div>
                  <div className="relative w-full flex">
                    <input
                      {...register('postalcode', { required: true })}
                      type="number"
                      id="postalcode"
                      name='postalcode'
                      className={`defaultsearch border-[1px] text-[#000000]  ${errors.postalcode ? "outline-[red] outline-[.5px]" : "outline-none"}  border-[#EFEFEF] pr-[10px] py-[14px] pl-[20px] min-h-[52px] w-full  mt-[12px] rounded-[4px] `}
                      placeholder="Postal Code *"
                    />
                    {errors.postalcode && <span className="text-[12px] error-message absolute text-red-500 top-[63px]">Postal Code is required.</span>}
                  </div>
                </div>
                <div className="relative w-full flex">
                  <span className='absolute top-[19.7px] left-[25px]'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M12.25 5.8335C12.25 9.91683 7 13.4168 7 13.4168C7 13.4168 1.75 9.91683 1.75 5.8335C1.75 4.44111 2.30312 3.10575 3.28769 2.12119C4.27226 1.13662 5.60761 0.583496 7 0.583496C8.39239 0.583496 9.72774 1.13662 10.7123 2.12119C11.6969 3.10575 12.25 4.44111 12.25 5.8335Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 7.5835C7.9665 7.5835 8.75 6.79999 8.75 5.8335C8.75 4.867 7.9665 4.0835 7 4.0835C6.0335 4.0835 5.25 4.867 5.25 5.8335C5.25 6.79999 6.0335 7.5835 7 7.5835Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></span>
                  <select
                    {...register('location', { required: true })}
                    id="location"
                    name='location'
                    className={`!pl-[50px] !m-0 ${errors.location ? "outline-[red] outline-[.5px]" : "outline-none"} text-[#000000] `}
                    style={selectStyles}

                  >
                    <option disabled hidden value="">Choose Event Location *</option>
                    {locationOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.location && <span className="text-[12px] error-message absolute text-red-500 top-[52px]">Event Location is required.</span>}
                </div>
                <div className="relative flex">
                  <span className='absolute top-[19.7px] left-[25px]'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.75 5.24984L7 1.1665L12.25 5.24984V11.6665C12.25 11.9759 12.1271 12.2727 11.9083 12.4915C11.6895 12.7103 11.3928 12.8332 11.0833 12.8332H2.91667C2.60725 12.8332 2.3105 12.7103 2.09171 12.4915C1.87292 12.2727 1.75 11.9759 1.75 11.6665V5.24984Z" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.25 12.8333V7H8.75V12.8333" stroke="#9F9F9F" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></span>
                  <input
                    {...register('address', { required: true })}
                    type="search"
                    id="address"
                    name='address'
                    className={`defaultsearch border-[1px] text-[#000000]  ${errors.address ? "outline-[red] outline-[.5px]" : "outline-none"} border-[#EFEFEF] py-[14px] pl-[50px] pr-[10px] min-h-[52px] w-full  rounded-[4px]`}
                    placeholder="Enter Address *"
                  />
                  {errors.address && <span className="text-[12px] error-message absolute text-red-500 top-[52px]">Address is required.</span>}
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button" // Change to type="button" to prevent form submission
                  onClick={handleContinueSecond} // Call your custom continue handler
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

      {/* Third accordion section */}
      <div style={{ boxShadow: '0px 6px 26px 0px rgba(0, 0, 0, 0.07)', height: isOpenThird ? "630px" : "auto" }} className={`rounded-[8px] bg-[#FFF]  mb-20 pb-[100px]  ${isOpenThird ? "pb-[24px] " : "pb-[37.5px] !py-[24px] pt-[37.5px]"} pt-[37.5px] px-[40px] ${isOpenThird ? 'open' : ''}`}>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            if (firstSectionComplete && secondSectionComplete) {
              toggleThirdAccordion();
            }
          }}
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
                  setTimeMessage={setTimeMessage}
                  setWorkingTimes={setWorkingTimes}
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
                  highlightedDatesAvailable={highlightedDatesAvailable}
                  workingTimes={workingTimes}
                />

              </Suspense>
              <div style={{ marginLeft: isOpenThird ? "100px" : "" }} className='left-[160px] relative flex justify-between items-start flex-col gap-[14.28px] w-[30rem]'>
                <h2 className='leading-[19.93px] translate-[0.316px] font-[500] text-[16.608px] text-[#000000] '>Booking Times</h2>
                {workingTimes?.length === 0 ? <><div className='w-full h-[50vh] flex justify-center items-center capitalize'>
                  <div>
                    <Image width={293} height={207} src='/images/booking/select_time.svg' alt='calander' />
                    <h2 className='text-center !text-[#000000] font-[600] text-[16.61px] tracking-[-1%] leading-[19.93px] mt-[19px]'>Book Your staff now</h2>
                  </div>
                </div></> :
                  <div style={{ width: selectedTimes.length > 0 ? '34rem' : "100%" }} className=' h-[47vh] overflow-auto w-full space-y-3'>
                    {workingTimes?.map((time: any) => {
                      return (
                        <div className='w-full flex flex-col justify-start items-start text-[14px] font-normal text-[#6B6B6B] leading-[24px] gap-[8px] tracking-[-2%]'>
                          <div style={{ boxShadow: '0px 3.569px 7.139px 0px rgba(53, 10, 188, 0.06)' }} className='bg-[#FFF] flex justify-between  items-center min-h-[50px] max-h-[100px] border-[0.892px] rounded-[3.569px]  border-[#EDE9FF] w-full'>
                            <div className='flex items-center gap-[7.14px] pl-[17.85px]'>
                              <Image width={14} height={14} color='red' src='/images/detail/calnder.svg' alt='calander' />
                              <h3 className='tracking-[-0.214px] leading-[21.416px] min-w-[70px]  font-[400] text-[10.708px] text-[#2C2240] mr-2'>{time.date}</h3>
                            </div>
                            <div className=' justify-between flex items-center gap-[45px] tracking-[-0.25px]  min-w-[200px] leading-[21.416px]  font-[400] text-[12.493px] text-[#848486]'>
                              <div className='flex flex-col'>
                                {time.timing.map((singleTime: any, index: number) => (
                                  <div key={index} className='flex items-center gap-1 justify-center'>
                                    {singleTime.start_time}-{singleTime.end_time}
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
          <div className="text-center relative bottom-[-81px]" >
            <div className='relative top-[-96px] text-[red] z-[999] right-[38px]'>
              {timeMessage}
            </div>
            <button
              type="button"
              className="fixed inline w-[22%] right-[482.5px] bottom-[108px] pb-[11px] pl-[35px] justify-center rounded-[4px] py-2  text-[16px] font-[400] leading-[26px] tracking-[-2%] items-center m-auto gap-[12px] px-[20px] bg-[#350ABC] h-[48px]"

            >
              <span className='relative bottom-[-8.5px]'><Image width={16} height={16} src='/images/booking/arrowleft.svg' alt='step-1' /></span>
              <span className='opacity-[90%] text-[#F3F0FF] !text-[16px] leading-[26px] relative top-[-12px]' onClick={onThirdSubmit}>See Taskers and Prices</span>
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default AccordionForm;
