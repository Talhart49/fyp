import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navbar: {
    nav_element1: 'Home',
    nav_element2: 'About',
    nav_element3: 'Menu',
    nav_element4: 'Popular',
    nav_element5: 'Gallery',
    nav_element6: 'Order',
    nav_element7: '',
    nav_element8: '',
  },
};

const FS1_Slice = createSlice({
  name: 'FS1',
  initialState,
  reducers: {
    editNavbar: (state, action) => {
      state.navbar = action.payload;
    },
  },
});

export const { editNavbar } = FS1_Slice.actions;

export default FS1_Slice.reducer;
