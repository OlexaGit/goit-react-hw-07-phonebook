import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const initialStateContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, { payload: newContact }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [...state.contacts.items, newContact];
      console.log(newContact);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export default contactSlice.reducer;
export const selectContacts = state => state.contacts;
