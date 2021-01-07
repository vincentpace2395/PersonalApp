import { createSlice } from '@reduxjs/toolkit';

export const financeSlice = createSlice({
    name: 'finance',
    initialState: {
        viewFinanceIsOpen: false,
    },
    reducers: {
        showFinance: state => {
            state.viewFinanceIsOpen = true;
        },
        hideFinance: state => {
            state.viewFinanceIsOpen = false;
        },
    },
});

export const { showFinance, hideFinance } = financeSlice.actions;

export const selectViewFinanceIsOpen = state => state.finance.viewFinanceIsOpen;

export default financeSlice.reducer;