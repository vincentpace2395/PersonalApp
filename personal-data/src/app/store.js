import { configureStore } from '@reduxjs/toolkit';
import fantasyReducer from '../features/fantasySlice';

export default configureStore({
  reducer: {
    fantasy: fantasyReducer,
    investments: investmentReducer,
    debts: debtReducer,
    financeOverview: financeReducer
  },
});
