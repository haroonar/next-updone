import React, { useState, useEffect } from 'react';
import CommonSelect from '../../common/select-option';
import { PAGINATION_LIMIT } from '@/app/libs/Constants';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  isFilterBookingFlow?:boolean
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
  handleChange,
  isFilterBookingFlow
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const maxVisiblePages = 4; // Number of page numbers to show before showing ellipsis
  const [visiblePages, setVisiblePages] = useState<number[]>([]);


  useEffect(() => {
    updateVisiblePages(currentPage);
  }, [currentPage]);

  const updateVisiblePages = (currentPage: number) => {
    const pages = [];
    if (totalPages <= maxVisiblePages) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }
    } else {
      if (currentPage <= Math.floor(maxVisiblePages / 2)) {
        // Case: Display pages from 1 to maxVisiblePages
        for (let page = 1; page <= maxVisiblePages; page++) {
          pages.push(page);
        }
      } else if (currentPage > totalPages - Math.floor(maxVisiblePages / 2)) {
        // Case: Display pages from (totalPages - maxVisiblePages + 1) to totalPages
        for (let page = totalPages - maxVisiblePages + 1; page <= totalPages; page++) {
          pages.push(page);
        }
      } else {
        // Case: Display pages around the current page
        const startPage = currentPage - Math.floor(maxVisiblePages / 2);
        const endPage = currentPage + Math.floor(maxVisiblePages / 2);
        for (let page = startPage; page <= endPage; page++) {
          pages.push(page);
        }
      }
    }
    setVisiblePages(pages);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Render ellipsis at the beginning if necessary
    if (visiblePages.length > 0 && visiblePages[0] !== 1) {
      pages.push(
        <li key="ellipsis-start" className="px-2 mb-[7px]">
          <span>...</span>
        </li>
      );
    }

    visiblePages.forEach(page => {
      const isActive = currentPage === page;
      pages.push(
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`px-4 py-1 rounded-[5px] ${isActive
              ? 'bg-[#350ABC] text-white'
              : 'bg-[#FFFFFF] text-[#2C2240]'
              }`}
            style={{ border: 'none', cursor: 'pointer' }}
          >
            {page}
          </button>
        </li>
      );
    });

    // Render ellipsis at the end if necessary
    if (visiblePages.length > 0 && visiblePages[visiblePages.length - 1] !== totalPages) {
      pages.push(
        <li key="ellipsis-end" className="px-2 mb-[7px]">
          <span>...</span>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className={`flex justify-between items-center pb-[312px] bg-[#FBFAFF] w-[110%] relative z-[-1] right-[66px]  ${isFilterBookingFlow && "bottom-[50px]"}`}>
      <div className={`${!isFilterBookingFlow && "mt-[50px]" } max-w-[1279px] m-auto flex justify-center items-center gap-[750px]`}>
        <div className='relative top-[165px] '>
          View Per Page:
          <CommonSelect
            options={PAGINATION_LIMIT}
            valueKey="value"
            labelKey="label"
            defaultValue="0"
            onChange={handleChange}
            className='w-14 h-8 border-none bg-white font-[400] leading-[24px] text-[14px] tracking-[-0.28px] rounded-md focus:border-none p-1 ml-2'
            isLimit
          />
        </div>
        <ul className="flex justify-center text-[15px] font-[700] items-center relative top-[160px] p-2.5 bg-[#FFFFFF] rounded-[10px]" style={{ boxShadow: '0px 8px 26px 0px rgba(0, 0, 0, 0.06)' }}>
          <li>
            <button
              onClick={handlePrevClick}
              disabled={currentPage === 1}
              className={`px-4 py-1 ${currentPage === 1
                ? 'bg-[#FFFFFF] text-gray-600 cursor-not-allowed'
                : 'bg-[#FFFFFF] text-[#2C2240]'
                }`}
              style={{ border: 'none', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              <FaAngleLeft color='#2C2240' />
            </button>
          </li>
          {renderPageNumbers()}
          <li>
            <button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
              className={`px-4 py-1 ${currentPage === totalPages
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-[#FFFFFF] text-[#2C2240] hover:bg-gray-300'
                }`}
              style={{ border: 'none', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              <FaAngleRight color='#2C2240' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
