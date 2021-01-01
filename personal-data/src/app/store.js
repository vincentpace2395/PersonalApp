import { configureStore } from '@reduxjs/toolkit';
import fantasyReducer from '../features/fantasySlice';

export default configureStore({
  reducer: {
    fantasy: fantasyReducer,
  },
});
