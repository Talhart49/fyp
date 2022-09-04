import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
  {
    id: 3,
    name: 'Jack Doe',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export const {} = usersSlice.actions;

export default usersSlice.reducer;
