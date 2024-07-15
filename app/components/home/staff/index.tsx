'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import People from '../../dummy-data';
import CommonSelect from '../../common/select-option';
import StaffFilters from './components/staff-list-filter';
import StaffMap from './components/staff-list-map';
import { Staff } from '@/app/libs/types';
import { PAGINATION_LIMIT } from '@/app/libs/Constants';
import { useAppDispatch } from '@/app/libs/store/hooks';
import { setStaff } from '@/app/libs/store/features/staff';
import { AppDispatch } from '@/app/libs/store/store';
import CardSkeleton from '../../ui/card-skeleton';
import { fetchAndCache } from '@/app/libs/services/useGetStaffs';
import Pagination from '../../ui/pagination';

const StaffListing = () => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); //open staff filter modal state
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useRouter()

  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage', currentPage)
  const pageSize = 10; // Number of items per page
  const totalCount = 100; // Total number of items (adjust as per your data)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can implement your data fetching logic here
    // Example: fetchData(page);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const handleStaffClick = (staff: Staff) => {
    // Assuming useAppDispatch is from react-redux or similar
    dispatch(setStaff(staff)); // Dispatch setStaff action with staff object as payload
    navigate.push('./staff/detail')
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const svgStyle = {
    top: `-${scrollY}px`,
    transition: 'top 0.3s ease-out',
    transform:"rotate(0.3deg)"
  };


  useEffect(() => {
    // Use setTimeout to toggle loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount or state change
  }, []);

  const [data, setData] = useState(null);
  //this is api call to get the staff data
  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      if (!data) {
        try {
          const newData = await fetchAndCache('/todos');
          setData(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error state or display an error message
        }
      }
    };

    fetchDataIfNeeded();
  }, [data]); // Dependency array ensures useEffect runs when `data` changes

  return (
    <>
      <div className="fixed z-[-1] left-0" style={svgStyle}>
        <svg width="100vw" height="472" viewBox="0 0 1915 472" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1915 0H-3V472C705.5 136 1709.95 342.138 1915 472V0Z" fill="#F3F0FF" />
        </svg>
      </div>
      <div className="max-w-[1279px] mx-auto">
        <StaffFilters modalOpen={modalOpen} scrollY={scrollY} handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} />
        <div className="relative md:top-20 2xl:top-22 grid gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 justify-center items-center z-10">
          {People.length === 0 ? (
            <p className="text-center text-xl mt-20">No staff found, sorry.</p>
          ) : (
            People.map((staff: Staff) => (
              <div key={staff.id} >
                {loading ? <CardSkeleton staff={staff} /> : <StaffMap setModalOpen={setModalOpen} modalOpen={modalOpen} handleStaffClick={handleStaffClick} staff={staff} />}
              </div>
            ))
          )}
        </div>
        {/* pagination */}
        <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={handlePageChange}
      />
      
      </div>
      <div className='h-[250px] bg-[#f3f0ff] w-[90vw] m-auto pt-[130px]'>
      </div>
    </>
  );
}

export default StaffListing;
