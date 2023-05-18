import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalCode: "",

  globalDesign: {
    imageObjectFit: "cover",
    paragraph_fontsize: "1.4",
    paragraph_marginTop: "5",
    sectionTitle_FontSize: "4",
    sectionTitle_FontWeight: "bold",
  },

  header: {
    logoText: "Shaif Arfan",
    nav_element1: "Home",
    nav_element2: "Services",
    nav_element3: "Projects",
    nav_element4: "About",
    nav_element5: "Contact",
  },

  headerDesign: {
    minHeight: "8",
    bgColor: "1f1e1e3d",
    transitionType: "ease",
    navbarMAxWidth: "1300",
    navbarPadding: "10",
    linkFontSize: "2.5",
    padding: "20",
    hamburgerMargin: "20",
  },
  
  heroSection: {
    hero_greeting: "Hello,",
    hero_intro: "My Name is",
    hero_name: "Arfan",
    portfolio_button: "Portfolio",
  },
  heroSectionDesign: {
    backgroundImage: "https://i.ibb.co/JBB3vrf/hero-bg.jpg",
    backgroundImageSize: "cover",
    backgroundImagposition: "center",
    heroText_fontSize: "4",
    heroText_Color: "transparent",
    heroContainer_paddingLeft: "50",
    heroContainer_justifyContent: "flex-start",
  },

  service: {
    sectionName: "Services",
    serviceParagraphDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias voluptatum explicabo!",
    service_1_image: "https://img.icons8.com/bubbles/100/000000/services.png",
    service_1_name: "Web Design",
    service_1_description:
      "Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.",
    service_2_image: "https://img.icons8.com/bubbles/100/000000/services.png",
    service_2_name: "Web Design",
    service_2_description:
      "Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.",
    service_3_image: "https://img.icons8.com/bubbles/100/000000/services.png",
    service_3_name: "Web Design",
    service_3_description:
      "Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.",
    service_4_image: "https://img.icons8.com/bubbles/100/000000/services.png",
    service_4_name: "Web Design",
    service_4_description:
      "Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.",
  },

  serviceDesign: {
    serviceCards_marginTop: "50",
    serviceCards_items: "flex-start",
    serviceCards_padding: "30",
    serviceCards_borderRadius: "10",
    serviceCards_backGroundImage: "https://i.ibb.co/ynBWFYQ/img-1.jpg;",
    serviceCards_backGroundImage_opacity: "0.9",
    serviceName_fontSize: "2",
    serviceName_Color: "#ffffff",
    serviceName_marginBottom: "10",
    serviceDescription_Color: "#ffffff",
    serviceDescription_textAlign: "left",
  },

  project: {
    sectionTitle: "Recent Projects",
    project_1_name: "Project 1",
    project_1_heading2: "Coding is Love",
    project_1_description:
      "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctioillum quae mollitia ut, accusantium eius odio ducimus illo nequeatque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!",
    project_1_image: "https://i.ibb.co/ynBWFYQ/img-1.jpg",

    project_2_name: "Project 2",
    project_2_heading2: "Coding is Love",
    project_2_description:
      "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctioillum quae mollitia ut, accusantium eius odio ducimus illo nequeatque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!",
    project_2_image: "https://i.ibb.co/ynBWFYQ/img-1.jpg",

    project_3_name: "Project 3",
    project_3_heading2: "Coding is Love",
    project_3_description:
      "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctioillum quae mollitia ut, accusantium eius odio ducimus illo nequeatque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!",
    project_3_image: "https://i.ibb.co/ynBWFYQ/img-1.jpg",

    project_4_name: "Project 4",
    project_4_heading2: "Coding is Love",
    project_4_description:
      "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctioillum quae mollitia ut, accusantium eius odio ducimus illo nequeatque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!",
    project_4_image: "https://i.ibb.co/ynBWFYQ/img-1.jpg",

    project_5_name: "Project 5",
    project_5_heading2: "Coding is Love",
    project_5_description:
      "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctioillum quae mollitia ut, accusantium eius odio ducimus illo nequeatque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!",
    project_5_image: "https://i.ibb.co/ynBWFYQ/img-1.jpg",
  },

  projectDesign: {
    projectsContainer_maxWidth: "1200",
    projectInfo_padding: "30",
    projectInfo_alignItems: "flex-start",
    projectInfo_color: "#ffffff",
    projectName_fontSize: "4",
    projectName_fontWeight: "500",
    projectHeading2_fontSize: "1.8",
    projectHeading2_fontWeight: "500",
    projectHeading2_marginTop: "10",
    projectParagraohInfo_color: "#ffffff",
    projectBackgroundImage_opacity: "0.6",
  },

  about: {
    about_image: "https://i.ibb.co/7rRKDPY/img-2.jpg",
    about_heading: "About me",
    about_intro: "Front End Developer",
    info_para:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores, velit alias eius non illum beatae atque repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni!  Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt reprehenderit libero enim!",
    button: "Downlaod Resume",
  },
  aboutDesign: {
    about_paddingLeft: "20",
    about_paddingTop: "100",
    about_intro_fontSize: "1.8",
    about_intro_fontWeight: "500",
    about_intro_letterSpacing: "0.2",
    about_intro_marginBottom: "10",
    imageBorderRadius: "5",
  },

  contact: {
    contactSection: "Contact info",
    phoneImage: "https://img.icons8.com/bubbles/100/000000/phone.png",
    phoneTitle: "Phone",
    phone1: "+1 234 123 1234",
    phone2: "+1 234 123 1234",
    emailImage: "https://img.icons8.com/bubbles/100/000000/new-post.png",
    emailTitle: "Email",
    email1: "info@gmail.com",
    email2: "abcd@gmail.com",
    addressImage: "https://img.icons8.com/bubbles/100/000000/map-marker.png",
    addressTitle: "Address",
    address: "Fatikchhari, Chittagong, Pakistan",
  },

  contactDesign: {
    contactBox_borderRaduis: "10",
    contactBox_padding: "30",
    ContactIconWidth: "70",
    ContactIcon_marginBottom: "10",
    ContactHeadings_fontSize: "2.5",
    ContactHeadings_fontWeight: "500",
  },
  Footer: {
    hero_name: "Shaif Arfan",
    message: "Your Complete Web Solution",
    image1: "https://img.icons8.com/bubbles/100/000000/facebook-new.png",
    image2: "https://img.icons8.com/bubbles/100/000000/instagram-new.png",
    image3: "https://img.icons8.com/bubbles/100/000000/behance.png",
    copyRight: "Copyright © 2020 Arfan. All rights reserved",
  },
  footerDesign: {
    footerPaddingTop: "50",
    footerPaddingBottom: "10",
    footerMessageColor: "#ffffff",
    footerMessageFontWeight: "500",
    footerMessageFontSize: "1.8",
  },
};

