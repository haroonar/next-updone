'use client'
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import React from 'react';

// Dynamic import of StaffListing component for code splitting
const StaffListing = dynamic(() => import('@/app/components/staff'), {
  ssr: false, // This option disables server-side rendering for this component
});

export default function Page() {
  return (
    <StaffListing />
  );
}
