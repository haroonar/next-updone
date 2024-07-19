"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import { selectStaff } from '../store/features/staffSlice';



// Create the context with an initial value of undefined
const BookingContext = createContext<any | undefined>(undefined);

// Create a custom hook to use the BookingContext
export const useBookingContext = () => {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBookingContext must be used within a BookingProvider');
    }
    return context;
};

// Create a provider component
export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { staff } = useAppSelector(selectStaff);
    const [selectedServiceId, setSelectedService] = useState<number | null>(3);
    const [selectedTimes] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedTimeId, setSelectedTimeId] = useState<string | null>(null);
    const [timessss, setTimessss] = useState<{ date: string; times: string[] }[]>([]); // Initialize as an empty array
    console.log('timessss', timessss)
    const [date, setDate] = useState<Date>(new Date());
    // Define the available times for each highlighted date with unique IDs
    [
        {
            "date": "2024-07-21",
            "times": [
                "7:00 pm - 8:00 pm",
                "9:00 pm - 10:00 pm"
            ]
        }
    ]
    const [availableTimesMap, setAvailableTimesMap] = useState<{ [date: string]: { id: string; time: string; disabled: boolean, isAvailable: boolean }[] }>({
        '2024-07-21': [
            { id: 'time1', time: '4:00 pm - 5:00 pm', disabled: false, isAvailable: true },
            { id: 'time2', time: '5:00 pm - 6:00 pm', disabled: false, isAvailable: true },
            { id: 'time3', time: '6:00 pm - 7:00 pm', disabled: false, isAvailable: false },
            { id: 'time4', time: '7:00 pm - 8:00 pm', disabled: false, isAvailable: true },
            { id: 'time5', time: '8:00 pm - 9:00 pm', disabled: false, isAvailable: false },
            { id: 'time6', time: '9:00 pm - 10:00 pm', disabled: false, isAvailable: true },
            { id: 'time7', time: '10:00 pm - 11:00 pm', disabled: false, isAvailable: true },
            { id: 'time8', time: '11:00 pm - 12:00 pm', disabled: false, isAvailable: true },
            { id: 'time9', time: '12:00 pm - 3:00 pm', disabled: false, isAvailable: true },
            { id: 'time10', time: '2:00 pm - 4:00 pm', disabled: false, isAvailable: true },

        ],
        '2024-07-24': [
            { id: 'time6', time: '3:00 pm - 4:00 pm', disabled: false, isAvailable: true },
            { id: 'time7', time: '4:00 pm - 4:15 pm', disabled: false, isAvailable: true },
            { id: 'time8', time: '5:00 pm - 6:00 pm', disabled: false, isAvailable: true },
            { id: 'time9', time: '6:00 pm - 7:00 pm', disabled: false, isAvailable: true },
            { id: 'time10', time: '7:00 pm - 10:00 pm', disabled: false, isAvailable: true },
        ],
        // Add more dates and corresponding times as needed
    });
    const handleTimeSelection = (timeId: string, disabled: boolean) => {
        if (!disabled) {
            setSelectedTimeId(timeId === selectedTimeId ? null : timeId); // Toggle selection
        }
    };
    
    const handleServiceClick = (id: number) => {
        setSelectedService(id);
    };


    const handleAddToBooking = (e:any) => {
        e.preventDefault()
        if (selectedTimeId) {
            const selectedDate = date.toISOString().split('T')[0];
            const selectedTimeObj = availableTimesMap[selectedDate].find(time => time.id === selectedTimeId);
            if (selectedTimeObj) {
                const { time, id } = selectedTimeObj;
                console.log('Selected date:', selectedDate);
                console.log('Selected time:', time);

                // Check if there is already an entry for the selected date in timessss
                const existingDateIndex = timessss.findIndex((item) => item.date === selectedDate);

                if (existingDateIndex !== -1) {
                    // Date already exists, update the times array
                    const updatedTimes = [...timessss[existingDateIndex].times, time];
                    const updatedItem = { ...timessss[existingDateIndex], times: updatedTimes };
                    setTimessss((prevTimes) => [
                        ...prevTimes.slice(0, existingDateIndex),
                        updatedItem,
                        ...prevTimes.slice(existingDateIndex + 1),
                    ]);
                } else {
                    // Date doesn't exist, add a new entry
                    setTimessss((prevTimes) => [...prevTimes, { date: selectedDate, times: [time] }]);
                }

                // Mark the selected time as disabled in availableTimesMap
                const updatedAvailableTimesMap = { ...availableTimesMap };
                updatedAvailableTimesMap[selectedDate] = updatedAvailableTimesMap[selectedDate].map(timeObj =>
                    timeObj.id === id ? { ...timeObj, disabled: true } : timeObj
                );
                // Update state
                setAvailableTimesMap(updatedAvailableTimesMap);

                // Reset selectedTimeId after adding to booking
                setSelectedTimeId(null);
            }
        } else {
            console.log('No time selected.');
        }
    };

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
        }
    };

    return (
        <BookingContext.Provider value={{ setSelectedTimeId, selectedTimeId, scrollRef, selectedTimes, setSelectedService, scrollDown, scrollUp, handleAddToBooking, handleTimeSelection, handleServiceClick, availableTimesMap, setDate, date, timessss, setTimessss, staff, selectedServiceId }}>
            {children}
        </BookingContext.Provider>
    );
};
