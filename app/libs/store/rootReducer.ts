import { combineReducers } from '@reduxjs/toolkit';
import staffReducer from './features/staff'; // Assuming staffReducer is correctly defined in './features/staff'

const rootReducer = combineReducers({
  staff: staffReducer,
  // Add more slices as needed
});

export default rootReducer;
