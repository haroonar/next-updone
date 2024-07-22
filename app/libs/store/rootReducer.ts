import { combineReducers } from '@reduxjs/toolkit';
import staffReducer from './features/staffSlice'; // Assuming staffReducer is correctly defined in './features/staff'
import authReducer from './features/authSlice';
import bookingReducer from './features/bookingSlice';

const rootReducer = combineReducers({
  staff: staffReducer,
  auth:authReducer,
  booking:bookingReducer
});

export default rootReducer;
