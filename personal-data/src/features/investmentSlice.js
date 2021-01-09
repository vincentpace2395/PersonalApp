import { createSlice } from '@reduxjs/toolkit';

export const investmentSlice = createSlice({
    name: 'investment',
    initialState: {
        viewInvestmentIsOpen: false,
    },
    reducers: {
        showInvestment: state => {
            state.viewInvestmentIsOpen = true;
        },
        hideInvestment: state => {
            state.viewInvestmentIsOpen = false;
        },
    },
});

export const { showInvestment, hideInvestment } = investmentSlice.actions;

export const selectViewInvestmentIsOpen = state => state.investments.viewInvestmentIsOpen;

export default investmentSlice.reducer;