const PW_Slice = createSlice({
  name: "PW",
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
    editheroSection: (state, action) => {
      state.heroSection = action.payload;
    },
    editheroSectionDesign: (state, action) => {
      state.heroSectionDesign = action.payload;
    },
    editservice: (state, action) => {
      state.service = action.payload;
    },
    editserviceDesign: (state, action) => {
      state.serviceDesign = action.payload;
    },
    editproject: (state, action) => {
      state.project = action.payload;
    },
    editprojectDesign: (state, action) => {
      state.projectDesign = action.payload;
    },
    editabout: (state, action) => {
      state.about = action.payload;
    },
    editaboutDesign: (state, action) => {
      state.aboutDesign = action.payload;
    },
    editcontact: (state, action) => {
      state.contact = action.payload;
    },
    editcontactDesign: (state, action) => {
      state.contactDesign = action.payload;
    },
    editFooter: (state, action) => {
      state.Footer = action.payload;
    },
    editFooterDesign: (state, action) => {
      state.footerDesign = action.payload;
    },
  },
});

export const {
  finalCode,
  editGlobalDesign,
  editheader,
  editheaderDesign,
  editheroSection,
  editheroSectionDesign,
  editservice,
  editserviceDesign,
  editproject,
  editprojectDesign,
  editabout,
  editaboutDesign,
  editcontact,
  editcontactDesign,
  editFooter,
  editFooterDesign,
} = PW_Slice.actions;

export default PW_Slice.reducer;
