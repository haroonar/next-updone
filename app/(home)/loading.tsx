'use client'
import { useEffect, useState } from 'react';

export default function Loading() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        // Timer to hide the loading indicator after 5 seconds
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Clean up timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return showLoading ? (
        <h1 className="flex justify-center items-center h-screen bg-red-400 w-full text-white">
            Loading...
        </h1>
    ) : null;
}
