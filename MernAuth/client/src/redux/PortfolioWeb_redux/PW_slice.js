import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',

  globalDesign: {
    imageObjectFit: 'cover',
    paragraph_fontsize: '1.4',
    paragraph_marginTop: '5',

    sectionTitle_FontSize: '4',
    sectionTitle_FontWeight: 'bold',
  },

  header: {
    logoText: 'Shaif Arfan',
    nav_element1: 'Home',
    nav_element2: 'Services',
    nav_element3: 'Projects',
    nav_element4: 'About',
    nav_element5: 'Contact',
  },

  headerDesign: {
    minHeight: '8',
    bgColor: '1f1e1e3d',
    transitionType: 'ease',
    navbarMAxWidth: '1300',
    navbarPadding: '10',
    linkFontSize: '2.5',
    padding: '20',
    hamburgerMargin: '20',
  },
};

const PW_Slice = createSlice({
  name: 'PW',
  initialState,
  reducers: {
    finalCode: (state, action) => {
      state.finalCode = action.payload;
    },
    editGlobalDesign: (state, action) => {
      state.globalDesign = action.payload;
    },
    editheader: (state, action) => {
      state.header = action.payload;
    },
    editheaderDesign: (state, action) => {
      state.headerDesign = action.payload;
    },
  },
});

export const { finalCode, editGlobalDesign, editheader, editheaderDesign } =
  PW_Slice.actions;

export default PW_Slice.reducer;
