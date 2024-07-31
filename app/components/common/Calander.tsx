import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom CSS file
import LeftArrow from '../ui/right-arrow';
import RightArrow from '../ui/left-arrow';
import Image from 'next/image';

interface CalendarWithAvailabilityProps {
  setSelectedTimeId: (id: any) => void;
  setDate: (date: Date) => void;
  setWorkingTimes?: any;
  date: Date;
  scrollRef?: any;
  scrollUp?: any;
  scrollDown?: any;
  workingTimes?: any;
  setTimeMessage?:any
}

interface TimeRange {
  start_time: string;
  end_time: string;
}

interface WorkingTime {
  date: string;
  timing: TimeRange[];
}

const CalendarWithAvailability = ({
  workingTimes,
  setWorkingTimes,
  scrollDown,
  scrollUp,
  setSelectedTimeId,
  setDate,
  date,
  setTimeMessage
}: CalendarWithAvailabilityProps) => {
  const [availableTimes] = useState<string[]>([
    "12:00 am", "01:00 am", "02:00 am", "03:00 am", "04:00 am", "05:00 am", "06:00 am", "07:00 am", "08:00 am", "09:00 am",
    "10:00 am", "11:00 am", "12:00 pm", "01:00 pm", "02:00 pm", "03:00 pm", "04:00 pm", "05:00 pm", "06:00 pm", "07:00 pm",
    "08:00 pm", "09:00 pm", "10:00 pm", "11:00 pm"
  ]);

  const [selectedRanges, setSelectedRanges] = useState<TimeRange[]>([]);
  const [currentStart, setCurrentStart] = useState<string | null>(null);
  const [currentEnd, setCurrentEnd] = useState<string | null>(null);

  const formattedDate = date.toISOString().split('T')[0]; // Format date for key use

  // Set the minimum selectable date to today
  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0); // Set to the start of the day

  // Reference for scrolling
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleDateChange: any = (value: Date, _event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDate(value);
    setSelectedTimeId(null); // Reset selected time ID when date changes
    setCurrentStart(null);
    setCurrentEnd(null);
    setSelectedRanges([]);
  };

  const handleTimeSelection = (time: string) => {
    if (currentStart === time) {
      // Deselect start time if the same time is clicked again
      setCurrentStart(null);
      setCurrentEnd(null);
      setTimeMessage("")
      setSelectedRanges(prev =>
        prev.filter(range => !(range.start_time === time || range.end_time === time))
      );
    } else if (currentStart === null) {
      // Set start time if none is selected
      setCurrentStart(time);
    } else if (currentEnd === null) {
      // Set end time if start time is selected
      if (availableTimes.indexOf(time) > availableTimes.indexOf(currentStart)) {
        setTimeMessage("")
        setCurrentEnd(time);
        const newRange = { start_time: currentStart, end_time: time };
        setSelectedRanges(prev => {
          const existingRangeIndex = prev.findIndex(
            range => range.start_time === currentStart && range.end_time === time
          );
          if (existingRangeIndex !== -1) {
            return prev.filter((_, index) => index !== existingRangeIndex);
          } else {
            return [...prev, newRange];
          }
        });
        setCurrentStart(null);
        setCurrentEnd(null);
      } else {
        // If end time is before start time, reset start time
        setCurrentStart(time);
        setCurrentEnd(null);
      }
    }
  };

  const handleRemoveRange = (rangeToRemove: TimeRange) => {
    setSelectedRanges(prev =>
      prev.filter(range => range !== rangeToRemove)
    );
  };

  const handleAddSelections = () => {
    if (selectedRanges.length > 0) {
      setWorkingTimes((prev: any) => {
        const existingDate = prev.find((work: any) => work.date === formattedDate);
        if (existingDate) {
          const updatedTiming = [...existingDate.timing, ...selectedRanges];
          return prev.map((work: any) =>
            work.date === formattedDate ? { ...work, timing: updatedTiming } : work
          );
        } else {
          return [...prev, { date: formattedDate, timing: selectedRanges }];
        }
      });
      // Reset selections
      setSelectedRanges([]);
    }
  };

  const getTimesForCurrentDate = () => {
    const currentDate = workingTimes.find((work: any) => work.date === formattedDate);
    return currentDate ? currentDate.timing : [];
  };

  const isTimeSlotDisabled = (time: string) => {
    return getTimesForCurrentDate().some(
      (range: any) => availableTimes.indexOf(time) >= availableTimes.indexOf(range.start_time) &&
        availableTimes.indexOf(time) <= availableTimes.indexOf(range.end_time)
    );
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      // Scroll to the "03:00 pm" time slot initially
      const startTime = "03:00 pm";
      const index = availableTimes.indexOf(startTime);
      if (index !== -1) {
        const itemHeight = 24; // Adjust according to the height of each list item
        const offset = index * itemHeight;
        scrollContainerRef.current.scrollTop = offset;
      }
    }
  }, [availableTimes]);

  return (
    <>
      <div className='gap-6'>
        <div style={{ width: '100%' }}>
          <Calendar
            className="custom-calendar w-full border-none bg-[#faf8ff]"
            onChange={handleDateChange}
            value={date}
            minDate={minDate} // Set minimum selectable date
            tileClassName={({ date }) => {
              return '';
            }}
          />
        </div>
      </div>
      <div className='absolute'>
        <LeftArrow />
        <>
          <div
            ref={scrollContainerRef} // Ref for scrolling
            style={{ height: '355px', overflow: 'auto' }}
            className='time-scroll py-4 space-y-2 pr-[20px] absolute top-[-353px] left-[465px] w-[12rem]'
          >
            <div className='time-slots'>
              <ul className='space-y-[6px]'>
                {availableTimes.map((time, index) => {
                  const isStartSelected = currentStart === time;
                  const isEndSelected = currentEnd === time;
                  const isHighlighted = selectedRanges.some(
                    range => availableTimes.indexOf(time) >= availableTimes.indexOf(range.start_time) &&
                      availableTimes.indexOf(time) <= availableTimes.indexOf(range.end_time)
                  );
                  const isDisabled = isTimeSlotDisabled(time);

                  return (
                    <li
                      key={index}
                      onClick={() => !isDisabled && handleTimeSelection(time)}
                      className={`time-slot ${isStartSelected || isEndSelected || isHighlighted ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                    >
                      {time}
                      {isDisabled &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M7.73216 2.81569L3.64225 6.9056L1.7832 5.04655" stroke="#2BCC02" strokeWidth="0.62464" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      }
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='fixed left-0 right-[570px] top-[416px]'>
              {(
                <>
                  <button
                    onClick={scrollUp}
                    className='absolute top-[50px] right-[-5px] border-none rounded-half cursor-pointer'
                  >
                    <Image height={120} width={10} src='/images/detail/arrowTop.svg' alt='' />
                  </button>
                  <button
                    onClick={scrollDown}
                    className='absolute top-[145px] right-[-5px] border-none ad-half cursor-pointer'
                  >
                    <Image height={120} width={10} src='/images/detail/arrowDown.svg' alt='' />
                  </button>
                </>
              )}
            </div>
          </div>
          <button
            onClick={handleAddSelections}
            className='save-selection-button relative left-[466px] mt-[38px] z-[99]'
          >
            +  Add To Booking
          </button>
        </>
        <RightArrow />
      </div>
    </>
  );
};

export default CalendarWithAvailability;
