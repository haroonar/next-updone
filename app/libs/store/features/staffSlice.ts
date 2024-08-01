import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '@/app/libs/types'; // Assuming this path is correct and provides the Staff type
import { RootState } from '../store';

interface StaffState {
  staff: any | null;
  selectedStaffArray: any[];
  inviteCount:any | null;
  jobData: any;
}

const initialState: StaffState = {
  staff: null,
  selectedStaffArray: [],
  inviteCount:null,
  jobData:[]
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setStaff: (state, action: PayloadAction<any>) => {
      state.staff = action.payload;
    },
    setSelectedStaff: (state, action: PayloadAction<any>) => {
      state.selectedStaffArray = action.payload;
    },
    setInviteCount: (state, action: PayloadAction<any>) => {
      state.inviteCount = action.payload;
    },
    setJobData:(state, action: PayloadAction<any>) => {
      state.jobData = action.payload;
    },
  },
});

export const { setStaff, setSelectedStaff,setInviteCount ,setJobData} = staffSlice.actions;

// Selector
export const selectStaff = (state: RootState) => state.staff; // Adjust as per your state structure

export default staffSlice.reducer;
