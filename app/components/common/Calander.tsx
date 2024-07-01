'use client'
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom CSS file
import { TIMES_DATA } from '@/app/libs/Constants';
import Image from 'next/image';

interface CalendarWithAvailabilityProps {
  isChange?: boolean;
  availText?: string;
}

type DateValue = Date;

const CalendarWithAvailability: React.FC<CalendarWithAvailabilityProps> = ({ isChange, availText = `Sarah's Availability` }) => {
  const [date, setDate] = useState<DateValue>(new Date());

  const handleDateChange = (value: any, _event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDate(value);
  };

  const scrollRef = useRef(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      //@ts-ignore

      scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className={!isChange ? "input-border bg-white pr-4 pb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 gap-2 md:space-x-[17px]" : 'bg-white flex flex-col md:flex-row p-0 '}>
      <div style={{ width: '100%' }}>
        <h2 className="text-[20px] font-semibold tracking-[-1%] mb-4">{availText}</h2>
        <Calendar
          className={'custom-calendar w-full border-none bg-[#faf8ff]'}
          onChange={handleDateChange}
          value={date}
          formatShortWeekday={(_locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
        />
        <div className='space-y-3 ml-[9px]'>
          <div className='flex justify-between items-center gap-1'>
            <div>
              <Image height={17} width={127} src='/images/gallery/calander1.svg' alt='box'/>
            </div>
            <div className="text-[10.39px] text-[#6B6B6B] font-normal tracking-[-2%] leading-[24.9px]">Time zone  <strong className='text-[16px] relative top-[2.5px] mx-1'>  🌏︎  </strong>  Washington, DC, USA (GMT-4)
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '35%', margin: 'auto', position: 'relative' }}>
        <h2 className="invisible">Sarah's Availability</h2>
        <div
          ref={scrollRef}
          style={{ maxHeight: '380px', overflow: 'auto' }} // Adjust overflow to 'auto'
           className='time-scroll space-y-2 p-2'
        >
          <div className="shadow-2xl" style={{
            position: "absolute",
            width: '100%',
            height: '20px',
            top: '20px'
          }}>

            <Image height={100} width={240} src='/images/gallery/calander2.svg' alt='box'/>
          </div>

          {TIMES_DATA.map((time, index) => (
            <>
              <div
                key={index}
                style={{
            border:"2px solid #F3F0FF "
                }}
                className={`px-[8px] py-[10px] rounded-lg cursor-pointer  ${index === 2 ? 'selected-style text-white' : 'text-[#350ABC]'} bg-[#FAF9FF] text-center`}
              >
                {time}
              </div>
            </>
          ))}
          <div className="shadow-2xl" style={{
            position: "absolute",
            width: '100%',
            height: '20px',
            bottom: '60px',
          }}>
             <Image height={100} width={240} src='/images/gallery/calander3.svg' alt='box'/>
          </div>
        </div>
        <button
          onClick={scrollUp}
          style={{
            position: 'absolute',
            top: '123px',
            right: '-12px',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <svg width="10" height="120" viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.64645 0.146446C3.84171 -0.0488167 4.15829 -0.0488167 4.35356 0.146446L7.53554 3.32843C7.7308 3.52369 7.7308 3.84027 7.53554 4.03553C7.34027 4.23079 7.02369 4.23079 6.82843 4.03553L4 1.2071L1.17157 4.03553C0.976313 4.23079 0.65973 4.23079 0.464468 4.03553C0.269206 3.84027 0.269206 3.52369 0.464468 3.32843L3.64645 0.146446ZM3.5 46.5L3.5 0.5L4.5 0.5L4.5 46.5L3.5 46.5Z" fill="#D6D4D4" />
          </svg>



        </button>
        <button
          onClick={scrollDown}
          style={{
            position: 'absolute',
            bottom: '68px',
            right: '-12px',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        >
          <svg width="10" height="120" viewBox="0 0 8 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.64645 46.8536C3.84171 47.0488 4.15829 47.0488 4.35356 46.8536L7.53554 43.6716C7.7308 43.4763 7.7308 43.1597 7.53554 42.9645C7.34027 42.7692 7.02369 42.7692 6.82843 42.9645L4 45.7929L1.17157 42.9645C0.976313 42.7692 0.65973 42.7692 0.464468 42.9645C0.269206 43.1597 0.269206 43.4763 0.464468 43.6716L3.64645 46.8536ZM3.5 0.5L3.5 46.5L4.5 46.5L4.5 0.5L3.5 0.5Z" fill="#D6D4D4" />
          </svg>



        </button>
      </div>
    </div>
  );
};

export default CalendarWithAvailability;
