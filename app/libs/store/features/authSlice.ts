import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface AuthState {
    auth: any | null;
  }
  
  const initialState: AuthState = {
    auth: null,
  };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    clearAuth: (state) => {
      state.auth = null;
    },
  },
});

export const { setAuth,clearAuth } = authSlice.actions;

// Selectors
export const selectAuth = (state: RootState) => state.auth; // Adjust as per your state structure

export default authSlice.reducer;
