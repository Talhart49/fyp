import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',

  navbar: {
    logo: 'https://i.ibb.co/4gmc2TW/logo.png',
    nav_element1: 'Home',
    nav_element2: 'About',
    nav_element3: 'Contact',
    searchText: 'Article Search',
  },
  about: {
    about_header: 'The heaven for bloggers',
    about_paragraph1:
      ' iBlog is a website which lets you submit an article which upon approval will be up on our website and you can get a good amount of reach from here!',
    about_paragraph2:
      ' My Halloween decorations are staying in the box this year. To be honest, they didn’t make it out of the box last year either. My Halloween spirit has officially been bludgeoned to death by teenagers who no longer care and a persistent October fear of the  Northern California wildfires. And speaking of fear, isn’t there  more than enough of that going around? Maybe all of us can pretend  that Halloween isn’t even happening this year?',
    about_images: 'https://i.ibb.co/NW1nL3F/1.png',
  },
  articles: {
    heading: 'Featured Articles',
    article_1_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_1_author: 'John Doe',
    article_1_date: 'Oct 25',
    article_1_readTime: '5 min read',
    article_1_image: 'https://i.ibb.co/92yGdbQ/2.png',

    article_2_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_2_author: 'John Doe',
    article_2_date: 'Oct 25',
    article_2_readTime: '5 min read',
    article_2_image: 'https://i.ibb.co/BGq1WkQ/4.png',

    article_3_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_3_author: 'John Doe',
    article_3_date: 'Oct 25',
    article_3_readTime: '5 min read',
    article_3_image: 'https://i.ibb.co/4ZcpVDc/3.png',

    article_4_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_4_author: 'John Doe',
    article_4_date: 'Oct 25',
    article_4_readTime: '5 min read',
    article_4_image: 'https://i.ibb.co/WBTTbWC/port4.jpg',

    article_5_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_5_author: 'John Doe',
    article_5_date: 'Oct 25',
    article_5_readTime: '5 min read',
    article_5_image: 'https://i.ibb.co/QjGHV0r/solar-panel.jpg',

    article_6_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_6_author: 'John Doe',
    article_6_date: 'Oct 25',
    article_6_readTime: '5 min read',
    article_6_image: 'https://i.ibb.co/ZMqNqM3/solar-roof.jpg',

    article_7_text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    article_7_author: 'John Doe',
    article_7_date: 'Oct 25',
    article_7_readTime: '5 min read',
    article_7_image: 'https://i.ibb.co/Gk9yrtd/port2.jpg',
  },

  blogPost: {
    topImage: 'https://i.ibb.co/92yGdbQ/2.png',

    blogPostHeading: 'The heaven for bloggers',
    blogAuthor: 'Bill Gates',
    blogDate: 'May 25, 2020',
    blogReadTime: '5 min read',
    blogPostText:
      'In communications and information processing, code is a system of  rules to convert information—such as a letter, word, sound, image, or   gesture—into another form, sometimes shortened or secret, for   communication through a communication channel or storage in a storage  medium. An early example is the invention of language, which enabled a   person, through speech, to communicate what they thought, saw, heard   or felt to others. But speech limits the range of communication to the  distance a voice can carry, and limits the audience to those present  when the speech is uttered . The invention of writing, which converted  spoken language into visual symbols, extended the range of   communication across space and time. The process of encoding converts   information from a source into symbols for communication or storage.  Decoding is the reverse process, converting code symbols back into a  form that the recipient understands, such as English or/and Spanish.',
  },

  recomendedBlogs: {
    recomendedBlogHeading: 'Recomended Blogs',

    Blog1:
      'Learn more about Machine Learning techniques in Pakistan by joining this channel',
    Blog1_author: ' Jhon Doe',
    Blo1_date: 'May 25',
    Blog1_readTime: '5 min read',
    Blog1_image: 'https://i.ibb.co/92yGdbQ/2.png',

    Blog2:
      'Learn more about Machine Learning techniques in Pakistan by joining this channel',
    Blog2_author: ' Jhon Doe',
    Blog2_date: 'May 25',
    Blog2_readTime: '5 min read',
    Blog2_image: 'https://i.ibb.co/4ZcpVDc/3.png',

    Blog3:
      'Learn more about Machine Learning techniques in Pakistan by joining this channel',
    Blog3_author: ' Jhon Doe',
    Blog3_date: 'May 25',
    Blog3_readTime: '5 min read',
    Blog3_image: 'https://i.ibb.co/4FGZtjC/port6.jpg',
  },

  contact: {
    contactHeading: 'Feel Free To Contact Us',
    name: 'Enter Your Name',
    number: 'Enter Your Phone Number',
    email: 'Enter Your Email',
    buttonText: 'Submit',
  },
  footer: {
    footerText: 'Copyright iBlog 2020',
  },

  rootTheme: {
    main_bg_color: '#bd6418',
    font1: 'Baloo Bhaina 2',
    font2: 'Roboto',
  },
  generalDesign: {
    max_width1: '80',
    max_width2: '60',
    margin_top: '32',
    margin_bottom: '32',
    margin_left: '23',
    margin_right: '23',

    buttonFontSize: '16',
    buttonHoverColor: '#fff',

    formInputFontSize: '16',
    inputFeildFontSize: '18',
  },

  navDesign: {
    fontSize: '35',
    paddingTop: '10',

    list_Style_Type: 'none',
  },
  aboutDesign: {
    padding: '9',
    borderRadius: '12',
    opacity: '0.5',
    contentPadding: '49',
    zIndex: '1',
  },

  articlesDesign: {
    backgroundColor: '#f8efef80',
    year_fontSize: '18',
    article_margin: '25',
    article_Image_width: '300',
    a_text_decoration: 'none',
    a_color: '#000',
  },
  blogPostDesign: {
    image_height: '404',
    p_fontSize: '18',
    author_margin: '12',
    cursor: 'pointer',
  },
  contactDesign: {
    opacity: '0.15',
    borderRadius: '12',
    zIndex: '-1',
  },
  footerDesign: {
    height: '50',
    color: '#fff',
  },
};

