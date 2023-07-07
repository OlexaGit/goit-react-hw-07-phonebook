import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { deleteContactItem } from './contactSlice';

axios.defaults.baseURL = 'https://64a7fdaadca581464b851e24.mockapi.io';
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (removeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${removeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    console.log(contact);
    try {
      const response = await axios.post(`/contacts/${contact}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteContact = removeId => async dispatch => {
//   try {
//     await axios.delete(`/posts/${removeId}`);
//     dispatch(deleteContactItem(removeId));
//   } catch (error) {
//     console.log('Error occurred', error);
//   }
// };
