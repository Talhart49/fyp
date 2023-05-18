import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Websites: '',
  code: '',
};

const Reccom_Slice = createSlice({
  name: 'Reccomend',
  initialState,
  reducers: {
    provideRecommend: (state, action) => {
      state.Websites = action.payload;
    },

    provideCode: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { provideRecommend, provideCode } = Reccom_Slice.actions;

export default Reccom_Slice.reducer;
