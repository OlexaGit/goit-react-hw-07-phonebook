import { createSlice } from '@reduxjs/toolkit';

const initialStateContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialStateContacts,
  reducers: {
    addContact(state, { payload: newContact }) {
      state.contacts.items = [...state.contacts.items, newContact];
    },

    deleteContact(state, { payload: removeId }) {
      state.contacts.items = state.contacts.items.filter(
        ({ id }) => id !== removeId
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
export const selectContacts = state => state.contacts;