const B01_Slice = createSlice({
  name: 'B01',
  initialState,
  reducers: {
    editFinalCode: (state, action) => {
      state.finalCode = action.payload;
    },

    editNavbar: (state, action) => {
      state.navbar = action.payload;
    },
    editAbout: (state, action) => {
      state.about = action.payload;
    },
    editArticles: (state, action) => {
      state.articles = action.payload;
    },
    editBlogPost: (state, action) => {
      state.blogPost = action.payload;
    },
    editContact: (state, action) => {
      state.contact = action.payload;
    },
    editFooter: (state, action) => {
      state.footer = action.payload;
    },
    editRecomendedBlogs: (state, action) => {
      state.recomendedBlogs = action.payload;
    },

    editRootTheme: (state, action) => {
      state.rootTheme = action.payload;
    },
    editGeneralDesign: (state, action) => {
      state.generalDesign = action.payload;
    },
    editNavDesign: (state, action) => {
      state.navDesign = action.payload;
    },
    editAboutDesign: (state, action) => {
      state.aboutDesign = action.payload;
    },
    editArticlesDesign: (state, action) => {
      state.articlesDesign = action.payload;
    },
    editBlogPostDesign: (state, action) => {
      state.blogPostDesign = action.payload;
    },
    editContactDesign: (state, action) => {
      state.contactDesign = action.payload;
    },
    editFooterDesign: (state, action) => {
      state.footerDesign = action.payload;
    },
  },
});

export const {
  editFinalCode,
  editNavbar,
  editAbout,
  editArticles,
  editBlogPost,
  editContact,
  editFooter,
  editRecomendedBlogs,
  editRootTheme,
  editGeneralDesign,
  editNavDesign,
  editAboutDesign,
  editArticlesDesign,
  editBlogPostDesign,
  editContactDesign,
  editFooterDesign,
} = B01_Slice.actions;

export default B01_Slice.reducer;
