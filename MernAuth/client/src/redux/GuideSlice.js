import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guide: '',
  language: 'getHTMLG',
};

const Guide_Slice = createSlice({
  name: 'Guide',
  initialState,
  reducers: {
    setGuide: (state, action) => {
      state.guide = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setGuide, setLanguage } = Guide_Slice.actions;

export default Guide_Slice.reducer;
