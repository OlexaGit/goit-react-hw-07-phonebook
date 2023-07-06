import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact } from './operations';

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
  reducers: {
    addContact(state, { payload: newContact }) {
      state.contacts.items = [...state.contacts.items, newContact];
    },

    // deleteContactItem(state, { payload: removeId }) {
    //   state.contacts.items = state.contacts.items.filter(
    //     ({ id }) => id !== removeId
    //   );
    //   state.contacts.isLoading = false;
    // },
  },
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
        ({ id }) => id !== action.payload
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { addContact, deleteContactItem } = contactSlice.actions;
export default contactSlice.reducer;
export const selectContacts = state => state.contacts;
