import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',
  navbar: {
    nav_logo: 'https://i.ibb.co/k9CdNdC/logo-img.png',
    nav_element1: 'Home',
    nav_element2: 'About',
    nav_element3: 'Menu',
    nav_element4: 'Popular',
    nav_element5: 'Gallery',
    nav_element6: 'Order',
    nav_element7: '',
    nav_element8: '',
  },
  navbarDesign: {
    position: 'center',
    navBackgroundColor: '#f0f8ff',
    navHoverColor: '#f7ca3e',
    navTextColor: '#000',
    fontSize: '2',
    fontWeight: 'bold',
    fontFamily: 'Oswald',
    padding: '1',
    margin: '0.5',
  },
};

const FS1_Slice = createSlice({
  name: 'FS1',
  initialState,
  reducers: {
    editNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    editNavbarDesign: (state, action) => {
      state.navbarDesign = action.payload;
    },
    finalCode: (state, action) => {
      state.finalCode = action.payload;
    },
  },
});

export const { editNavbar, editNavbarDesign, finalCode } = FS1_Slice.actions;

export default FS1_Slice.reducer;
