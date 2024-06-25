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
//for SEO purpose
export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Staff Listings for Hiring Bartenders, Cocktail Waiters, Event Servers, and More',
  description: 'Discover and hire experienced bartenders, cocktail waiters, event servers, event organizers, and more for your events. Explore our staff listings and find the perfect fit for your needs.',
  keywords: 'staff listing, hire bartenders, cocktail waiters, event servers, event organizers, staff for hire, event staffing, bartending services, event planning, event staff',
};
