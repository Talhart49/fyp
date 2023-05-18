import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalCode: "",
  rootTheme: {
    h1_color: "#111111",
    h1_fontFamily: "Pacifico",
    h1_textAlign: "center",
    h1_fontSize: "80",
    h2_fontFamily: "Pacifico",
    h2_textAlign: "center",
    h2_fontSize: "40",
  },

  header: {
    element1: "Home",
    element2: "Team",
    element3: "Offers",
    heading1: "Margs Surf Camp",
    heading2_quote:
      "Join us on our Journey. Come Surf, come Swim and come by for a change!",
  },
  headerDesign: {
    backgroungImage: "https://i.ibb.co/KrJNpz4/background2-web.jpg",
    backgroungImageSize: "cover",
    headerBackgroundColor: "#ffffff",
    headerHeight: "50",
    headerPosition: "fixed",
    elements_paddingLeft: "50",
    // .menu_item
    elementsBackgroundColor: "#ffffff",
    logo_backgroundImage: "https://i.ibb.co/rQ993NR/logo.png", //.branding 249
  },

  team: {
    about_header: "Our Team",
    card_1_name: "Alex Laz",
    card_1_paragraph:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    card_2_name: "Jona Aellig",
    card_2_paragraph:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    card_3_name: "Selia Menn",
    card_3_paragraph:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    card_4_name: "Steffi Roll",
    card_4_paragraph:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    card_5_name: "Tinu Weber",
    card_5_paragraph:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  teamDesign: {
    card_minWidth: "250",
    card_maxWidth: "300",
    cardHeight: "400",
    card_marginRight: "20",
    card_marginLeft: "20",
    card_marginBottom: "40",
    card_paddingTop: "10",
    cardParagraph_maxWidth: "200",
    cardImage_borderRadius: "200",

    card_1_backgroundImage: "https://i.ibb.co/zndrpRQ/surf01.jpg",
    card_2_backgroundImage: "https://i.ibb.co/Sw5fy3b/surf02.jpg",
    card_3_backgroundImage: "https://i.ibb.co/BzXkWp3/surf03.jpg",
    card_4_backgroundImage: "https://i.ibb.co/LhGwHRh/surf04.jpg",
    card_5_backgroundImage: "https://i.ibb.co/BZngRRs/surf05.jpg",
  },

  articles: {
    heading: "Articles",
    article_1_text: "Surfing",
    article_1_para01:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    article_1_para02:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.",

    article_2_text: "Partys",
    article_2_para01:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    article_2_para02:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.",

    article_3_text: "Good Food",
    article_3_para01:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    article_3_para02:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit.",
  },
  articlesDesign: {
    article_card_minWidth: "350",
    article_card_maxWidth: "500",
    article_card_backgroundColor: "#ffffff0d",
    article_Text_marginBottom: "50",
    article_para_maxWidth: "70",
    article_backgroundImage: "https://i.ibb.co/B611Cc3/background1-web.jpg",
    article_backgroundImageSize: "cover",
  },

  footer: {
    footerText:
      "Margs Surf Camp - Wallcliffe Rd. 1050, Margaret River WA - WebDevelopment: Calmar Solutions",
  },
  footerDesign: {
    footerSectionHeight: "30",
    footertext_marginTop: "10",
    footertext_marginBottom: "30",
    footertext_fontWeight: "600",
  },
};

const B02_Slice = createSlice({
  name: "B02",
  initialState,
  reducers: {
    editFinalCode: (state, action) => {
      state.finalCode = action.payload;
    },
    editRootTheme: (state, action) => {
      state.rootTheme = action.payload;
    },

    editHeader: (state, action) => {
      state.header = action.payload;
    },
    editHeaderDesign: (state, action) => {
      state.headerDesign = action.payload;
    },
    editTeam: (state, action) => {
      state.team = action.payload;
    },
    editTeamDesign: (state, action) => {
      state.teamDesign = action.payload;
    },
    editArticles: (state, action) => {
      state.articles = action.payload;
    },
    editArticlesDesign: (state, action) => {
      state.articlesDesign = action.payload;
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
  editFinalCode,
  editRootTheme,
  editHeader,
  editHeaderDesign,
  editTeam,
  editTeamDesign,
  editArticles,
  editArticlesDesign,
  editFooter,
  editFooterDesign,
} = B02_Slice.actions;

export default B02_Slice.reducer;
