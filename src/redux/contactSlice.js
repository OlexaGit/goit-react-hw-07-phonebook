import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

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

    // fetchingInProgress(state) {
    //   state.contacts.isLoading = true;
    // },

    // fetchingSuccess(state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = action.payload;
    // },

    // fetchingErrore(state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.items = [];
    //   state.contacts.error = action.payload;
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
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
export const selectContacts = state => state.contacts;
