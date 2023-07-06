import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterByValue(state, { payload: value }) {
      state.filter = value;
    },
  },
});

export const { filterByValue } = filterSlice.actions;
export default filterSlice.reducer;
export const filterSelectContacts = state => state.filter;
