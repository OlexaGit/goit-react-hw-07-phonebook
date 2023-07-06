import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/posts');
  return response.data;
});

// import axios from 'axios';
// import {
//   fetchingErrore,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './contactSlice';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/posts');
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingErrore(error.message));
//   }
// };
