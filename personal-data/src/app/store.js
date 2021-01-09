import { configureStore } from '@reduxjs/toolkit';
import fantasyReducer from '../features/fantasySlice';
import investmentReducer from '../features/investmentSlice';
import debtReducer from '../features/debtSlice';
import financeReducer from '../features/financeSlice';

export default configureStore({
  reducer: {
    fantasy: fantasyReducer,
    investments: investmentReducer,
    debts: debtReducer,
    financeOverview: financeReducer
  },
});
