'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import StaffFilters from './components/staff-list-filter';
import StaffMap from './components/staff-list-map';
import { Staff } from '@/app/libs/types';
import { useAppDispatch } from '@/app/libs/store/hooks';
import { setInviteCount, setSelectedStaff, setStaff } from '@/app/libs/store/features/staffSlice';
import { AppDispatch } from '@/app/libs/store/store';
import CardSkeleton from '../../ui/card-skeleton';
import Pagination from '../../ui/pagination';
import { apiRequest } from '@/app/libs/services';
import Loader from '../../ui/loader';

const StaffListing = ({ isFilterBookingFlow }: { isFilterBookingFlow?: boolean }) => {

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); //open staff filter modal state
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCount, setSelectedCount] = useState<number>(10);
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValueString = event.target.value;
    const selectedValueNumber = Number(selectedValueString); // Convert string to number
    setSelectedCount(selectedValueNumber);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  };

  // Retrieve selected staff from localStorage
  const [selectedStaff, setSelectedStaff] = useState<Staff[]>(() => {
    const storedSelectedStaff = localStorage.getItem('selectedStaff');
    return storedSelectedStaff ? JSON.parse(storedSelectedStaff) : [];
  });
  console.log('selectedStaff', selectedStaff)
  
    const [data, setData] = useState<any>(null);
  console.log('data', data)
  const handleStaffClick = (staff: Staff) => {
    const existingSelectedStaff = JSON.parse(localStorage.getItem('selectedStaff') as any) || [];
    const staffIndex = existingSelectedStaff.findIndex((selected: any) => selected.id === staff.id);
    
    if (staffIndex !== -1) {
      // Toggle isOffered property
      existingSelectedStaff[staffIndex].isOffered = !existingSelectedStaff[staffIndex].isOffered;
      if (!existingSelectedStaff[staffIndex].isOffered) {
        // Remove from array if isOffered is false
        existingSelectedStaff.splice(staffIndex, 1);
      }
    } else {
      // Add new staff to array
      //@ts-ignore
      staff.isOffered = true;
      existingSelectedStaff.push(staff);
    }

    setSelectedStaff(existingSelectedStaff);
    dispatch(setInviteCount(existingSelectedStaff.length));

    // Update local storage with the updated staff list
    localStorage.setItem('selectedStaff', JSON.stringify(existingSelectedStaff));
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
    transform: "rotate(0.3deg)"
  };
  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      setLoading(true);
      const body = {
        sort_by: "id",
        page_number: currentPage,
        page_size: selectedCount,
        order: "ASC"
      };

      try {
        const newData = await apiRequest('/listings/paginated', {
          method: 'POST',
          body: body
        });
        const updatedData = newData.records.map((item: any) => {
          const matchedStaff = selectedStaff.find((staff) => staff.id === item.id);
          if (matchedStaff) {
            return {
              ...item,
              isOffered: true
            };
          }
          return item;
        });
        setData(updatedData);
        setLoading(false);
      } catch (error) {
      }
    };

    fetchDataIfNeeded();
  }, [currentPage, selectedCount]);

  const [offeredStaff, setOfferedStaff] = useState([]);
  useEffect(() => {
    const storedStaffArray = localStorage.getItem('selectedStaff');

    if (storedStaffArray) {
      try {
        const parsedStaffArray = JSON.parse(storedStaffArray);
        setOfferedStaff(parsedStaffArray);
      } catch (error) {
      }
    }
  }, []);

  if (!data) {
    return (
      <div><Loader /></div>
    )
  }

  return (
    <>
      {!isFilterBookingFlow && <div className="fixed z-[-1] left-0" style={svgStyle}>
        <svg width="100vw" height="472" viewBox="0 0 1915 472" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1915 0H-3V472C705.5 136 1709.95 342.138 1915 472V0Z" fill="#F3F0FF" />
        </svg>
      </div>}
      <div className="max-w-[1279px] mx-auto relative z-[-1]">
        <StaffFilters isFilterBookingFlow={isFilterBookingFlow} modalOpen={modalOpen} scrollY={isFilterBookingFlow ? 0 : scrollY} handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} />
        <div className={data?.length === 0 ? `` : `relative ${!isFilterBookingFlow && "md:top-20 2xl:top-22"} grid gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 justify-center items-center z-101`}>
          {data?.length === 0 ? (
            <div className="text-center text-xl h-screen flex justify-center items-center">No staff found, sorry.</div>
          ) : (
            data?.map((staff: any, index: number) => (
              <div key={staff.id} className='h-[510px]'>
                {loading ? <CardSkeleton staff={staff} /> : <StaffMap selectedStaff={selectedStaff} index={index} setModalOpen={setModalOpen} modalOpen={modalOpen} handleStaffClick={handleStaffClick} staff={staff} />}
              </div>
            ))
          )}
        </div>
        {/* pagination */}
        <Pagination
          isFilterBookingFlow={isFilterBookingFlow}
          currentPage={currentPage}
          pageSize={data?.pagination?.page_size}
          totalCount={data?.pagination?.total_records}
          onPageChange={handlePageChange}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default StaffListing;
