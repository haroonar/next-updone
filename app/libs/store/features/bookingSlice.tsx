// bookingSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Function to get initial bookingActive state from localStorage
const initialBookingActiveState = localStorage.getItem('bookingActive') === 'true';

interface BookingState {
  bookingActive: boolean;
  bookingInActive: boolean;
}

const initialState: BookingState = {
  bookingActive: initialBookingActiveState, // Load initial state from localStorage
  bookingInActive: false, // Assuming bookingInActive starts as false
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingActive: (state) => {
      state.bookingActive = true;
      state.bookingInActive = false;
      localStorage.setItem('bookingActive', 'true'); // Update localStorage
    },
    setBookingInactive: (state) => {
      state.bookingActive = false;
      state.bookingInActive = true;
      localStorage.setItem('bookingActive', 'false'); // Update localStorage
    },
  },
});

export const { setBookingActive, setBookingInactive } = bookingSlice.actions;

// Selectors
export const selectBookingActive = (state: RootState) => state.booking.bookingActive;
export const selectBookingInActive = (state: RootState) => state.booking.bookingInActive;

export default bookingSlice.reducer;
