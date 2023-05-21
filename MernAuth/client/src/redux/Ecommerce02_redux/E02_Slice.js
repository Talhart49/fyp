import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',
  globalDesign: {
    heading_FontSize: '3.8',
    heading_padding: '12',
    paragraph_FontSize: '2.3',
    paragraph_padding: '3.8',
    button_borderColor: '#ffffff',
    button_backgroundColor: '#a52a2a',
  },
  navbar: {
    nav_logo: 'https://i.ibb.co/dbwk4rn/2.png',
    nav_element1: 'Home',
    nav_element2: 'Services',
    nav_element3: 'Our Clients',
    nav_element4: 'Contact Us',
  },
  navbarDesign: {
    backgroundColor: '#000000',
    backgroundColor_opacity: '0.7',
    justifyContent: 'center',
    imageMarginTop: '13',
    imageMarginBottom: '7',
    imageHeight: '59',
  },
  home: {
    heading01: 'Welcome to MyOnlineMeal',
    paragraph01:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolorum numquam minus.',
    paragraph02: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    button: 'Order Now',
  },
  homeDesign: {
    Height: '550',
    justifyContent: 'center',
    heading01_color: '#ffffff',
    heading_fontFamily: 'Bree Serif',
    paragraph_color: '#ffffff',
    paragraph_fontSize: '1.5',
    paragraph_fontFamily: 'Bree Serif',
    backgroundImage: `https://i.ibb.co/tp8sF53/bg1.jpg`,
  },

  service: {
    sectionName: 'Our Services',
    service_1_image: 'https://i.ibb.co/7YRv2V0/1.png',
    service_1_name: 'Food Catering',
    service_1_paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere? delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt voluptas beatae facilis labore, omnis sint quae eum.',
    service_2_image: 'https://i.ibb.co/dbwk4rn/2.png',
    service_2_name: 'Bulk Ordering',
    service_2_description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere? delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt voluptas beatae facilis labore, omnis sint quae eum.',
    service_3_image: 'https://i.ibb.co/0MD87Dz/3.png',
    service_3_name: 'Food Ordering',
    service_3_description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere? delectus ab dolorum nam. Debitis facere, incidunt voluptates eos, mollitia voluptatem iste sunt voluptas beatae facilis labore, omnis sint quae eum.',
  },
  serviceDesign: {
    sectionName_marginBottom: '34',
    serviceBox_padding: '34',
    serviceBox_borderRadius: '28',
    serviceBox_backgroundColor: '#f2f2f2',
    serviceParagraph_fontFamily: 'Bree Serif',
    serviceImage_height: '160',
  },

  client: {
    sectionName: 'Our Client',
    image01: 'https://i.ibb.co/NpVvWC3/logo1.png',
    image02: 'https://i.ibb.co/yP40xmb/logo2.png',
    image03: 'https://i.ibb.co/GFpX7b6/logo4.png',
    image04: 'https://i.ibb.co/Njy9HqQ/logo3.png',
  },
  clientDesign: {
    backgroundImage: 'https://i.ibb.co/ZHNmWjS/bg.jpg',
    backgroundImage_opacity: '0.3',
    justifyContent: 'center',
    itemPadding: '34',
    imageHeight: '124',
  },

  contact: {
    sectionName: 'Contact Us',
    textFieldLabel01: 'Name',
    textFieldLabel02: 'Email',
    textFieldLabel03: 'Phone Number',
    textAreaLabel: 'Message',
  },
  contactDesign: {
    backgroundImage: 'https://i.ibb.co/NTvBXgr/contact.jpg',
    backgroundImage_opacity: '0.7',
    contactBox_paddingBottom: '34',
    textField_borderRadius: '9',
    textFieldLabel_fontSize: '1.3',
    textFieldLabel_fontFamily: 'Bree Serif',
  },
  footer: {
    copyRight: ' Copyright  www.myOnlineMeal.com. All rights reserved!',
  },
  footerDesign: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    paddingTopAndBottom: '19',
  },
};

const E02_Slice = createSlice({
  name: 'E02',
  initialState,
  reducers: {
    editglobalDesign: (state, action) => {
      state.globalDesign = action.payload;
    },
    finalCode: (state, action) => {
      state.finalCode = action.payload;
    },
    editNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    editNavbarDesign: (state, action) => {
      state.navbarDesign = action.payload;
    },
    editHome: (state, action) => {
      state.home = action.payload;
    },

    editHomeDesign: (state, action) => {
      state.homeDesign = action.payload;
    },
    editService: (state, action) => {
      state.service = action.payload;
    },
    editServiceDesign: (state, action) => {
      state.serviceDesign = action.payload;
    },
    editClient: (state, action) => {
      state.client = action.payload;
    },
    editClientDesign: (state, action) => {
      state.clientDesign = action.payload;
    },
    editContact: (state, action) => {
      state.contact = action.payload;
    },
    editContactDesign: (state, action) => {
      state.contactDesign = action.payload;
    },
    editFooter: (state, action) => {
      state.footer = action.payload;
    },
    editFooterDesign: (state, action) => {
      state.footerDesign = action.payload;
    },
  },
});

export const {
  finalCode,
  editglobalDesign,
  editNavbar,
  editNavbarDesign,
  editHome,
  editHomeDesign,
  editService,
  editServiceDesign,
  editClient,
  editClientDesign,
  editContact,
  editContactDesign,
  editFooter,
  editFooterDesign,
} = E02_Slice.actions;

export default E02_Slice.reducer;
