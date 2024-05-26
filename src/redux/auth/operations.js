import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST @ /users/signup
// body: {name,email,password}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fdgnjd@gmail.com
// gfnj3134

// POST @ /users/login
// body:{email,password}

export const logIn = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login , add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().auth.token;
//     console.log(token);
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`, // Включение токена в заголовок запроса
//       },
//     };
//     const res = await axios.post('/users/logout', config);
//     // After a successful logout, remove the token from the HTTP header
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
