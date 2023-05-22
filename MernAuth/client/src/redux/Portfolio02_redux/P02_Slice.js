import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  finalCode: '',
  globalDesign: {
    backgroundColor: '#ffffff',

    fontFamily: 'Poppins',
    fontSize: '0.938',
    color: '#0e3113',
  },
  header: {
    nav_logo: 'https://i.ibb.co/Gt5hrSt/h.png',
    nav_element1: 'Home',
    nav_element2: 'About',
    nav_element3: 'Skills',
    nav_element4: 'Projects',
    nav_element5: 'Contact',
  },
  headerDesign: {
    navbar_height: '3',
    navbarMenu_font_weight: '600',
    navbar_Bg: '#ffffff',
    navbar_box_shadow_Bg: '#5d8ec026',
    navbarMenu_justify_content: 'space-between',
    navbarImage_width: '3',
  },

  home: {
    hero_greeting: 'Hi 👋',
    hero_intro: 'I am',
    hero_name: 'Tushar Sahu',
    hero_jobTitle: 'MERN Developer',
    homeSide_image: 'https://i.ibb.co/zRBL03M/profile.gif',
    resume_button: 'Resume',
  },
  homeDesign: {
    homeTitle_fontSize: '2',
    homeTitle_color: '#4070f4',
    homeIcons_fontSize: '2',
    homeButton_Bg: '#4070f4',
    homeButton_fontWeight: '600',
    homeButton_borderRadius: '0.5',
  },
  about: {
    about_heading: 'About',
    about_image: 'https://i.ibb.co/VvhpqRL/profile-1.jpg',
    about_intro: 'I am Tushar Sahu',
    info_para_01:
      ' Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.',
    info_para_02: ' Drop a mail starsama300@gmail.com',
  },
  aboutDesign: {
    aboutPaddingTop: '10',
    aboutPaddingLeft: '15',
    about_intro_marginBottom: '1',
    imagePosition: 'center',
    imageWidth: '200',
    imageBorderRadius: '0.5',
    imageTransition: 'ease',
  },
  education: {
    education_heading: 'Education',
    education_name1: 'Full Stack Web Development',
    education_plateform1: 'COMSATS University',
    education_duration1: 'October 2021 - Present',
    education_name2: 'B.Tech(IT)',
    education_plateform2: 'Institute of Technology',
    education_duration2: 'August 2016 - May 2020',
  },
  educationDesign: {
    fontweight: '600',
    boxPadding: '1',
    boxRadius: '0.5',
    boxMarginBottom: '2',
    Transition: 'ease',
    education_name_margin: '6',
    education_name_fontSize: '20',
    education_platform_margin: '6',
    education_plateform_fontSize: '16',
    education_duration_margin: '6',
    education_duration_fontSize: '12',
  },
  skills: {
    skills_heading: 'Skills',
    skill_01: 'HTML',
    skill_02: 'CSS',
    skill_03: 'JavaScript',
    skill_04: 'React',
    skill_05: 'Redux',
    skill_06_image: 'https://i.ibb.co/D889bV0/typescript.png',
    skill_06: 'TypeScript',
    skill_07_image: 'https://i.ibb.co/xjFJ3TW/express.png',
    Skill_07: 'Express.js',
    Skill_08: 'Node.js',
    skill_09_image: 'https://i.ibb.co/j4TjMPW/mongodb.png',
    Skill_09: 'MongoDB',
    skill_010_image: 'https://i.ibb.co/R9rnQ7t/git.png',
    Skill_010: 'Github',
    skill_011_image: 'https://i.ibb.co/R9rnQ7t/git.png',
    Skill_011: 'Git',
    skill_012_image: 'https://i.ibb.co/61vH369/dsa.png',
    Skill_012: 'Data Structures and Algorithms',
  },
  skillsDesign: {
    skills_box_paddingTop: '0.5',
    skills_box_paddingleft: '1',
    skills_box_marginBottom: '2',
    skills_box_borderRadius: '0.5',
    Skills_font_weight: '600',
    Skills_boxShadow_bg: '#0e243126',
  },
  project: {
    project_heading: 'Projects',
    project_01_image: 'https://i.ibb.co/ng17F4W/01.png',
    project_01_title: 'MedPlusMart.com clone',
    project_01_subtitle:
      'A web application to buy medicines online by uploading the prescriptions. Features: User authentication Prescription upload feature.',
    project_01_detail:
      ' A collaborative project, built in 4 days by a team of 6 developers',
    project_01_languages: 'HTML | CSS | DOM',
    project_01_button: 'Live',

    project_02_image: 'https://i.ibb.co/gmnZ49S/epic.png',
    project_02_title: 'Epicgames.com clone',
    project_02_subtitle:
      ' Epic Games, Inc. is an American video game and publisher website.',
    project_02_detail:
      'A collaborative project built by a team of 6, executed in 5 days.',
    project_02_languages: 'HTML | CSS | Javascript | Node | Express | MongoDB',
    project_02_button1: 'Live',
    project_02_button2: 'Blog',

    project_03_image: 'https://i.ibb.co/dpRptWJ/youtube.png',
    project_03_title: 'Youtube clone',
    project_03_subtitle: 'A web application which is just cpoy of Youtube.',
    project_03_detail: 'It is Individual Project build by Me.',
    project_03_languages: 'HTML | CSS | DOM',

    project_04_image: 'https://i.ibb.co/CQ4FkXL/project.png',
    project_04_title: 'project',
    project_04_subtitle: ' A project web application.',
    project_04_detail: ' It is Individual Project build by Me.',
    project_04_languages: 'HTML | CSS | DOM',

    project_05_image: 'https://i.ibb.co/hDHPH8w/swiggy.jpg',
    project_05_title: 'Swiggy clone',
    project_05_subtitle:
      ' Swiggy is food ordering and delivery service provider in all over india from your nearest Hotels.',
    project_05_detail:
      ' A collaborative project built by a team of 4, executed in 4 days.',
    project_05_languages: 'React | Redux | Node | Express | MongoDB',
    project_05_button1: 'Code',
    project_05_button2: 'Live',

    project_06_image: 'https://i.ibb.co/wNQD0ZC/Tinde-chat.png',
    project_06_title: ' Tinde Chat',
    project_06_subtitle:
      " Tinde Chat, it's chat application you can connect and chat with others.",
    project_06_detail:
      ' A collaborative project built by a team of 3, executed in 3 days.',
    project_06_languages: 'React | Redux | Node | Express | MongoDB',
    project_06_button1: 'Code',
    project_06_button2: 'Live',

    project_07_image: 'https://i.ibb.co/SQ8vLR0/Redux-shop.png',
    project_07_title: ' Shopping App',
    project_07_subtitle: " It's two Page Shopping app using React Redux.",
    project_07_detail:
      ' A collaborative project built by a team of 3, executed in 3 days.',
    project_07_languages: 'React | Redux | Rest API',
    project_07_button1: 'Code',
    project_07_button2: 'Live',
  },
  projectDesign: {
    projectConatiner_maxWidth: '1024',
    projectConatiner_display: 'grid',
    projectImage_box_shadow_bg: '#0e243126',
    projectImage_borderRaduis: '0.5',
    projectImage_transition: '1',
    projectImage_marginBottom: '0.5',
    projectTitle_fontSize: '1.25',
  },
  Footer: {
    message: 'Get in Touch',
    hero_name: 'Tushar Sahu',
    text1: 'LinkedIn',
    text2: 'Twitter',
    text3: 'E-mail',
    Phone: 'Phone',
    linkToGithub: 'GitHub',
    copyRight: '2020 copyright all right reserved',
  },
  footerDesign: {
    background_color: '#0e2431',
    text_align: 'center',
    font_weight: '600',
    footerTitle_fontSize: '2',
    footerTitle_marginBottom: '2',
    footerIcon_margin: '1',
  },
};

const P02_Slice = createSlice({
  name: 'P02',
  initialState,
  reducers: {
    finalCode: (state, action) => {
      state.finalCode = action.payload;
    },
    editRootTheme: (state, action) => {
      state.globalDesign = action.payload;
    },
    editheader: (state, action) => {
      state.header = action.payload;
    },
    editheaderDesign: (state, action) => {
      state.headerDesign = action.payload;
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
    editEducation: (state, action) => {
      state.education = action.payload;
    },
    editEducationDesign: (state, action) => {
      state.educationDesign = action.payload;
    },
    editSkills: (state, action) => {
      state.skills = action.payload;
    },
    editSkillsDesign: (state, action) => {
      state.skillsDesign = action.payload;
    },
    editproject: (state, action) => {
      state.project = action.payload;
    },
    editprojectDesign: (state, action) => {
      state.projectDesign = action.payload;
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
  editRootTheme,
  editheader,
  editheaderDesign,
  editHome,
  editHomeDesign,
  editAbout,
  editAboutDesign,
  editEducation,
  editEducationDesign,
  editSkills,
  editSkillsDesign,
  editproject,
  editprojectDesign,
  editFooter,
  editFooterDesign,
} = P02_Slice.actions;

export default P02_Slice.reducer;
