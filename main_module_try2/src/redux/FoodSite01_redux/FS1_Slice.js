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

  home: {
    home_backgroundImage: 'https://i.ibb.co/6gRTWN7/home-img.png',
    home_heading: 'we belive good food offer great smile',
    home_paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut rerum saepe reprehenderit temporibus architecto, hic eius aperiam voluptatem nulla minus?',
    home_button: 'Get Started',
  },
  homeDesign: {
    margin: '6',
    text_align: 'center',
    heading_fontSize: '5',
    heading_fontWeight: 'bold',
    paragraph_fontSize: '1.8',
    paragraph_fontWeight: 'normal',
    animation_background_color: '#f7ca3e',
  },
  about: {
    about_Image: 'https://i.ibb.co/23syZxw/about-img.jpg',
    about_Image_Frame: 'https://i.ibb.co/JQFCkkT/about-frame-img.png',
    about_heading: 'a world about us',
    about_paragraph1:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sintillum similique mollitia facere maiores nemo saepe repellendus enim,debitis perspiciatis dolore deleniti. Vel quos aliquid impeditneque.',
    about_paragraph2:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut rerum saepe reprehenderit temporibus architecto, hic eius aperiam voluptatem nulla minus?',
    about_button: 'learn more',
  },
  aboutDesign: {
    heading_fontSize: '4',
    heading_fontWeight: 'bold',
    paragraph_fontSize: '1.6',
    paragraph_fontWeight: 'normal',
    text_align: 'left',
    padding: '1',
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
    editHome: (state, action) => {
      state.home = action.payload;
    },
    editHomeDesign: (state, action) => {
      state.homeDesign = action.payload;
    },
    editAbout: (state, action) => {
      state.about = action.payload;
    },
    editAboutDesign: (state, action) => {
      state.aboutDesign = action.payload;
    },
  },
});

export const {
  editNavbar,
  editNavbarDesign,
  finalCode,
  editHome,
  editHomeDesign,
  editAbout,
  editAboutDesign,
} = FS1_Slice.actions;

export default FS1_Slice.reducer;
