import { combineReducers } from '@reduxjs/toolkit';
import staffReducer from './features/staffSlice'; // Assuming staffReducer is correctly defined in './features/staff'
import authReducer from './features/authSlice';

const rootReducer = combineReducers({
  staff: staffReducer,
  auth:authReducer
  // Add more slices as needed
});

export default rootReducer;
