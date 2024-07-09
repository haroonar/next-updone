import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css'; // Import custom CSS file
import Image from 'next/image';

interface CalendarWithAvailabilityProps {
  setSelectedTime?: (time: { date: string; times: string[] }[]) => void; // Define setSelectedTime prop function type
}

export  const highlightedDatesNotAvailable = ['2024-07-08', '2024-07-11', '2024-07-28'];
export const highlightedDatesAvailable = ['2024-07-21', '2024-07-24'];
const CalendarWithAvailability = ({setSelectedTimeId ,setDate,date}:any) => {





  const handleDateChange :any= (value: Date, _event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const formattedDate = value.toISOString().split('T')[0];
    setDate(value);
    setSelectedTimeId(null); // Reset selected time ID when date changes
    if (highlightedDatesAvailable.includes(formattedDate)) {
      // Reset selected times when date changes
      setSelectedTimeId(null);
    }
  };



  return (
    <div className='flex gap-6'>
      <div style={{ width: '100%' }}>
        <Calendar
        
          className="custom-calendar w-full border-none bg-[#faf8ff]"
          onChange={handleDateChange}
          value={date}
          formatShortWeekday={(_locale, date) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}
          tileClassName={({ date }) => {
            const formattedDate = date.toISOString().split('T')[0];
            if (highlightedDatesNotAvailable.includes(formattedDate)) {
              return 'highlight';
            } else if (highlightedDatesAvailable.includes(formattedDate)) {
              return 'highlight-avail';
            }
            return '';
          }}
        />
      </div>
    
    </div>
  );
};

export default CalendarWithAvailability;
