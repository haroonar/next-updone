import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { BookingCalanderProps } from '@/app/libs/types';

const CalendarWithAvailability = dynamic(() => import('@/app/components/common/Calander'), {
    ssr: false, // Do not SSR for this component
    loading: () => <><p className='flex justify-center items-center w-full'>Loading...</p></>, // Display loader while loading
});

const TimeAndCalander = ({
    isStepOneCalander,
    highlightedDatesAvailable,
    isCalander,
    date,
    setDate,
    setSelectedTimeId,
    scrollRef,
    availableTimesMap,
    handleTimeSelection,
    selectedTimeId,
    scrollUp,
    scrollDown,
    setTimeMessage,
    isStaffListerFilter,
    setWorkingTimes,
    workingTimes
}: BookingCalanderProps) => {
    const isDateAvailable = highlightedDatesAvailable?.includes(date.toISOString().split('T')[0]);

    return (
        <div style={{ gap: isStepOneCalander ? "45px" : "" }} className={`flex justify-start items-start gap-[21px]`}>
            <div style={{ width: isStaffListerFilter ? "28rem" : "38rem" }} className={`h-[348px]`}>
                <div className={`${isStepOneCalander ? "ml-5" : ""} w-full h-auto p-[10px] bg-[#fff] rounded-[8px]`} style={{
                    boxShadow: isCalander ? "" : "0px 8px 26px 0px rgba(0, 0, 0, 0.07)",
                    border: isCalander ? "1px solid #f7f7f7" : "none"
                }}>
                    <Suspense fallback={<p className='w-full flex justify-center items-center'>Loading...</p>}>
                        <CalendarWithAvailability
                        setTimeMessage={setTimeMessage}
                        setWorkingTimes={setWorkingTimes}
                            setSelectedTimeId={setSelectedTimeId}
                            setDate={setDate}
                            scrollRef={scrollRef}
                            date={date}
                            scrollUp={scrollUp}
                            scrollDown={scrollDown}
                            workingTimes={workingTimes}
                        />
                    </Suspense>
                </div>
                {!isCalander || !isStepOneCalander &&
                    <div style={{ marginLeft: isStepOneCalander ? "32px" : "" }} className={`flex justify-start gap-[10px] items-center mt-[18px] ml-[10px] tracking-[-0.2px] leading-[24px] font-[400] text-[#6B6B6B] text-[10px]`}>
                        <h3 className='flex justify-center items-center gap-1'>
                            <span>
                                <Image height={10} width={10} alt='not available' src='/images/detail/notavail.svg' />
                            </span>
                            <span className='mt-[1.6px]'>Not Available</span>
                        </h3>
                        <h3 className='flex justify-center items-center gap-1'>
                            <span>
                                <Image height={10} width={10} alt='current selection' src='/images/detail/current.svg' />
                            </span>
                            <span className='mt-[1.6px]'>Current Selection</span>
                        </h3>
                        <h3 className='flex justify-center items-center gap-1'>
                            <span>
                                <Image height={10} width={10} alt='added to booking' src='/images/detail/available.svg' />
                            </span>
                            <span className=''>Added to Booking</span>
                        </h3>
                    </div>
                }
            </div>

        </div>
    );
}

export default TimeAndCalander;
