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
  const navigate = useRouter()

  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage', currentPage)
  const [selectedCount, setSelectedCount] = useState<number>(10)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValueString = event.target.value;
    const selectedValueNumber = Number(selectedValueString); // Convert string to number
    setSelectedCount(selectedValueNumber);
    console.log('Selected value:', selectedValueNumber);
  };
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

  // Function to retrieve selected staff array from localStorage on component mount
  const [selectedStaff, setSelectedStaff] = useState<Staff[]>(() => {
    // Initialize selected staff from localStorage or default to an empty array
    const storedSelectedStaff = localStorage.getItem('selectedStaff');
    return storedSelectedStaff ? JSON.parse(storedSelectedStaff) : [];
  });
  console.log('selectedStaff#####', selectedStaff)
  const handleStaffClick = (staff: Staff) => {
    // Assuming useAppDispatch is from react-redux or similar
    dispatch(setStaff(staff)); // Dispatch setStaff action with staff object as payload

    // Retrieve existing selected staff from local storage
    const existingSelectedStaff = JSON.parse(localStorage.getItem('selectedStaff') as any) || [];

    // Check if the staff is already selected
    const staffAlreadySelected = existingSelectedStaff.some((selected: any) => selected.id === staff.id);

    if (!staffAlreadySelected) {
      // Add the new staff to the array
      existingSelectedStaff.push(staff);
    } else {
      // Remove the staff (if you want to toggle selection)
      // Alternatively, keep it (for multiple selections)
      // Example: existingSelectedStaff = existingSelectedStaff.filter((selected) => selected.id !== staff.id);
    }

    // Add or update the isOffered property based on certain conditions
    const updatedStaffList = existingSelectedStaff.map((selectedStaff: any) => {
      if (selectedStaff.id === staff.id) {
        // Modify the staff object here as needed
        return {
          ...selectedStaff,
          isOffered: true, // Set isOffered to true for this staff
        };
      }
      return selectedStaff;
    });
    setSelectedStaff(updatedStaffList);
    const existingSelectedStaffLength = updatedStaffList.length;

    // Dispatch the updated staff list to state or wherever needed
    dispatch(setInviteCount(existingSelectedStaffLength));

    // Update local storage with the updated staff list
    localStorage.setItem('selectedStaff', JSON.stringify(updatedStaffList));

    // Navigate to staff detail page or perform other actions
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

  const [data, setData] = useState<any>(null);
  console.log('data', data)

  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      setLoading(true); // Show loading indicator
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
        }); // API call
        console.log('newData', newData)
        // Map over fetched data and update isOffered property where there is a match with selectedStaff
        const updatedData = newData.records.map((item: any) => {
          const matchedStaff = selectedStaff.find((staff) => staff.id === item.id);
          if (matchedStaff) {
            return {
              ...item,
              isOffered: true // Add isOffered property if the staff is selected
            };
          }
          return item;
        });
        setData(updatedData); // Update state with fetched data
        setLoading(false); // Hide loading indicator regardless of success or failure
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or display an error message
      }
    };

    fetchDataIfNeeded(); // Call the function to fetch data

  }, [currentPage, selectedCount]); // Dependency array ensures useEffect runs when currentPage or selectedCount changes


  const [offeredStaff, setOfferedStaff] = useState([])
  console.log('offeredStaff in OffersTabs4444444444444444444', offeredStaff)
  useEffect(() => {
    const storedStaffArray = localStorage.getItem('selectedStaff');

    if (storedStaffArray) {
      try {
        const parsedStaffArray = JSON.parse(storedStaffArray);
        console.log('parsedStaffArray', parsedStaffArray);
        setOfferedStaff(parsedStaffArray)
        // Now you can use parsedStaffArray as needed, e.g., set state, etc.

      } catch (error) {
        console.error('Error parsing storedStaffArray:', error);
        // Handle parsing error if necessary
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
            <div className="text-center text-xl  h-screen flex justify-center items-center">No staff found, sorry.</div>
          ) : (
            data?.map((staff: any, index: number) => (
              <div key={staff.id} className='h-[510px]'>
                {loading ? <CardSkeleton staff={staff} /> : <StaffMap index={index} setModalOpen={setModalOpen} modalOpen={modalOpen} handleStaffClick={handleStaffClick} staff={staff} />}
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
