import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Websites: '',
};

const Reccom_Slice = createSlice({
  name: 'Reccomend',
  initialState,
  reducers: {
    provideRecommend: (state, action) => {
      state.Websites = action.payload;
    },
  },
});

export const { provideRecommend } = Reccom_Slice.actions;

export default Reccom_Slice.reducer;
