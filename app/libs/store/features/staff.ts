import { createSlice } from '@reduxjs/toolkit';
import { Staff } from '@/types'; // Assuming this path is correct and provides the Staff type
import { RootState } from '../store';

interface StaffState {
  staff: Staff | null;
}

const initialState: StaffState = {
  staff: null,
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setStaff: (state, action) => {
      state.staff = action.payload;
    },
  },
});

export const { setStaff } = staffSlice.actions;

// Selectors
export const selectStaff = (state: RootState) => state.staff; // Adjust as per your state structure

export default staffSlice.reducer;
