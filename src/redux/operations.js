import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { deleteContactItem } from './contactSlice';

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (removeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/posts/${removeId}`);
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
