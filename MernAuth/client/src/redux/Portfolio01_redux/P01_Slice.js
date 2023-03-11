import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',
  rootTheme: {
    headingFontFamily: 'Poppins',
    paragraphFontFamily: 'DM Sans',
    themeColor: '#27ae60',
    backgroundColor: '#191d2b',
    textColor: '#D6D5D5',
  },
  home: {
    hero_image: 'https://i.ibb.co/TqtkP8M/hero.png',
    hero_name: 'M Sani',
    hero_Title: 'A Frontend Developer',
    hero_introduction:
      "I'm a Web developer. I love to create beautiful and functional websites. Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, deleniti. elit. Repellat dicta eos aut rem quisquam,",
    cv_button: 'Download CV',
  },
  homeDesign: {
    image_border_radius: '15',
    heading_fontSize: '53',
    heading_fontWeight: 'bold',
    paragraph_fontSize: '16',
    paragraph_fontWeight: 'normal',
    paragraph_marginTop: '10',
  },
  about: {
    section_heading: 'information about me',
    info_para_01:
      'Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet,consectetur adipisicing elit. Consectetur, deleniti. elit.Consectetur aliquid eius id voluptate praesentium dolorum estitaque!',
    info_para_02:
      'Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet,consectetur adipisicing elit. Consectetur, deleniti. elit.Consectetur aliquid eius id voluptate praesentium dolorum estitaque!',
    button_text: 'Hire Me',
    completed_projects: '40',
    years_of_expericnce: '4',
    happy_clients: '35',
    customers_reviews: '25',
  },
  aboutDesign: {
    section_heading_fontSize: '48',
    column_heading_fontSize: '30',
    paragraph_fontSize: '15',
    heading_color: '#FFFFFF',
    section_content_marginTop: '50',
    boxes_heading_fontSize: '45',
    heading_content_fontSize: '20',
    boxes_animation_direction: 'up',
    boxes_animation_height: '7',
  },
  skills: {
    skill_01: 'HTML5',
    skill_01_experince: '80',
    skill_02: 'CSS3',
    skill_02_experince: '80',
    skill_03: 'JavaScript',
    skill_03_experince: '55',
    skill_04: 'WordPress',
    skill_04_experince: '85',
    skill_05: 'Python',
    skill_05_experince: '60',
    skill_06: 'React',
    skill_06_experince: '50',
  },
  skillsDesign: {
    skills_section_heading_fontSize: '35',
    skills_heading_fontColor: '#FFFFFF',
    skills_heading_fontSize: '19',
    bars_height: '8',
  },
  portfolio: {
    portfolio_header_text:
      'Here is some of my work that I have done in various programing languages.',
    portfolio_01_image: 'https://i.ibb.co/0fvKhpF/port1.jpg',
    portfolio_01_title: 'View Project',
    portfolio_01_link: '',
    portfolio_02_image: 'https://i.ibb.co/Gk9yrtd/port2.jpg',
    portfolio_02_title: 'View Project',
    portfolio_02_link: '',
    portfolio_03_image: 'https://i.ibb.co/YZ0x1Lp/port3.jpg',
    portfolio_03_title: 'View Project',
    portfolio_03_link: '',
    portfolio_04_image: 'https://i.ibb.co/WBTTbWC/port4.jpg',
    portfolio_04_title: 'View Project',
    portfolio_04_link: '',
    portfolio_05_image: 'https://i.ibb.co/1rSZLC7/port5.jpg',
    portfolio_05_title: 'View Project',
    portfolio_05_link: '',
    portfolio_06_image: 'https://i.ibb.co/4FGZtjC/port6.jpg',
    portfolio_06_title: 'View Project',
    portfolio_06_link: '',
  },
  portfolioDesign: {
    text_fontSize: '17',
    text_align: 'center',
    letter_spacing: '0.6',
    cards_per_row: '3',
    card_gap: '2.4',
    card_image_height: '300',
  },
  service: {
    service_1_name: 'Web Design',
    service_1_description:
      'Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.',
    service_2_name: 'Responsive Design',
    service_2_description:
      'Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.',
    service_3_name: 'Graphic Design',
    service_3_description:
      'Lorem ipsum dolor sit elit. Quaerat non aut sapiente pariatur quiaaperiam nobis doloribus suscipit ipsam quam.',
  },
  serviceDesign: {
    Padding: '30',
    cards_marginTop: '70',
    icons_color: '#FFFFFF',
    icons_fontSize: '32',
    service_fontSize: '25',
    service_paragraph_fontSize: '14',
  },
  contact: {
    email: 'msani.xyz@gmail.com',
    phone: '+923008000000',
    address: 'Pakistan, punjab, Lahore',
    copyright: 'CopyRight 2023 | Designed By Mohammad Sani',
  },
  contactDesign: {
    margin_top: '70',
    grid_gap: '2.4',
    font_style: 'italic',
    input_feilds_fontSize: '16',
  },
};

const P01_Slice = createSlice({
  name: 'P01',
  initialState,
  reducers: {
    editRootTheme: (state, action) => {
      state.rootTheme = action.payload;
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
    editSkills: (state, action) => {
      state.skills = action.payload;
    },
    editSkillsDesign: (state, action) => {
      state.skillsDesign = action.payload;
    },
    editPortfolio: (state, action) => {
      state.portfolio = action.payload;
    },
    editPortfolioDesign: (state, action) => {
      state.portfolioDesign = action.payload;
    },
    editService: (state, action) => {
      state.service = action.payload;
    },
    editServiceDesign: (state, action) => {
      state.serviceDesign = action.payload;
    },
    editContact: (state, action) => {
      state.contact = action.payload;
    },
    editContactDesign: (state, action) => {
      state.contactDesign = action.payload;
    },
  },
});

export const {
  editRootTheme,
  finalCode,
  editHome,
  editHomeDesign,
  editAbout,
  editAboutDesign,
  editSkills,
  editSkillsDesign,
  editPortfolio,
  editPortfolioDesign,
  editService,
  editServiceDesign,
  editContact,
  editContactDesign,
} = P01_Slice.actions;

export default P01_Slice.reducer;
