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
  menu: {
    menu_heading: 'Our Delicious ',
    menu_catagory1: 'breakfast',
    menu_catagory2: 'lunch',
    menu_catagory3: 'dinner',
    menu_catagory4: 'desserts',

    menu_catagory1_img: 'https://i.ibb.co/WtDY8jV/menu-breakfast.jpg',
    menu_catagory2_img: 'https://i.ibb.co/F5KnzBL/menu-lunch.jpg',
    menu_catagory3_img: 'https://i.ibb.co/b1LZnYw/menu-dinner.jpg',
    menu_catagory4_img: 'https://i.ibb.co/d7YB3Cm/menu-desert.jpg',

    menu_info1_heading: 'we serve best food in the country',
    menu_info1_paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, perspiciatis.',

    menu_info2_heading: 'we serve best food in the country',
    menu_info2_paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, perspiciatis.',

    menu_info3_heading: 'we serve best food in the country',
    menu_info3_paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, perspiciatis.',

    menu_info4_heading: 'we serve best food in the country',
    menu_info4_paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, perspiciatis.',
  },
  menuDesign: {
    info_heading_fontSize: '2.4',
    info_heading_fontWeight: 'bold',
    info_paragraph_fontSize: '1.6',
    info_paragraph_fontWeight: 'normal',
    text_align: 'left',

    border_radius_img: '1',
    border_radius_frame: '1',

    image_padding: '2',

    buttons_headings_border_type: 'dashed',
    buttons_margin_bottom: '5',
  },

  popular: {
    background_Picture: 'https://i.ibb.co/1nYcthp/popular-bg.jpg',

    card1_heading: 'Fried Chicken',
    card1_stars: '4',
    card1_price: '20.00',
    card1_img: 'https://i.ibb.co/7XZ5Z5p/popular1.jpg',

    card2_heading: 'Margherita',
    card2_stars: '4',
    card2_price: '20.00',
    card2_img: 'https://i.ibb.co/7XZ5Z5p/popular1.jpg',

    card3_heading: 'Borrito',
    card3_stars: '4',
    card3_price: '20.00',
    card3_img: 'https://i.ibb.co/7XZ5Z5p/popular1.jpg',

    card4_heading: 'Pasta',
    card4_stars: '4',
    card4_price: '20.00',
    card4_img: 'https://i.ibb.co/7XZ5Z5p/popular1.jpg',

    cards_button: 'Add to cart',
  },

  popularDesign: {
    main_heading_marginTop: '3',
    card_padding: '1',
    transition_time: '0.4',
    card_border_radius: '1',
    card_background_color: '#f0f8ff',
    card_heading_fontSize: '3',
    card_heading_fontWeight: 'bold',
    stars_fontSize: '1.6',
    stars_color: '#f7ca3e',
    price_fontSize: '2.6',
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
    editMenu: (state, action) => {
      state.menu = action.payload;
    },
    editMenuDesign: (state, action) => {
      state.menuDesign = action.payload;
    },
    editPopular: (state, action) => {
      state.popular = action.payload;
    },
    editPopularDesign: (state, action) => {
      state.popularDesign = action.payload;
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
  editMenu,
  editMenuDesign,
  editPopular,
  editPopularDesign,
} = FS1_Slice.actions;

export default FS1_Slice.reducer;
