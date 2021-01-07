import { createSlice } from '@reduxjs/toolkit';

export const debtSlice = createSlice({
    name: 'debt',
    initialState: {
        viewDebtIsOpen: false,
    },
    reducers: {
        showDebt: state => {
            state.viewDebtIsOpen = true;
        },
        hideDebt: state => {
            state.viewDebtIsOpen = false;
        },
    },
});

export const { showDebt, hideDebt } = debtSlice.actions;

export const selectViewDebtIsOpen = state => state.debt.viewDebtIsOpen;

export default debtSlice.reducer;