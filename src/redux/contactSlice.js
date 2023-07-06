import { createSlice } from '@reduxjs/toolkit';

const initialStateContacts = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialStateContacts,
  reducers: {
    addContact(state, { payload: newContact }) {
      state.contacts = [...state.contacts, newContact];
    },

    deleteContact(state, { payload: removeId }) {
      state.contacts = state.contacts.filter(({ id }) => id !== removeId);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
export const selectContacts = state => state.contacts;
