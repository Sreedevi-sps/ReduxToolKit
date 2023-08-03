import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: User) => {
    const response = await axios.post(baseURL, user);
    return response.data;
  },
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: User) => {
    const response = await axios.put(`${baseURL}/${user.id}`, user);
    return response.data;
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number) => {
    await axios.delete(`${baseURL}/${userId}`);
    return userId;
  },
);

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined | null;
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(updateUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        const updatedUser = action.payload;
        const index = state.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      })
      .addCase(deleteUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
