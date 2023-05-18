import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalCode: "",
  globalDesign: {
    website_background_color: "#000000",
    secondMainHeading_color: "#878787",
    secondMainHeading_FontSize: "12",
    secondMainHeading_letterSpacing: "-1",
    paragraph_lineHeight: "180",
    button_backgrounColor: "#000",
  },
  navbar: {
    nav_logo: "Agglomerate",
    logoText: "Design by",
    logoTextlink: "TEMPLATED",
    nav_element1: "Homepage",
    nav_element2: "Services",
    nav_element3: "Ecommerce",
    nav_element4: "About",
    nav_element5: "Contact",
    image: "https://i.ibb.co/cwXQqkt/header-image.jpg",
  },
  navbarDesign: {
    padding: "30",
    logoHeadingColor: "#101010",
    menuElements_paddingTop: "10",
    menuElements_fontSize: "13",
    menuElements_fontWeight: "300",
    menuElements_Color: "#585858",
    image_paddingBottom: "40",
  },

  PageContent: {
    sectionHeading: "Praesent scelerisque scelerisque erat",
    sectionImage: "https://i.ibb.co/PjWPSFC/content-image.jpg",
    paragraph01:
      " This is Ministerial , a free, fully standards-compliant CSS template designed by TEMPLATED. The photos in this template are from Fotogrph. This free template is released under the Creative Commons Attribution license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :)",
    paragraph02:
      " Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit acmauris. Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet ultrices eget.Pellentesque pede. Donec pulvinar ullamcorper metus. In eu odio at lectus pulvinar mollis. Vestibulum sem magna, elementum ut, vestibulum eu, facilisis quis, arcu. Mauris a dolor. Nulla facilisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit. Phasellus pellentesque, ante nec iaculis dapibus, eros justo auctor lectus, a lobortis lorem mauris quis nunc. Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In hac habitasse platea dictumst.",
    button: "Read More",
  },
  pageDesign: {
    page_borderLine_weight: "1",
    page_borderLine_color: "#141010",
    page_paddingTop: "50",
    Content_float: "left",
    contentWidth: "750",
  },

  TwoColumnContent: {
    column_1_mainHeading: "Mauris vulputate dolor",
    column_1_Heading01: "Maecenas luctus lectus",
    column_1_paragraph01:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",
    column_1_Heading02: "Integer gravida nibh",
    column_1_paragraph02:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",
    column_1_Heading03: "Fusce ultrices fringilla",
    column_1_paragraph03:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",

    column_2_mainHeading: "Nulla luctus eleifend purus",
    column_2_Heading01: "Maecenas luctus lectus",
    column_2_paragraph01:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",
    column_2_Heading02: "Integer gravida nibh",
    column_2_paragraph02:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",
    column_2_Heading03: "Fusce ultrices fringilla",
    column_2_paragraph03:
      "Quisque dictum integer nisl risus, sagittis convallis, rutrum id, congue, and nibh.",
  },
  columnDesign: {
    heading1_fontSize: "1.5",
    // 320
    heading2_color: "#101010",
    column_1_float: "left",
    column_1_width: "350",
    column_2_float: "right",
    column_2_width: "350",
  },

  SideBar: {
    box1_heading: "Praesent mattis",
    Link01: "Vestibulum luctus venenatis dui",
    Link02: "Aenean elementum facilisis ligula",
    Link03: "Ut tincidunt elit vitae augue",
    Link04: "Vestibulum luctus venenatis dui",
    Link05: "Ut tincidunt elit vitae augue",
    Link06: "Sed quis odio sagittis leo vehicula",

    box2_heading: "Maecenas lectus",
    _01_image1: "https://i.ibb.co/JR5c4Q6/img02.jpg",
    _01_para01:
      "Nullam non wisi a sem eleifend. Donec mattis libero eget urna.",
    _01_para02: "October 21, 2002 | (10 ) Comments",
    _02_image2: "https://i.ibb.co/jT3yxjv/img03.jpg",
    _02_para01:
      "Nullam non wisi a sem eleifend. Donec mattis libero eget urna.",
    _02_para02: "October 21, 2002 | (10 ) Comments",
    _03_image3: "https://i.ibb.co/y47Cv8G/img04.jpg",
    _03_para01:
      "Nullam non wisi a sem eleifend. Donec mattis libero eget urna.",
    _03_para02: "October 21, 2002 | (10 ) Comments",

    button: "Read More",
  },
  sideBarDesign: {
    sidebar_float: "right",
    sidebar_width: "300",
    sidebar_box1_marginBotom: "50",
    //289
    sideBar_borderLine_weight: "1",
    sideBar_borderLine_color: "#72716f",
  },
  footer: {
    copyRight:
      " &copy; Untitled. All rights reserved. Design by TEMPLATED and Photos by Fotogrph.",
  },
  footerDesign: {
    footer_borderLine_weight: "1",
    footer_borderLine_color: "#dedede",
    footer_paddingTop_Bottom: "50",
    overflow: "hidden",
    footer_contentFontSize: "12",
  },
};

const E03_Slice = createSlice({
  name: "E03",
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
    editPage: (state, action) => {
      state.PageContent = action.payload;
    },

    editPageDesign: (state, action) => {
      state.pageDesign = action.payload;
    },
    editColumns: (state, action) => {
      state.TwoColumnContent = action.payload;
    },
    editColumnDesign: (state, action) => {
      state.columnDesign = action.payload;
    },
    editSideBar: (state, action) => {
      state.SideBar = action.payload;
    },
    editsideBarDesign: (state, action) => {
      state.sideBarDesign = action.payload;
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
  editPage,
  editPageDesign,
  editColumns,
  editColumnDesign,
  editClient,
  editClientDesign,
  editSideBar,
  editsideBarDesign,
  editFooter,
  editFooterDesign,
} = E03_Slice.actions;

export default E03_Slice.reducer;
