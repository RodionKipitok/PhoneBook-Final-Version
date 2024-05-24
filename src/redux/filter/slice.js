import { createSlice } from '@reduxjs/toolkit';

const filterContactSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filterContactSlice.actions;
export const filterReducer = filterContactSlice.reducer;
