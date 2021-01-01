import { createSlice } from '@reduxjs/toolkit';

export const fantasySlice = createSlice({
  name: 'fantasy',
  initialState: {
    viewFantasyIsOpen: false,
  },
  reducers: {
    showFantasy: state => {
      state.viewFantasyIsOpen = true;
    },
    hideFantasy: state => {
      state.viewFantasyIsOpen = false;
    },
  },
});

export const { showFantasy, hideFantasy} = fantasySlice.actions;

export const selectViewFantasyIsOpen = state => state.fantasy.viewFantasyIsOpen;

export default fantasySlice.reducer;
